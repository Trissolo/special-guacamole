import AoneGenericClass from "./Aog.mjs";

const qqq = new AoneGenericClass();

qqq.meleeFight();

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


// GUI.destroy();
// */
