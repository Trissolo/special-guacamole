50 printchr$(14)
100 for at = 49 to 290 step 50: 
12740 rem generazione mostri
12750 x=0:sm=10
12760 ifat<=100thenx=2:xy=1
12770 ifat>100andat<150thenx=2:xy=1.2
12780 ifat>150thenx=4:xy=2
12790 ifat>200thenx=6:xy=3.5
12799 ?chr$(147):?chr$(153);"**AT**:";at
12800 for nm = 3 to 8
12810 am=int((int((41-nm)*0.0001)+21)*xy)

12812 ma=int((int((41-nm)*0.9999)+21)*xy)

12900 printchr$(30);"nm";nm
13000 printchr$(155);"am min-max:";chr$(5);am;"-";ma
13100 ?:nextnm
13199 getin$:ifin$=""then13199
13200 nextat

run


rem result:
[
{at: 49, nm: 3, ammin: 21, amMax: 58 },
{at: 49, nm: 8, ammin: 21, amMax: 53 },

{at: 99, nm: 3, ammin: 21, amMax: 58 },
{at: 99, nm: 8, ammin: 21, amMax: 53 },

{at: 149, nm: 3, ammin: 25, amMax: 69 },
{at: 149, nm: 8, ammin: 25, amMax: 63 },

{at: 199, nm: 3, ammin: 42, amMax: 116 },
{at: 199, nm: 8, ammin: 42, amMax: 106 },

{at: 249, nm: 3, ammin: 73, amMax: 203 },
{at: 249, nm: 8, ammin: 73, amMax: 185 }
]


[
    {
        range: "0-100",
        at: 99,
        ammin: 21,
        amMax: 58,
        am8enemies: 53
    }, {
        range: "101-150",
        at: 149,
        ammin: 25,
        amMax: 69,
        am8enemies: 63
    }, {
        range: "151-200",
        at: 199,
        ammin: 42,
        amMax: 116,
        am8enemies: 106
    }, {
        range: "201-999",
        at: 249,
        ammin: 73,
        amMax: 203,
        am8enemies: 185
    }
];

/*
current_at: 99 (21 21) (58 58)
current_at: 149 (21 25) (58 69)
current_at: 199 (21 42) (58 116)
current_at: 249 (21 73) (59 206)
*/

/*
[21 / (53 - 58)]
[25 / (63 - 69)]
[42 / (106 - 116)]
[73 / (185 - 203)]

[21 / (53 - 58)]
[25 / (63 - 69)]
[42 / (106 - 95)]
[73 / (185 - 95)] 
*/


// https://stigc.dk/c64/basic/
100 printchr$(14):at = 14: rf=10: xf=1: gosub 11000:goto 21000

10500 print"{rvon}{pur}Batti il numero della tua scelta       "
10520 getn$:n=val(n$):ifn=0then10520


11000 rem set two variables: 'nm', and 'am' derived from 'at'.
11001 x=0:sm=10:ifat<=100thenx=2:xy=1
11030 ifat>100andat<150thenx=2:xy=1.2
11040 ifat>150thenx=4:xy=2
11045 ifat>200thenx=6:xy=3.5

11050 nm=int(x*rnd(0))+3
11051 am=int((int((41-nm)*rnd(0))+21)*xy):ifam>95thenam=95
11100 printnm,am:return

12000 rem set variable 'nm$', a string containing the random monster, and 'a$' that indicates the monster is evil or friendly 
12001 a$="0":x=int(12*rnd(0))+1:onxgoto12100,12150,12200,12250,12300,12350,12400,12450,12500,12550,12600
12090 nm$=" Zombi ":goto12990
12100 nm$=" Elfi ":a$="1":goto12990
12150 nm$=" Uomini Uccello ":a$="1":goto12990
12200 nm$=" Droll ":goto12990
12250 nm$=" Pentauri ":a$="1":goto12990
12300 nm$=" Orchi cattivi ":goto12990
12350 nm$=" Uomini Lupo ":a$="1":goto12990
12400 nm$=" Serpenti alati ":goto12990
12450 nm$=" Ragni pelosi ":goto12990
12500 nm$=" Orchi ":goto12990
12550 nm$=" Gnomi ":a$="1":goto12990
12600 nm$=" Nani giganti ":a$="1"
12990 return

