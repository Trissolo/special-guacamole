import GUI from "./gui.mjs";

export default class AoneGenericClass
{
    // current player attack
    at = 0;

    // current player constitution (robustezza)
    rf = 0;

    // current amount of monsters in melee fight
    nm = 0;

    // attack value for monster in melee
    am = 0;

    xf = 0;

    constructor(at = 215, rf = 80)
    {
        this.setPlayerStats(at, rf);

        document.getElementById("btn2").addEventListener("pointerdown", () => this.meleeRound());
    }

    setPlayerStats(at = 15, rf = 80)
    {
        this.at = at;

        this.rf = rf;
    }

    meleeFight()
    {
        // set 'this.nm' and 'this.am', derived from 'this.at'
        this.calcMeleeValues(this.at);

        // 13900 fu = 0: y = 1: rem syss + 12

        // Did the player flee the fight?
        this.fu = 0;

        // current meleeRound
        this.y = 1;

        this.meleeRound();

        


    }

    meleeRound()
    {
        console.clear();
        GUI.clear();
        GUI.colored(`nm= ${this.nm}, am= ${this.am} `, `rf = ${this.rf}`, 0x893489).removeLineBreak().line(` AT= ${this.at}`);
        // 13920 print"{rvon}      "y"{left}'  turno di mischia       {rvof}"
        GUI.line(`${this.y++}' turno di mischia`);
        // 13950 if nm = 1 then print"{down}Sei in mischia con un solo avversario{down}": goto 13990
        // 13960 print"{down}Sei in mischia con"nm"avversari{down}"

        GUI.line(`Sei in mischia con ${this.nm === 1? 'un solo avversario': `${this.nm} avversari`}`);

        // enemies attack loop
        // 13990 forj = 1 to nm: gosub200
        for (let j = 1; j <= this.nm; j++)
        {
            // nonspecific 'punti attacco' ('attack points')

            // 14020 if nm >= 4 then pa = int(at / 4): cs = 0: goto 14060
            // 14030 pa = int(at / nm) + 10: cs = 0: xf = 1

            const pa = this.nm >= 4? Math.floor(this.at / 4) : Math.floor(this.at / this.nm) + 10;
            
            // 
            let cs = 0;
            
            // potential wounds inflicted by current enemy
            if (this.nm >= 4)
            {
                this.xf = 1;
            }

            // random dice roll for 'colpo mancato' ('missing hit')
            // 14060 cm = int(100 * rnd(0)) + 1
            const cm = Math.floor(100 * Math.random()) + 1;
            GUI.addBR().line(`${GUI.emoji.debugInfo} ${this.am} > ${cm}`);

            // random dice roll for 'player parry'
            // 14070 pp = int(100 * rnd(0)) + 1
            const pp = Math.floor(100 * Math.random()) + 1;


            // 14080 if am < cm and nm = 1 then print"{yel}*{wht} L' avversario sbaglia il colpo": goto 14190
            // 14090 if am < cm then print"{yel}*{wht}";: printj;: print"'avversario sbaglia il colpo": goto 14190
    
            // contact or miss?
            if (this.am < cm)
            {
                // miss
                GUI.line(`${GUI.emoji.enemyMisses} L'avversario #${j} sbaglia il colpo`);
                console.log(`${j} xf MISS ${this.xf}`);
                //continue;

            }
            // 14100 if am >= cm and pa < pp then cs = 1
            else
            {
                // contact

                // wound
                if (pa < pp)
                {
                    cs = 1;
                }

                // 14110 cc = int(am / 20)
                const cc = Math.floor(this.am / 20);
                // 14120 if cc >= cm then xf = 2
                if (cc >= cm)
                {
                    this.xf = 2;
                }

                GUI.colored("CS=", cs, 0x89aa89).removeLineBreak().colored("  XF=", this.xf, 0xba6767);
                // 14130 if cs = 1 and xf = 1 then print"*";: printj;: print"'avversario ti fa {rvon}1 ferita{rvof}": rf = rf - 1: goto 14190
                // 14140 if cs = 1 and xf = 2 then print"*";: printj;: print"'avversario ti fa {rvon}2 ferite{rvof}": rf = rf - 2: goto 14190
                if (cs === 1 && this.xf > 0)
                {
                    const woundAmount = Math.min(2, this.xf);

                    GUI.line(`${GUI.emoji.enemyHits.repeat(woundAmount)} L'avversario ti fa ${woundAmount} ferite`);

                    this.rf -= woundAmount;
                    console.log(`${j} WOUND xf: ${this.xf}`);
                    
                }
                else
                {
                    // 14150 if nm = 1 then print"{grn}*{wht} Parato il colpo dell' avversario": goto 14190
                    // 14160 print"{grn}*{wht} Parato colpo del"j"'avversario"
                    GUI.line(`${GUI.emoji.enemyParried} Parato colpo del #${j} avversario`);
                    console.log(`${j} xf PARRIED = ${this.xf}`);
                }


            }
            
            console.log(`${j} - Resetting xf`);
            this.xf = 1;
        } // enemies attack loop

    // 14190 xf = 1: next: cc = 0: ifnm > 1 then cc = int(at / 15): gosub240
    // 14230 if ks > 0 then 14250
    // 14240 if left$(nm$,2) = " L" or left$(im$,2) = " L" then gosub280: goto 14350
    // 14250 ap = int(100 * rnd(0)) + 1
    // 14260 if at < ap then print"{down}Hai mancato il tuo colpo": goto 14350
    // 14270 xs = int(100 * rnd(0)) + 1
    // 14280 if at >= ap and sm >= xs then print"{down}L'avversario ha scansato tuo colpo": goto 14350
    // 14290 ts = 0
    // 14300 if at >= ap then ts = 1
    // 14310 if ts = 1 and cc >= ap then print"{down}^^ Hai ucciso {rvon}due{rvof} avversari": nm = nm - 2: goto 14350
    // 14320 if nm = 1 then 14340
    // 14330 if ts = 1 and cc < ap then print"{down}^ Hai ucciso  un  avversario": nm = nm - 1: goto 14350
    // 14340 if ts = 1 and cc < ap then print"{down}^ Hai ucciso l'ultimo avversario": nm = nm - 1
    // 14350 gosub200
    // 14360 if rf <= 0 then rf = 0
    // 14370 print"{down}la tua robustezza e' ora "rf: gosub240
    GUI.addBR().line(`La tua robustezza e' ora ${this.rf}`);
    // 14400 if rf <= 0 then print"{down}Sei morto !{160}!{160}!{160}!{160}!{160}!": rem syss + 18: goto 12210
    // 14410 if nm = 0 then 14740
    // 14420 if nm > 1 then print"{down}Gli avversari sono ora"nm
    // 14430 if nm = 1 then print"{down}Hai di fronte un solo avversario"
    // 14440 gosub240: print"{down}Puoi fare la scelta di : "
    // 14460 print"* 1 * Tentare la fuga"
    // 14470 print"* 2 * Continuare il combattimento"
    // 14480 gosub12690
    // 14490 if n > 2 then print"{up}{up}": goto 14480
    // 14500 onn goto 14510,14710
    // 14510 rem tentativo di fuga
    // 14515 print"{clr}"tab(7)"{rvon} Tentativo di fuga {rvof}"
    // 14540 print"{down}Per fuggire devi usare la tua Fortuna"
    // 14550 print"{down}("fr"{left})con un massimo di probabilita'di 21"
    // 14580 gosub100: gosub200: iffr >= d6 then 14680
    // 14600 rem fuga non riuscita
    // 14610 print"{down}Il tentativo di fuga non e' riuscito !"
    // 14620 if nm = 1 then print"{down}Hai ricevuto una ferita !": goto 14660
    // 14630 print"{down}Hai ricevuto "nm" ferite !"
    // 14660 rf = rf - nm
    // 14670 goto 14350
    // 14680 rem fuga riuscita
    // 14685 rem syss + 6: print"{down}La fuga e' riuscita"
    // 14690 fu = 1
    // 14700 goto 14790
    // 14710 y = y + 1
    // 14720 if nm > 0 then print"{clr}"
    // 14730 if nm > 0 then 13920
    // 14740 print"{down}hai ucciso tutti i tuoi avversari": gosub200
    // 14760 print"{down}Sei cresciuto di 1 % di capacita' di "
    // 14770 print"{down}usare le armi !": at = at + 1
    // 14790 print"{down}Puoi riprendere la tua avventura"
    // 14800 rem syss + 6: gosub1500
    // 14810 print"{clr}"
    // 14820 return

    } // end meleeRound method








    
    



//document.getElementById("btn2").addEventListener("pointerdown", testMelee);

    //testMelee();


    calcMeleeValues(at = 80)
    {

        // 12750 x=0:sm=10

        // 12760 if at <= 100 then x=2: xy=1
        let x = 2;

        let xy = 1;

        // 12740 rem generazione mostri
        
        
        if (at >= 100 && at < 150)
        {
            // 12770 if at > 100 and at < 150 then x = 2: xy = 1.2

            x = 2;

            xy = 1.2;
        }

        if (at >= 150)
        {
            // 12780 if at > 150 then x = 4: xy = 2

            x = 4;

            xy = 2;
        }

        if (at >= 200)
        {
            // 12790 if at > 200 then x=6: xy = 3.5

            x = 6;

            xy = 3.5;
        }

        // 12800 nm=int(x*rnd(0))+3
        const nm = Math.floor(x * Math.random()) + 3;

        // 12810 am=int((int((41-nm)*rnd(0))+21)*xy)
        // 12820 ifam>95thenam=95
        const am = Math.min(  95, Math.floor((Math.floor((41 - nm) * Math.random()) + 21) * xy)  );
        
        // 12830 return
        this.nm = nm;
        this.am = am;
        return; // {x, xy, nm, am};
    }

}
