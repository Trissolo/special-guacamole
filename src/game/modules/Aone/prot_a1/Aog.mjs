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

    // xf = 0;

    sm = 0;

    constructor(at = 645, rf = 11)
    {
        this.setPlayerStats(at, rf);

        document.getElementById("btn2").addEventListener("pointerdown", () => this.meleeRound());
    }

    setPlayerStats(at, rf)
    {
        this.at = at;

        this.rf = rf;
    }

    diceRoll(max = 100)
    {
        return Math.floor(max * Math.random()) + 1;
    }

    meleeFight()
    {
        // set 'this.nm' and 'this.am', derived from 'this.at'
        this.calcMeleeValues(this.at);

        // 13900 fu = 0: y = 1: rem syss + 12

        // Did the player flee the fight?
        this.fu = 0;

        // current meleeRound
        this.y = 0;

        GUI.prepareLines(12);

        this.meleeRound();
        
    }

    meleeRound()
    {
        console.clear();
        for (const elem of GUI.lineAry.values())
        {
            elem.replaceChildren("-");
        }

        // GUI.mixed(`**** Turno di mischia ${++this.y} ****`, 0xda6450).addBR();
        GUI.fillLine(0, `**** Sei in mischia con ${this.nm === 1? 'un solo avversario: ****': `${this.nm} avversari: ****`}`);
        //GUI.line(.addBR(2);

        // clear enemies 'slots'


        // enemies attack loop
        for (let j = 1; j <= this.nm; j++)
        {
            // random dice roll for 'colpo mancato' ('missing hit')
            const cm = this.diceRoll();
    
            // contact or miss?
            if (this.am < cm)
            {
                // miss
                GUI.fillLine(j, `${GUI.emoji.enemyMisses} L'avversario `, `#${j}`, 0xababab, ` sbaglia il colpo`);

            }
            else //(this.am >= cm)
            {
                // contact happens!
                // now... wound or parried?

                const pa = this.nm >= 4? Math.floor(this.at / 4) : Math.floor(this.at / this.nm) + 10;

                // random dice roll for 'player parry'
                const pp = this.diceRoll();
                //  console.log(`Sei stato colpito dal emico: pa = ${pa}, pp = ${pp} ${pa < pp? "Ferito": "Parato!"}`)

                if (pa < pp) // 
                {
                    const woundAmount = (Math.floor(this.am / 20) >= cm)? Math.min(2, this.nm): 1;

                    GUI.fillLine(j, `${GUI.emoji.enemyHits.repeat(woundAmount)} L'avversario `, `#${j} `, 0x894343, `ti fa `, `${woundAmount} `, 0x565656, woundAmount===1? `ferita`:`ferite`);

                    this.rf -= woundAmount;
                }
                else
                {
                    GUI.fillLine(j, `${GUI.emoji.enemyParried}`, `Parato`, 0x676767, ` il colpo del #${j} avversario`);
                }

            }
            
            //GUI.addBR(this.totalMeleeEnemies - this.nm + 1);
        } // enemies attack loop

        let currLine = this.totalMeleeEnemies + 2;

        // player attaks
        const cc = (this.nm > 1)? Math.floor(this.at / 15): 0;
        const ap = this.diceRoll();
        if (this.at < ap)
        {
            GUI.fillLine(currLine++, `${GUI.emoji.playerMisses} Hai mancato il tuo colpo`);
        }
        else
        {
            const xs = this.diceRoll();

            if (this.sm >= xs)
            {
                GUI.fillLine(currLine++, `${GUI.emoji.enemyMisses} L'avversario ha scansato tuo colpo`);
            }
            else
            {
                if (cc >= ap)
                {
                    const tempKilled = Math.min(2, this.nm);

                    this.nm -= tempKilled;

                    GUI.fillLine(currLine++,`${GUI.emoji.playerKillsTwo} Hai ucciso ${tempKilled} avversari`);
                }
                else
                {
                    this.nm -= 1;

                    GUI.fillLine(currLine++, `${GUI.emoji.playerKills} Hai ucciso ${this.nm <= 0? "l'ultimo":"un"} avversario`);
                }

            }

        }
        // 14350 gosub200
        // 14360 if rf <= 0 then rf = 0
        // 14370 print"{down}la tua robustezza e' ora "rf: gosub240
        GUI.fillLine(currLine++, `La tua robustezza è ora ${this.rf}`);

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

        if (this.nm <= 0)
        {
            document.getElementById("btn2").hidden = true;
            return GUI.fillLine(GUI.lineAry.length - 1, `${GUI.emoji.cup} Hai vinto! (rf = ${this.rf} | avversari ora: ${this.nm})`);
        }
        if (this.rf <= 0)
        {
            //document.getElementById("btn2").removeEventListener("pointerdown");
            document.getElementById("btn2").hidden = true;
            return GUI.fillLine(GUI.lineAry.length - 1, `${GUI.emoji.lose} Hai PERSO! (rf = ${this.rf} | avversari ora: ${this.nm})`);
        }

    } // end meleeRound method








    
    



//document.getElementById("btn2").addEventListener("pointerdown", testMelee);

    //testMelee();


    calcMeleeValues(at = 80)
    {

        // 12750 x=0:sm=10
        this.sm = 10;

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

        this.totalMeleeEnemies = nm;

        return; // {x, xy, nm, am};
    }

}