32000 rem same as line 12000 
32001 a$="1":x=int(12*rnd(0))+1:onxgoto32100,32150,32200,32250,32300,32350,32400,32450,32500,32550,32600
32090 im$=" Sauridi ":goto32990
32100 im$=" Tigroidi ":goto32990
32150 im$=" Coboldi ":goto32990
32200 im$=" Droll ":goto32990
32250 im$=" Centipedi ":goto32990
32300 im$=" Grandi Giganti ":a$="1":goto32990
32350 im$=" Grandi Serpenti ":goto32990
32400 im$=" Demoni volanti ":goto32990
32450 im$=" Lupi mannari ":a$="0":goto32990
32500 im$=" Rospi Gracchianti ":goto32990
32550 im$=" Grifoni alati ":goto32990
32600 im$=" Folli Folletti ":a$="1"
32990 return


21000 fu=0:y=1
21005 print"{rvon}      "y"'  turno di mischia       ":ifnm=1thenprint"Sei in mischia con un solo avversario":goto21030
21020 print"    Sei in mischia con"nm"avversari    "
21030 forj=1tonm:ifnm>=4thenpa=int(at/4):cs=0:goto21050
21040 pa=int(at/nm)+10:cs=0:xf=1
21050 cm=int(100*rnd(0))+1:pp=int(100*rnd(0))+1:rem printcm,am :ifam<cmandnm=1thenprint"{yel}* L' avversario sbaglia il colpo":goto22000

21070 ifam<cmthenprint"{yel}*"j"'avversario sbaglia il colpo":goto22000
21080 ifam>=cmandpa<ppthencs=1
21090 cc=int(am/20):ifcc>=cmthenxf=2
21120 ifcs=1andxf=1thenprint"{gry3}*"j"'avversario ti fa 1 ferita":rf=rf-1:goto22000
21130 ifcs=1andxf=2thenprint"{gry3}*"j"'avversario ti fa 2 ferite":rf=rf-2:goto22000
21149 ifnm=1thenprint"{grn}* Parato il colpo dell' avversario":goto22000
21150 print"{grn}* Parato colpo del"j"'avversario"
22000 xf=1:next:cc=0:ifnm>1thencc=int(at/15)
22031 ifks>0then22040
22035 ifleft$(nm$,2)=" L"orleft$(im$,2)=" L"thengosub80:goto23000
22040 ap=int(100*rnd(0))+1:ifat<apthenprint"{cyn}Hai mancato il tuo colpo":goto23000
22055 xs=int(100*rnd(0))+1:ifat>=apandsm>=xsthenprint"L'avversario ha scansato tuo colpo":goto23000
22070 ts=0:ifat>=apthents=1
22090 ifts=1andcc>=apthenprint"{yel}^^ Hai ucciso due avversari":nm=nm-2:goto23000
22099 ifnm=1then22110
22100 ifts=1andcc<apthenprint"{yel}^ Hai ucciso  un  avversario":nm=nm-1:goto23000
22110 ifts=1andcc<apthenprint"{yel}^ Hai ucciso l'ultimo avversario":nm=nm-1
23000 ifrf<=0thenrf=0
23010 print"{wht}la tua robustezza e' ora {gry2}"rf:ifrf<=0thenprint"Sei morto !":end
23020 ifnm=0then29200
23021 ifnm>1thenprint"Gli avversari sono ora"nm
23022 ifnm=1thenprint"Hai di fronte un solo avversario"
29000 y=y+1:rem ifnm>0thenprint"{clr}"
29100 ifnm>0goto21005
29200 print"hai ucciso tutti i tuoi avversari":print"Sei cresciuto del 3% di capacita' di ":print"usare le armi !":at=at+3
29220 print"Puoi riprendere la tua avventura":printrf, nm:end
