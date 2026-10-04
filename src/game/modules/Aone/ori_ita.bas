   0 sys49152:clr:s=49152:syss+3
   10 print"{clr}{wht}":printchr$(14):poke53280,6:dimos$(120):tk=1:bt=0:dn=1:goto310
  100 print"{down}{rvon}Per agire premi un tasto{rvof}"
  110 getp$:ifp$=""then110
  130 d6=int(21*rnd(0))+1
  140 printtab(26)"{up}Hai fatto {rvon}"d6"{left}{rvof}":return
  200 forp=1to540:next:return
  240 forp=1to180:next:return
  280 print"{down}I Lupi Mannari si uccidono solo con la"
  290 print"Spada magica,e tu non la possiedi ! !":return
  310 x1$="{rght}{rght}{rght}{rght}{rght}{rght}{rght}"
  320 x2$="{rght}{rght}{rght}{rght}"
  330 x3$="{rght}{rght}{rght}{rght}{rght}"
  340 print"{clr}"x1$"{yel} {CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}"
  370 printx1$" {rvon}                         {rvof}"
  390 printx2$"{rvon}   {CBM-M}  Avventura 1 (Fantasy)  {CBM-G}   {rvof}"
  410 printx3$"{rvon}  {CBM-M}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-@}{CBM-G}  {rvof}"
  430 printx2$"{rvon}    {CBM-T}{rvof}                       {rvon}{CBM-T}    {rvof}{wht}"
  450 print"{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}di A. Castellari{up}"
  460 gosub18430:print"{up}{up}{up}":gosub18380
  490 x1$=""
  500 print"{clr}""{down}{down}{down}{down}{down}{down}"
  520 gosub18730
  530 print"{home}""{down}{down}{down}{down}{down}{down}"
  550 x1$="{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}"
  560 gosub18730
  570 x1$="{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}"
  580 print"{home}"
  590 printx1$"{yel}{CBM-I}{CBM-I}{CBM-I}{CBM-I}{CBM-I}{CBM-I}{CBM-I}{CBM-I}{CBM-I}{wht}"
  610 printx1$"{yel}{rvon} OPZIONI {wht}"
  630 printx1$"{yel}{rvon}{CBM-I}{CBM-I}{CBM-I}{CBM-I}{CBM-I}{CBM-I}{CBM-I}{CBM-I}{CBM-I}{wht}"
  650 x1$="{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}"
  660 print"{down}{down}{down}{down}"x1$"{rvon}* 1 *{rvof} Istruzioni{down}{down}"
  710 printx1$"{rvon}* 2 *{rvof} Inizio Avventura{down}{down}"
  730 printx1$"{rvon}* 3 *{rvof} Caricare Avventura"
  750 printx1$"      salvata su nastro"
  770 gosub12690
  780 ifn>3thenprint"{up}{up}":goto770
  790 ifn=3thengosub17890:goto2220
  800 ifn=2then1270
  810 print"{clr}Benvenuto nella Valle degli Eroi !":gosub200
  830 print"Giocherai nel ruolo di un personaggio,"
  840 print"che puoi scegliere tra quelli preparati,"
  850 print"{up}oppure puoi creare  tu stesso,randomiz-"
  860 print"zato (generato casualmente).":gosub200
  880 print"{down}Le caratteristiche sono 6 :"
  890 print"Forza(Fo),Intelligenza(In),Destrezza(De)"
  900 print"{up}Fortuna(Fr),Robustezza(Ro),Fascino(Fa);"
  910 print"le caratteristiche hanno un valore,dato"
  920 print"da 6 + due dadi a 6 (minimo 8 max 18).":gosub200
  940 print"{down}L' abilita' nell' uso delle armi  e'"
  950 print"data dalla propria forza x 5 ;cosi' un"
  960 print"personaggio con forza 12 usa le armi al"
  970 print"{rvon}60 %{rvof} ,avra' il 60 % di probabilita' di"
  980 print"colpire il nemico o parare i suoi colpi.":gosub200
 1000 print"Le altre caratteristiche serviranno in"
 1010 print"varie occasioni e verranno specificate"
 1020 print"mano a mano che dovrai usarle .":gosub200
 1040 gosub18380
 1050 print"{clr}Quando sarai cresciuto nelle tue"
 1060 print"caratteristiche sino a  20 , e nella"
 1070 print"capacita' di combattimento oltre il "
 1080 print"200 % , diventerai un Eroe !":gosub200
 1100 print"{down}Comunque le caratteristiche non crescono"
 1110 print"{up}mai oltre 20,limite massimo,ma possono  calare sino a 0,e sei morto!":gosub200
 1130 print"{down}Attenzione ai {pur}Vampiri{wht} , {yel}Licantropi Neri"
 1140 print"{wht}e ai {cyn}Lupi Mannari{wht};sono MOLTO pericolosi!":gosub200
 1160 print"Se sarai ferito potrai curarti riposando"
 1170 print"{up}in taverna o bevendo i Filtri Magici che"
 1180 print"{up}curano le ferite,(bisogna prima trovar-"
 1190 print"li !);se possiedi un Filtro Magico,puoi"
 1200 print"berlo premendo il tasto di funzione {rvon} f 1":gosub200
 1220 print"{up}In ogni momento puoi salvare l'Avventura"
 1230 print"{up}su nastro e richiamarla in seguito"
 1240 print"{down}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}BUONA{160}FORTUNA{160}!"
 1250 gosub18380
 1260 goto490
 1270 print"{clr}"tab(8)"{rvon} Personaggi preparati {rvof}"
 1300 print"{down}{down}{rvon} * 1 * {rvof} Rowena apprendista maga"
 1310 print"{down}Fo=9;In=17;De=12;Fr=13;Ro=11;Fa=16."
 1320 print"{down}{down}{rvon} * 2 * {rvof} Thoralf il guerriero"
 1330 print"{down}Fo=16;In=10;De=14;Fr=9;Ro=16;Fa=9."
 1340 print"{down}{down}{rvon} * 3 * {rvof} Jasper  l' avventuriero"
 1350 print"{down}Fo=11;In=12;De=16;Fr=15;Ro=10;Fa=11."
 1360 print"{down}{down}{rvon}{pur} * 4 * {rvof}{wht} Preferisco generare un nuovo"
 1370 print"{down}personaggio randomizzato"
 1380 gosub12690
 1390 ifn>4then1270
 1400 onngoto12340,12440,12540,1890
 1410 ee=0:iffo>19thenee=ee+1:fo=20
 1430 ifin>19thenee=ee+1:in=20
 1440 ifde>19thenee=ee+1:de=20
 1450 iffr>19thenee=ee+1:fr=20
 1460 ifro>19thenee=ee+1:ro=20
 1470 iffa>19thenee=ee+1:fa=20
 1480 return
 1490 ifrf<roandro>rfthenprint"{down}Hai recuperato un punto di Robustezza!":rf=rf+1
 1500 ww=0:foryy=1towx:ifleft$(os$(yy),1)="F"thenww=1:xw=yy:yy=wx+1
 1540 nextyy
 1550 ifww=1andrf<rothen1570
 1560 goto1750
 1570 print"(sei a Ro"rf" su"ro"{left});Puoi bere il Filtro"
 1620 getp$
 1630 print"{rvon}{grn}per continuare premi un tasto;{lblu}per bere{rvon}{wht}F1{up}{up}{up}{wht}"
 1640 gets$:ifs$=""then1640
 1660 ifs$<>"{f1}"thenreturn
 1670 rf=ro:print"Sei di nuovo a Robustezza "rf"{left} !          {up}{up}"
 1710 ww=0:yy=0:os$(xw)="x":xw=0
 1750 gosub18380
 1760 return
 1770 ss$="":fory=1to8:reads$(y):next:x=int(8*rnd(0))+1:ss$=s$(x)
 1850 fory=1to8:s$="":next:return
 1890 rem generazione personaggio
 1895 print"{clr}Generazione Randomizzata del Personaggio"
 1900 gosub17320
 1910 gosub12640
 1920 print"{down}Nome del personaggio {rvon} "np$" {rvof}":gosub200
 1960 fo=d3:print"{down}{down}{down}Fo = "fo:gosub12640
 2000 in=d3:print"{down}In = "in:gosub12640
 2040 de=d3:print"{down}De = "de:gosub12640
 2080 fr=d3:print"{down}Fr = "fr:gosub12640
 2120 ro=d3:print"{down}Ro = "ro:gosub12640
 2160 fa=d3:print"{down}Fa = "fa
 2190 at=fo*5:rf=ro
 2210 gosub18380
 2220 print"{clr} Situazione del personaggio {rvon}"np$"{rvof}"
 2250 gosub1410
 2260 print"{down}Forza (Fo)      = "fo
 2280 print"Intelligenza(In)= "in
 2300 print"Destrezza(De)   = "de
 2320 print"Fortuna (Fr)    = "fr
 2340 print"Robustezza{160}(Ro) = "ro" (originaria)"
 2370 print"Robustezza (Ro) = "rf" ({rvon} attuale  {rvof})"
 2400 print"Fascino (Fa)    = "fa
 2420 print"{down}Capacita' combattimento {rvon}"at"{left}% {rvof}"
 2450 print"{down}Denaro \"dn
 2470 print"{down}{rvon}{orng} oggetti speciali o magici {rvof}{wht}"
 2480 yy=0:foryy=1towx
 2510 ifleft$(os$(yy),1)="F"thenkf=kf+1
 2520 ifleft$(os$(yy),1)="T"thenkt=kt+1
 2530 ifleft$(os$(yy),1)="A"thenka=ka+1
 2540 ifleft$(os$(yy),1)="S"thenks=1
 2550 next
 2560 ifkf=1thenprint"una dose di Filtro magico"
 2570 ifkf>1thenprintkf" dosi di Filtro magico"
 2580 ifkt=1thenprint"un Talismano portafortuna"
 2590 ifkt>1thenprintkt" Talismani portafortuna"
 2600 ifka=1thenprint"un Amuleto ";
 2610 ifka>1thenprintka" Amuleti ";
 2620 ifks=1thenprint" una Spada Magica{up}"
 2630 k0=ka+kt+kf+ks:ifk0=0thenprint"{down}Nessuno{up}"
 2650 ka=0:kt=0:kf=0:k0=0:print:gosub18380
 2710 ifee=6andat>200then12040
 2720 ee=0:ifsu=1thenreturn
 2740 syss+3:print"{clr}{yel}"tk"'  Settimana d' avventura{wht}":hs=0
 2780 printnp$",sei nella taverna del Gobbo"
 2800 print"dove si trovano avventurieri e mercenari"
 2810 print"{up}e presti attenzione ai loro discorsi."
 2820 print"{down}{down}{down}{down}{down}":gosub18470:print"{up} {rvon}Ti si offrono varie avventure tra cui "
 2850 print" {rvon}         puoi scegliere .             {rvof}{up}"
 2860 gosub18380
 2870 print"{clr}":gosub1770:la$=ss$:gosub1770:lb$=ss$
 2920 ifleft$(la$,1)="L"thena9=3000:goto2960
 2930 ifleft$(la$,1)="V"thena9=6000:goto2960
 2940 ifleft$(la$,1)="D"thena9=1620-at*3:goto2960
 2950 a9=790-at
 2960 ifa9<500thena9=500
 2970 print"{clr}{up}{rvon}* 1 *{rvof} Un "la$" che"
 3000 print"vive presso "lb$
 3020 print"terrorizza gli abitanti della regione ;"
 3030 print"taglia di {rvon}{yel}\"a9"{left}{wht}{rvof} a chi lo uccidera'.":gosub200
 3070 gosub3140
 3080 print"{down}{rvon}* 3 *{rvof} Sta' per partire la Carovana"
 3090 print"che tutti i mesi si reca nella favolosa"
 3100 print"citta' di {rvon}{lgrn}Babbakesch{rvof}{wht} ,dove vengono fab-"
 3110 print"bricate armi e oggetti magici !":gosub200:goto3400
 3140 gosub1770:za$=ss$:gosub1770:zb$=ss$:gosub1770:zc$=ss$:gosub1770:zd$=ss$
 3220 ifleft$(zd$,4)="un A"andin>19thenzd$="Diamanti per \ 2000"
 3230 ifleft$(zd$,4)="una "andde>19thenzd$="Diamanti per \ 2000"
 3240 ifleft$(zb$,2)=" F"orleft$(zb$,2)=" M"thenza$="Hanno rapito "
 3250 ifleft$(zb$,2)=" D"thenza$="E'fuggita "
 3260 print"{down}{rvon}* 2 *{rvof}{rght}"za$;"la"zb$
 3300 print"di un "zc$" e si offre"
 3330 print"una ricompensa:{yel}{rvon}"zd$
 3350 print"{wht}a chi la riportera'.":zk=0:gosub200:restore:return
 3400 print"{down}{rvon}* 4 *{rvof} Il  Barone  Gudrund  cerca merce-"
 3410 print"nari .  Offre {rvon}{yel}\ 1000{wht}{rvof} di premio d'ingag-"
 3420 print"gio per un mese di servizio ."
 3430 gosub200
 3440 ifrf>=rothen3480
 3450 print"{down}{rvon}* 5 *{rvof} Restare in taverna per recuperare"
 3460 print"Robustezza (un punto a settimana);costo"
 3470 print"vitto e alloggio {pur}{rvon}\ 100{rvof}{wht} a settimana !"
 3480 print"{down}{rvon}* 9 *{rvof} salvare l'avventura su nastro "
 3490 ifrf<rothenprint"{up}{up}"
 3500 gosub12690
 3510 ifn=9thengosub17470:goto2870
 3520 ifn>5thenprint"{up}{up}":goto3500
 3530 ifrf>=roandn=5thenprint"{up}{up}":goto3500
 3540 onngoto3780,7710,4410,9440,3550
 3550 ifdn<100then3580
 3560 gosub13170
 3570 ifpq%=1thenpq%=0:goto3640
 3580 print"{clr}"np$",il Gobbo non fa credito !"
 3610 print"E' meglio che ti curi in avventura !":gosub200:goto2820
 3640 dn=dn-qp%:rf=rf+n:ifrf>rothenrf=ro
 3670 ifn=1thenprint"{clr}E'passata una settimana,"
 3680 ifn>1thenprint"{clr}Sono passate ";:printn;:print" settimane,"
 3690 print"sei ora a Ro"rf".":tk=tk+n:gosub200
 3740 print"Possiedi \"dn:gosub200:goto2820
 3780 rem 1
 3785 tk=tk+1:print"{clr}Stai dirigendoti verso"
 3800 print"{down}"lb$
 3820 fu=0:im$="":nm$="":gosub13300
 3860 ifi<=3then3900
 3870 fu=0:bt=0:gosub14830
 3900 syss+15:print"{down}Sei arrivato senza altri incontri"
 3910 print"presso "lb$
 3930 print"dove si erge una torre minacciosa !{down}{down}"
 3940 x1$="{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}"
 3950 gosub18730:gosub1410:gosub1500
 3980 print"{clr}Il "la$
 4000 print"sbuca da dietro la Torre    !":gosub200
 4020 print"{down}Ti rendi conto che si tratta di uno"
 4030 print"scontro all'ultimo sangue .":gosub200
 4050 print"{down}Puoi:"
 4060 print"{down}{rvon}* 1 *{rvof} rinunciare e fuggire"
 4070 print"{down}{rvon}* 2 *{rvof} accettare il combattimento{down}"
 4080 gosub12690
 4090 ifn>2thenprint"{up}{up}":goto4080
 4100 onngoto4110,4220
 4110 syss+6:print"{clr}Con questa fuga ti sei coperto di"
 4120 print"{down}disonore!":gosub200
 4140 print"{down}Sei tornato in citta' dove la notizia"
 4150 print"{down}della tua fuga ancor prima di combattere"
 4160 print"si e' gia' sparsa .":gosub200
 4180 print"{down}Perdi un punto di fascino !":fa=fa-1:gosub1490:goto2220
 4220 gosub16230
 4230 syss+3:print"{clr}Sei ritornato in citta' con la testa"
 4240 print"{down}del "la$" .":gosub200
 4280 print"{down}Incassi il premio di \"a9" e la tua"
 4310 print"{down}fama di guerriero cresce :"
 4320 iffa>19then4350
 4330 print"{down}{down}Il tuo fascino e' cresciuto di uno":fa=fa+1
 4350 dn=dn+a9:print"{down}Possiedi ora \ "dn"{down}":gosub1490:goto2220
 4410 print"{clr}Sei al caravanserraglio :":qr=0:qw=0
 4440 print"{down}Il biglietto per il viaggio , che dura"
 4450 print"{down}un mese , e' di \ 1000 andata e ritorno":la$=""
 4470 print"{down}ma il capocarovaniere cerca anche un"
 4480 print"{down}mercenario per la scorta della carovana"
 4490 print"{down}Puoi :"
 4500 print"{down}{rvon}* 1 *{rvof} rinunciare per ora al viaggio"
 4510 print"{down}{rvon}* 2 *{rvof} pagare i \ 1000"
 4520 print"{down}{rvon}* 3 *{rvof} arruolarti come scorta"
 4530 gosub12690
 4540 ifn>3thenprint"{up}{up}":goto4530
 4550 onngoto2220,4560,4700
 4560 ifdn>=1000then4630
 4570 print"{clr}{down}Possiedi solo \ "dn" e vieni"
 4600 print"{down}allontanato dalla carovana .":gosub18380:goto2220
 4630 dn=dn-1000:print"{clr}Dopo un mese di viaggio tranquillo,":tk=tk+4:qw=1
 4670 q0=4:gosub18270:goto5930
 4700 print"{clr}Sei arruolato come mercenario di scorta":gosub200
 4720 forq1=1to4
 4740 tk=tk+1:q2=int(3*rnd(0))+1
 4760 onq2goto4770,4870,5670
 4770 print"{down}Questa settimana sei di retroguardia":gosub200:nm$=""
 4800 im$="":gosub13300:im$=""
 4830 ifi>4thengosub14830
 4840 ifi=4thenprint"{down}{down}Nessun incontro questa settimana .":gosub200
 4850 fu=0:goto5810
 4870 print"{down}Questa settimana stai a fianco del"
 4880 print"Capocarovana .":gosub200:q3=int(3*rnd(0))+1
 4910 onq3goto4920,4960,5270
 4920 print"{down}Il viaggio procede tranquillo per tutta"
 4930 print"la settimana,nessun incontro pericoloso.":gosub200:goto5810
 4960 print"{down}Un gruppo di briganti si sta' dirigendo"
 4970 print"verso la carovana .":q4=int(2*rnd(0))+1:onq4goto5000,5130
 5000 print"{down}Vieni mandato ad intercettarli":gosub200
 5020 nm=int(2*rnd(0))+3:nm$="":im$=""
 5050 print"{down}Ti accorgi che i briganti sono "nm:gosub18380:print"{clr}":gosub13900
 5100 iffu=1thenprint"{clr}Con questa fuga ti sei coperto di "
 5110 iffu=1thenprint"{down}disonore,ti cala il fascino di un punto":fa=fa-1
 5120 goto5810
 5130 print"{down}Il Capo dei briganti lancia una sfida:"
 5140 print"lui contro il campione della carovana"
 5150 print"in un combattimento all'ultimo sangue .":gosub200
 5170 print"{down}Come mercenario sei designato quale "
 5180 print"Campione della carovana !"
 5190 gosub18380:syss+9:gosub16230
 5210 print"{down}Con questo combattimento la tua fama"
 5220 print"{down}di guerriero aumenta !"
 5230 iffa>19thenfa=20:goto5810
 5240 print"{down}Sei cresciuto di un punto di Fascino .":fa=fa+1:goto5810
 5270 gosub12740:print"{down}Un gruppo di"nm" passeggeri della caro-"
 5310 print"vana si rivelano Predoni travestiti e,"
 5320 print"furtivi,tentano di eliminarti per poter"
 5330 print"predare la carovana con tranquillita'.":gosub200
 5350 print"{down}Per accorgerti dell'inganno devi tirare"
 5360 print"un dado a 21 e il risultato deve essere"
 5370 print"uguale o inferiore alla tua "
 5380 print"Intelligenza ("in") ."
 5410 gosub100:gosub200:ifin>=d6then5490
 5440 print"{down}Non te ne sei accorto,ricevi "nm" ferite":rf=rf-nm:goto5530
 5490 print"{down}Te ne sei accorto ed entri in mischia "
 5500 print"{down}con i "nm" Predoni !"
 5530 gosub18380:print"{clr}":fu=0:nm$="":im$="":gosub13900:iffu=0then5810
 5600 iffu=1thenprint"{clr}Con questa fuga hai abbandonato al ":q1=4
 5610 iffu=1thenprint"{down}saccheggio la carovana !":fa=fa-1:qq=99
 5620 iffu=1thenprint"{down}Questo ti fa perdere un punto di Fascino":gw=1
 5630 gosub200:print"{down}Senza guida ti sei perso!":gosub1490:goto5870
 5670 fu=0:rem avanguardia
 5680 print"{down}Questa settimana sei mandato in avanti"
 5690 print"{down}per esplorare la strada ."
 5700 fu=0:im$="":nm$="":gosub13300:im$="":ifi>3thengosub14830
 5760 iffu=0then5810
 5770 iffu=1thenprint"{down}Con questa opportuna fuga hai avvertito"
 5780 iffu=1thenprint"{down}la carovana del pericolo e ricevi \ 100"
 5790 iffu=1thenprint"{down}di premio dal capo carovana .":dn=dn+100
 5800 iffu=1thenprint"{down}Possiedi ora \ ";:printdn;:print" .":fu=0
 5810 print"{down}Terminata la "q1" settimana di scorta":gosub1410:gosub1490:nm$=""
 5870 im$="":print"{clr}":next:ifqq=99then18030
 5910 ifqr=1then7670
 5920 print"{down}Dopo un mese di viaggio con la carovana"
 5930 syss+21:print"sei giunto  nella  favolosa  citta'  di"
 5940 print"{down}{down}               {yel}BABBAKESCH{wht}{up}{up}":gw=0
 5960 x1$="":gosub18910:p=1:forp=pto10:print"{up}";:next
 6020 x1$="{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}"
 6030 gosub18730:forp=1to10:print"{up}";:next
 6080 x1$="{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}"
 6090 gosub18730
 6100 x1$="{rght}{rght}{rght}{rght}{rght}"
 6110 x2$="{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}"
 6120 gosub19130
 6140 forp=1to15:print"{up}";:next
 6170 x1$="{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}"
 6180 gosub18910:print"{up}{up}":gosub19490
 6220 forp=1to13:x3$="{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}":print"{up}";:next
 6260 printx3$"{brn}{CBM-M}{rvon}{yel} {rvof}{CBM-I}  {brn}{CBM-M}{rvon}{pur} {rvof}{CBM-I} {brn}{CBM-M}{grn}{rvon} {rvof}{CBM-I}  {brn}{CBM-M}{rvon}{lblu} {rvof}{CBM-I}"
 6280 printx3$"{brn}{CBM-M} {yel}{CBM-U}{rvon}{CBM-O}{rvof} {brn}{CBM-M} {pur}{CBM-U}{rvon}{CBM-I}{rvof}{brn}{CBM-M} {grn}{CBM-U}{rvon}{CBM-O}{rvof} {brn}{CBM-M} {lblu}{CBM-U}{rvon}{CBM-I}{rvof}"
 6300 printx3$"{brn}{CBM-M}    {CBM-N}   {CBM-N}    {CBM-N}"
 6330 forp=1to9:print"{down}";:next:gosub18380
 6370 print"{clr}Ci sono 3 negozi disponibili:"
 6380 print"{down}{rvon}* 1 *{rvof} il Fabbro magico"
 6390 print"{down}{rvon}* 2 *{rvof} l' Alchimista"
 6400 print"{down}{rvon}* 3 *{rvof} lo Stregone{down}":forgg=1to20:print"- ";:next
 6450 print"{down}{rvon}{grn}* 4 *{wht}{rvof} voglio rivedere il personaggio"
 6460 print"{down}{rvon}{yel}* 5 *{wht}{rvof} ritorno a casa "
 6470 gosub12690
 6480 ifn>5thenprint"{up}{up}":goto6470
 6490 onngoto6500,6880,7160,7490,7610
 6500 print"{clr}Il Negozio del FABBRO{160}Magico"
 6510 print"{down}Sono disponibili 3 Spade Magiche :"
 6520 print"{down}{down}{rvon}ATTENZIONE{rvof} Non e' permesso possedere"
 6530 print"{down}piu di una spada magica{rght}!{rght}!{rght}!"
 6540 ifks>0thenprint"{down}Tu l'hai gia' !":goto7540
 6550 print"{down}{down}{rvon}* 1 *{rvof} Spada da +  50 % = \  7500"
 6560 print"{down}{rvon}* 2 *{rvof} Spada da +  75 % = \ 10000"
 6570 print"{down}{rvon}* 3 *{rvof} Spada da + 100 % = \ 20000":gosub17170
 6590 gosub12690:ifn>4thenprint"{up}{up}":goto6590
 6610 print"{down}":onngoto6630,6700,6770,6860
 6630 ifdn<7500then17190
 6640 ks=1:dn=dn-7500:at=at+50:wx=wx+1:os$(wx)="Spada magica +50":goto6840
 6700 ifdn<10000then17190
 6710 ks=1:dn=dn-10000:at=at+75:wx=wx+1:os$(wx)="Spada magica +75":goto6840
 6770 ifdn<20000then17190
 6780 ks=1:dn=dn-20000:at=at+100:wx=wx+1:os$(wx)="Spada magica +100":goto6840
 6840 print"{down}Hai acquistato la Spada Magica":goto7540
 6860 print"{clr}":goto6370
 6880 print"{clr}Il negozio dell' ALCHIMISTA"
 6890 print"{down}Sono disponibili 3 Elisir magici che"
 6900 print"{down}aumentano delle caratteristiche :"
 6910 print"{down}{rvon}* 1 *{rvof} + 1 in Forza        \ 2000"
 6920 print"{down}{rvon}* 2 *{rvof} + 1 in Destrezza    \ 1000"
 6930 print"{down}{rvon}* 3 *{rvof} + 1 in Robustezza   \ 3000"
 6940 gosub17170
 6950 gosub12690
 6960 ifn>4thenprint"{up}{up}":goto6950
 6970 print"{down}":onngoto6990,7050,7100,6860
 6990 ifdn<2000then17190
 7000 dn=dn-2000:fo=fo+1:at=at+5:print"{down}Hai +1 in forza":goto7540
 7050 ifdn<1000then17190
 7060 dn=dn-1000:de=de+1:print"{down}Hai +1 in Destrezza":goto7540
 7100 ifdn<3000then17190
 7110 dn=dn-3000:ro=ro+1:rf=rf+1:print"{down}Hai +1 in Robustezza":goto7540
 7160 print"{clr}La Bottega dello STREGONE"
 7170 print"{down}{rvon}* 1 *{rvof} Talismano (+1 in Fortuna) \ 1000"
 7180 print"{down}{rvon}* 2 *{rvof} Amuleto (+1 Intelligenza) \ 1000"
 7190 print"{down}{rvon}* 3 *{rvof} Filtro Magico             \ 1000"
 7200 print"     (che cura le ferite)":gosub17170
 7220 gosub12690:ifn>4thenprint"{up}{up}":goto7220
 7240 print"{down}":onngoto7260,7340,7420,6860
 7260 ifdn<1000then17190
 7270 dn=dn-1000:wx=wx+1:os$(wx)="Talismano":print"{down}Hai acquistato un "os$(wx)
 7320 fr=fr+1:goto7540
 7340 ifdn<1000then17190
 7350 dn=dn-1000:wx=wx+1:os$(wx)="Amuleto":print"{down}Hai acquistato un "os$(wx)
 7400 in=in+1:goto7540
 7420 ifdn<1000then17190
 7430 dn=dn-1000:wx=wx+1:os$(wx)="Filtro Magico":print"{down}Hai comperato un "os$(wx)
 7480 goto7540
 7490 su=1:gosub2220:su=0:print"{clr}":goto6370
 7540 gosub1410:print"{down}Vuoi continuare gli acquisti  ( S/N )?"
 7560 gets$:ifs$=""then7560
 7580 ifs$="s"thenprint"{clr}":goto6370
 7590 ifs$="n"then7610
 7600 goto7560
 7610 print"{clr}Si torna a casa !":gosub200
 7630 qr=1:ifqw=1thentk=tk+4:print"Dopo 4 settimane di viaggio,":q0=4:gosub18270
 7650 ifqw=1thenqw=0:goto7670
 7660 goto4720
 7670 print"sei ritornato nella tua citta' e la tua situazione e':"
 7680 qr=0:su=0:goto2250
 7710 print"{clr}Sei ricevuto dal "zc$
 7730 print"e ti conferma la ricompensa promessa:"
 7740 print"'{yel}"zd$"{wht}'.":gosub200
 7780 print"{down}Da informazioni raccolte pare che "
 7790 ifleft$(zb$,2)=" D"thenzg$="nascosta":zh$=" con il suo Amante":goto7820
 7800 zg$="custodita":zh$=" da una banda di briganti"
 7820 print"la"zb$" sia ora"
 7850 printzg$zh$
 7870 zr=int(4*rnd(0))+1
 7880 onzrgoto7890,7910,7930,7950
 7890 zi$="rovine del Castello Maledetto":goto7970
 7910 zi$="catacombe della Citta' Morta":goto7970
 7930 zi$="misteriose Caverne Nere":goto7970
 7950 zi$="montagne degli Spettri Ululanti":goto7970
 7970 print"nelle "zi$" .":gosub200
 8010 print"{down}puoi :"
 8020 print"{down}{rvon} * 1 * {rvof} Rinunciare all' incarico"
 8030 print"{down}{rvon} * 2 * {rvof} Accettare la missione  "
 8040 gosub12690:ifn>2thenprint"{up}{up}":goto8040
 8060 onngoto2740,8090
 8070 print"{up}{up}":goto8040
 8090 la$="":zp=1:forzp=zpto4:tk=tk+1:print"{clr}"zp"{left}' settimana di viaggio"
 8160 gosub200
 8170 im$="":nm$="":gosub13300:fu=0
 8210 ifi<4then8330
 8220 ifi=4thenprint"{down}{down}Viaggio tranquillo per questa settimana{down}":goto8330
 8230 ifi>4andi<8then8320
 8240 gosub12840:gosub12740:gosub11870
 8270 gw=1:print"{down}Stai passando attraverso un Bosco":fu=0:gosub15350
 8310 iffu=0thengosub10420:goto8330
 8320 ifi>4andi<8thengosub14830
 8330 print"{down}Terminata la"zp"{left}'settimana di viaggio":im$="":nm$="":gosub1410
 8390 gosub1490
 8400 ifzp=2thengosub8430
 8410 next
 8420 goto8980
 8430 print"{clr}Sei arrivato , all' alba , in vista"
 8440 print"{down}delle "zi$" .":gosub200
 8480 gosub17210:ifzz=1then8600
 8500 print"{down}Hai evitato le sentinelle,"
 8510 ifleft$(zb$,2)=" D"thenzm$=" l'Amante":goto8530
 8520 zm$=" il Capo"
 8530 print"{down}hai sorpreso"zm$" da solo":hs=1
 8570 print"{down}e inizia un duello all'ultimo sangue !":gosub18380:goto8780
 8600 gosub18380:print"{clr}Sei stato scorto da qualcuno e vieni":zz=0
 8630 print"{down}circondato da una dozzina di loschi":hs=0
 8650 print"{down}figuri . Il loro capo ti propone un"
 8660 print"{down}duello all'ultimo sangue ; chi alla"
 8670 print"{down}fine sara' sopravissuto potra' prendersi"
 8680 print"la "zb$" .":gosub200
 8720 print"{down}Puoi :"
 8730 print"{down}{rvon}* 1 *{rvof} rinunciare e tornare indietro"
 8740 print"{down}{rvon}* 2 *{rvof} accettare il combattimento"
 8750 gosub12690
 8760 ifn>2thenprint"{up}{up}":goto8750
 8770 onngoto8890,8780
 8780 syss+9:gosub16230
 8790 print"{clr}Alla morte del loro capo gli altri si"
 8800 print"{down}sbandano e fuggono ! Puoi recuperare la"
 8810 print"{down}{left}"zb$" ."
 8840 iffa>19thenfa=20:goto8870
 8850 print"{down}Questo ti aumenta un punto in fascino":fa=fa+1
 8870 gosub1500
 8880 return
 8890 syss+6:print"{clr}Deriso e beffeggiato inizi il viaggio":zk=1
 8910 print"{down}di ritorno .":gosub200
 8930 print"{down}Questo ti fa perdere un punto di Fascino":fa=fa-1:gosub200
 8960 gosub1500
 8970 return
 8980 print"{clr}Sei ritornato in citta ' ."
 8990 ifzk=1then9330
 9000 print"{down}Ti rechi dal "zc$" e"
 9030 print"{down}ricevi la ricompensa pattuita ."
 9040 ifleft$(zd$,1)="O"then9090
 9050 ifleft$(zd$,4)="un F"then9140
 9060 ifleft$(zd$,4)="un A"then9180
 9070 ifleft$(zd$,5)="una P"then9240
 9080 ifleft$(zd$,1)="D"then9280
 9090 print"{down}\ 1000 in oro !"
 9100 dn=dn+1000
 9110 print"{down}Possiedi ora \ "dn
 9130 goto9390
 9140 print"{down}Un Filtro magico che cura le ferite"
 9150 wx=wx+1:os$(wx)="Filtro magico"
 9170 goto9390
 9180 print"{down}Un Amuleto incantato che ti accresce"
 9190 print"{down}di un punto la tua Intelligenza !"
 9200 wx=wx+1:os$(wx)="Amuleto incantato"
 9220 in=in+1
 9230 goto9390
 9240 print"{down}Una Pozione miracolosa che , bevuta,"
 9250 print"{down}ti aumenta di un punto la Destrezza"
 9260 de=de+1
 9270 goto9390
 9280 print"{down}\ 2000 in Diamanti !"
 9290 dn=dn+2000
 9300 print"{down}Possiedi ora \ "dn
 9320 goto9390
 9330 print"{down}A causa della tua fuga non hai potuto"
 9340 print"{down}recuperare la "zb$
 9360 print"{down}del "zc$
 9380 print"{down}e quindi non ricevi ricompensa ."
 9390 print"{down}Terminata la missione torni in taverna":gw=0
 9410 ifleft$(zd$,4)="un F"thengosub1410:gosub1500:goto9430
 9420 gosub18380
 9430 goto2220
 9440 print"{clr}Sei ora al servizio del barone Gudrund":dn=dn+1000:gd=1:k=1:gw=0
 9490 print"per 4 settimane ,hai ricevuto il tuo"
 9500 print"premio d'ingaggio;possiedi ora \"dn:gosub200
 9540 forzy=1to4:gosub1410
 9560 tk=tk+1:print"{down}"k"' settimana di servizio"
 9600 x=int(12*rnd(0))+1
 9610 onxgosub11830,11290,11380,11470,11290,11560,11650,11740,11830,11950,11830,11740
 9620 print"{down}Questa settimana  hai il compito di":printga$:printgb$:printgc$
 9660 printgd$:gosub18380
 9680 fu=0:print"{clr}           {rvon}{yel}INIZIA  LA  MISSIONE{rvof}{wht}"
 9700 print"{down}Parti dalla Fortezza del Barone Gudrund"
 9710 print"per compiere da solo la tua"k"{left}' missione"
 9740 gosub13300:im$=""
 9760 gosub12740
 9770 d1=int(3*rnd(0))+1
 9780 fu=0:print"{down}Ti stai avvicinando al tuo obbiettivo e"
 9800 ifleft$(gd$,1)="c"thengosub15340:goto10820
 9810 ond1goto9820,10030,10180
 9820 print"avvisti di lontano un gruppo di"nm
 9840 printnm$" che non{160}si sono ancora"
 9860 print"accorti della tua presenza ! ":gosub200
 9880 print"{down}Puoi :"
 9890 print"{down}{rvon}* 1 *{rvof} allontanarti al galoppo"
 9900 print"{down}{rvon}* 2 *{rvof} avvicinarti risoluto"
 9910 print"{down}{rvon}* 3 *{rvof} tentare un ' imboscata"
 9920 gosub12690
 9930 ifn>3thenprint"{up}{up}":goto9920
 9940 print"{clr}":onngoto9960,10340,9990
 9960 syss+6:ifnm$<>"armigeri "thenfu=1
 9970 ifnm$="armigeri "thenfu=3
 9980 goto10820
 9990 gosub15770
10000 gosub18380
10010 print"{clr}"
10020 goto10380
10030 rem incontro medio
10040 print"incontri un gruppo di";nm
10050 printnm$;" che ti si fanno incontro !":gosub200
10080 print"{down}Puoi :"
10090 print"{down}{rvon}* 1 *{rvof} allontanarti al galoppo"
10100 print"{down}{rvon}* 2 *{rvof} avvicinarti risoluto"
10110 gosub12690
10120 ifn>2thenprint"{up}{up}":goto10110
10130 print"{clr}":onngoto10150,10340
10150 syss+6:ifnm$<>"armigeri "thenfu=1
10160 ifnm$="armigeri "thenfu=3
10170 goto10820
10180 rem
10185 print"t' imbatti all'improvviso in un gruppo"
10190 print"di"nm;nm$" !"
10230 print"{down}La sorpresa e' reciproca e siete a"
10240 print"contatto d' armi !":gosub200
10260 print"{down}Puoi:"
10270 print"{down}{rvon}* 1 *{rvof} tentare di fuggire"
10280 print"{down}{rvon}* 2 *{rvof} combattere"
10290 gosub12690
10300 ifn>2thenprint"{up}{up}":goto10290
10310 print"{clr}":onngosub14510,13900
10330 goto10820
10340 rem combat con nemici
10350 print"{clr}{down}Hai intercettato i"nm;nm$" !{down}"
10380 gosub200:im$="":gosub13900
10410 goto10820
10420 rem
10425 print"Frugando tra i cadaveri trovi :"
10430 ifrm=1andro>19thent=1:t$="Oro":gf$="":rm=0
10440 ifrm=2andfr>19thent=1:t$="Oro":gf$="":rm=0
10450 ift=0then10570
10460 t=int(1000*rnd(0))+501
10470 printt$;
10480 print" per \ "t
10500 dn=dn+t
10510 t$="":t=0
10530 print"Possiedi ora \ "dn" .":return
10570 ifrm=1then10650
10580 ifrm=2then10740
10590 print"Un "gf$
10610 wx=wx+1:os$(wx)=left$(gf$,14)
10630 ft=0
10640 return
10650 printgf$
10660 print"Essa t'infonde un grande vigore !":ro=ro+1:ifro>19thenro=20
10690 print"La tua Robustezza (Ro) e' ora "ro:rm=0:rf=ro:return
10740 print"Un "gf$
10760 wx=wx+1:os$(wx)=left$(gf$,9)
10780 print"che ti aumenta di uno la Fortuna !":fr=fr+1:iffr>19thenfr=20
10810 return
10820 rem conclusione missione
10825 iffu=0thengosub10420
10830 iffu=3thenprint"Con questa tempestiva fuga sei riuscito"
10840 iffu=3thenprint"a sfuggire agli armigeri di Movas e hai"
10850 iffu=0thenprint"Con questo combattimento hai"
10860 iffu=1thenprint"Con questa fuga non hai"
10870 iffu=4thenprint"Dopo questo incontro rientri poiche'hai"
10880 printfm$
10890 iffu=1thenprint"Questo ti fa'perdere un punto di Fascino":fa=fa-1
10900 print"{down}Terminata la"k"{left}' settimana ritorni"
10930 print"nella fortezza del Barone Gudrund .{down}":t=0:ft=0
10960 x1$="{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}"
10970 gosub18730
10990 forp=1to10
11000 print"{up}";
11010 next
11020 x1$=x1$+"{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}"
11030 gosub18730
11040 print"{up}{up}":gosub19490
11060 x1$=""
11070 print"{wht}{up}{up}":gosub1410:gosub1490
11100 k=k+1
11110 print"{clr}"
11120 nextzy
11130 print"{down}{clr}Hai terminato il tuo ingaggio;puoi :"
11140 print"{down}{down}{rvon} * 1 * {rvof} Rinnovare la ferma alle stesse"
11150 print"{down}condizioni"
11160 print"{down}{down}{rvon} * 2 * {rvof} Ritornare in citta per cercare"
11170 print"{down}nuove avventure"
11180 print"{down}{down}{rvon} * 3 * {rvof} rivedere "np$" prima"
11210 print"{down}di scegliere !"
11220 gosub12690:ifn>3thenprint"{up}{up}":goto11220
11240 onngoto9440,2740,11250
11250 su=1:gosub2220:su=0:goto11130
11290 ga$="pattugliare i confini orientali e"
11300 gb$="respingere le incursioni periodiche"
11310 gc$="dei feroci barbari delle steppe .":gd$=""
11330 nm$="barbari":t$="monili e pelli":t=1
11360 fm$="respinto l'incursione dei barbari":return
11380 ga$="distruggere una banda di briganti che"
11390 gb$="assale i viandanti e tagliegga i mer-"
11400 gc$="canti e i contadini .":gd$=""
11420 nm$="briganti ":t$="oro e argento ":t=1
11450 fm$="sgominato la banda di briganti ":return
11470 ga$="intercettare gli schiavisti che hanno"
11480 gb$="fatto un'incursione nel vicino paese ,e"
11490 gc$="liberare i contadini fatti schiavi .":gd$=""
11510 nm$="schiavisti ":t$="denaro  ":t=1
11540 fm$="liberato i contadini fatti schiavi":return
11560 ga$="portare un messaggio al castello che"
11570 gb$="protegge la regione dalle incursioni"
11580 gc$="degli armigeri del perfido Conte Movas":gd$=""
11600 nm$="armigeri ":t$="borsa di monete":t=1
11630 fm$="consegnato il messaggio al castello":return
11650 ga$="arrestare un Vassallo ribelle e sgomi-"
11660 gb$="nare un gruppo di mercenari che il"
11670 gc$="Ribelle ha assoldato.":gd$=""
11690 nm$="mercenari ":t$="borsa di monete":t=1
11720 fm$="arrestato il ribelle e disperso i suoi  Mercenari .":return
11740 ga$="stare di guarnigione in un villaggio"
11750 gb$="costiero e proteggerlo dalle scorrerie"
11760 gc$="dei pirati delle Isole Nere":gd$=""
11780 nm$="pirati ":t$="dobloni d'oro ":t=1
11810 fm$="protetto il villaggio costiero .":return
11830 ga$="pattugliare la strada che attraversa il"
11840 gb$="bosco di Mistwood che , dicono , sia"
11850 gc$="stregato ed abitato da mostri e strane":gd$="creature magiche .{down}"
11870 gosub12840:gr=int(4*rnd(0))+1
11890 ifgr=1thengf$="Filtro magico che cura le ferite":ft=1:t=0:t$="":rm=0
11900 ifgr=2thent$="Polvere d'argento":t=1:ft=0:gf$="":rm=0
11910 ifgr=3thengf$="Una Radice di mandragora":t=0:t$="":ft=0:rm=1
11920 ifgr=4thengf$="Talismano portafortuna":ft=0:t=0:t$="":rm=2
11930 fm$="compiuto il pattugliamento di Mistwood":return
11950 ga$="vigilare ai bordi della giungla di Kho"
11960 gb$="per impedire le scorrerie dei feroci"
11970 gc$="Boscimani  che la abitano .":gd$=""
11990 nm$=" Boscimani ":t$="monete di rame":t=1
12020 fm$="ricacciato i Boscimani nella giungla":return
12040 syss+18:ifee<>6andat<200then12210
12050 print"{clr}{yel}":forp=1to40:print"*";:next
12100 syss+24:print"{down}{down}       {rvon} SEI DIVENTATO UN EROE "
12110 print"{down}   {wht}e vieni chiamato nell' Empireo"
12120 print"{down}   dove  vivono  i  Semidei ! ! !"
12130 print"{down}{down}{yel}":forp=1to40:print"*";:next
12180 print"{down}{down}{down}{wht}Per divenire Eroe hai impiegato "tk
12200 print"{down}settimane di avventura ."
12210 print"{down}{down}{down}Vuoi giocare un'altra partita (s/n) ?"
12220 getp$:ifp$<>"s"andp$<>"n"then12220
12240 ifp$="s"thensyss+27:clr:goto0
12250 print"{clr}{down}{down}Gli elfi , coboldi , banditi & c  ti"
12260 print"{down}salutano e ti aspettano per un'altra "
12270 printtab(10)"{down}{down}{down}A{rght}V{rght}V{rght}E{rght}N{rght}T{rght}U{rght}R{rght}A"
12290 print"{down}{down}{down}{down}{down}{down}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}C{160}I{160}A{160}O{160}!"
12310 forp=1to3000:next:sys64738
12340 np$="Rowena":fo=9:in=17:de=12:fr=13:ro=11:fa=16:at=fo*5:rf=ro:goto2220
12440 np$="Thoralf":fo=16:in=10:de=14:fr=9:ro=16:fa=9:at=fo*5:rf=ro:goto2220
12540 np$="Jasper":fo=11:in=12:de=16:fr=15:ro=10:fa=11:at=fo*5:rf=ro:goto2220
12640 d1=int(6*rnd(0))+1:d2=int(6*rnd(0))+1:d3=d1+d2+6:gosub200:return
12690 rem scelta
12695 print"{down}{rvon}{yel}Batti il numero della tua scelta       {up}{rvof}{wht}"
12700 getn$:n=val(n$):ifn=0then12700
12730 return
12740 rem generazione mostri
12750 x=0:sm=10
12760 ifat<=100thenx=2:xy=1
12770 ifat>100andat<150thenx=2:xy=1.2
12780 ifat>150thenx=4:xy=2
12790 ifat>200thenx=6:xy=3.5
12800 nm=int(x*rnd(0))+3
12810 am=int((int((41-nm)*rnd(0))+21)*xy)
12820 ifam>95thenam=95
12830 return
12840 a$="0":x=int(12*rnd(0))+1
12860 onxgoto12890,12920,12950,12970,13000,13020,13050,13070,13090,13110,13140
12870 nm$=" Zombi ":goto13160
12890 nm$=" Elfi ":a$="1":goto13160
12920 nm$=" Uomini Falco ":a$="1":goto13160
12950 nm$=" Troll ":goto13160
12970 nm$=" Centauri ":a$="1":goto13160
13000 nm$=" Orchi ":goto13160
13020 nm$=" Uomini Scimmia ":a$="1":goto13160
13050 nm$=" Serpenti alati ":goto13160
13070 nm$=" Ragni giganti ":goto13160
13090 nm$=" Orchetti ":goto13160
13110 nm$=" Gnomi ":a$="1":goto13160
13140 nm$=" Nani ":a$="1"
13160 return
13170 print"{clr}Quante settimane vuoi restare ?"
13180 print"{down}(minimo 1 , massimo 9)"
13190 print"{down}Sei a Ro "rf" su max "ro:print"{down}Possiedi \"dn:gosub12690
13260 qp%=n*100
13270 ifqp%<=dnthenpq%=1
13280 ifqp%>dnthenpq%=0
13290 return
13300 rem sub imboscata
13305 i=int(10*rnd(0))+1
13310 ifi>3then13880
13320 gosub15040:gosub12740:am=am-10:sm=5
13360 print"{down}Attenzione !  Stai per cadere in una "
13370 print"{down}            {rvon}{pur} * IMBOSCATA * {rvof}{wht}"
13380 print"{down}Per accorgerti per tempo dell'imboscata"
13390 print"devi usare la tua Intelligenza ("in")"
13420 print"su di un massimo di 21 probabilita'."
13430 gosub100:gosub200:ifin>=d6then13590
13460 rem caduto imboscata
13470 print"{down} Sei caduto nell'imboscata tesa da"nm
13480 printim$"e hai ricevuto 1 ferita"
13500 rf=rf-1:gosub18380:print"{clr}"
13530 fu=0:ifam>90thenam=am-10
13550 ifam<22thenam=am+9
13560 gosub13900:fu=0:goto13880
13590 rem
13595 print"{down} Ti sei accorto dell'imboscata tesa da"
13600 printnm;im$" ; puoi :"
13630 print"{down}* 1 * Evitare  l' imboscata"
13640 print"* 2 * Attaccare di sorpresa"
13650 gosub12690:ifn>2thenprint"{up}{up}":goto13650
13670 onngoto13700,13790
13680 print"{up}{up}":goto13650
13700 syss+6:print"Imboscata evitata,prosegui l'avventura {up}"
13710 gosub200:gosub200
13740 forp=1to5:getp$:next
13770 print"{clr}":goto13880
13790 print"{clr}Hai attaccati di sorpresa"
13800 ifleft$(im$,2)<>" L"orks<>0then13830
13810 gosub280:goto13530
13830 print"hai ucciso uno dei"im$:nm=nm-1:print
13870 goto13530
13880 im$=" ":return
13900 fu=0:y=1:syss+12
13920 print"{rvon}      "y"{left}'  turno di mischia       {rvof}"
13950 ifnm=1thenprint"{down}Sei in mischia con un solo avversario{down}":goto13990
13960 print"{down}Sei in mischia con"nm"avversari{down}"
13990 forj=1tonm:gosub200
14020 ifnm>=4thenpa=int(at/4):cs=0:goto14060
14030 pa=int(at/nm)+10:cs=0:xf=1
14060 cm=int(100*rnd(0))+1
14070 pp=int(100*rnd(0))+1
14080 ifam<cmandnm=1thenprint"{yel}*{wht} L' avversario sbaglia il colpo":goto14190
14090 ifam<cmthenprint"{yel}*{wht}";:printj;:print"'avversario sbaglia il colpo":goto14190
14100 ifam>=cmandpa<ppthencs=1
14110 cc=int(am/20)
14120 ifcc>=cmthenxf=2
14130 ifcs=1andxf=1thenprint"*";:printj;:print"'avversario ti fa {rvon}1 ferita{rvof}":rf=rf-1:goto14190
14140 ifcs=1andxf=2thenprint"*";:printj;:print"'avversario ti fa {rvon}2 ferite{rvof}":rf=rf-2:goto14190
14150 ifnm=1thenprint"{grn}*{wht} Parato il colpo dell' avversario":goto14190
14160 print"{grn}*{wht} Parato colpo del"j"'avversario"
14190 xf=1:next:cc=0:ifnm>1thencc=int(at/15):gosub240
14230 ifks>0then14250
14240 ifleft$(nm$,2)=" L"orleft$(im$,2)=" L"thengosub280:goto14350
14250 ap=int(100*rnd(0))+1
14260 ifat<apthenprint"{down}Hai mancato il tuo colpo":goto14350
14270 xs=int(100*rnd(0))+1
14280 ifat>=apandsm>=xsthenprint"{down}L'avversario ha scansato tuo colpo":goto14350
14290 ts=0
14300 ifat>=apthents=1
14310 ifts=1andcc>=apthenprint"{down}^^ Hai ucciso {rvon}due{rvof} avversari":nm=nm-2:goto14350
14320 ifnm=1then14340
14330 ifts=1andcc<apthenprint"{down}^ Hai ucciso  un  avversario":nm=nm-1:goto14350
14340 ifts=1andcc<apthenprint"{down}^ Hai ucciso l'ultimo avversario":nm=nm-1
14350 gosub200
14360 ifrf<=0thenrf=0
14370 print"{down}la tua robustezza e' ora "rf:gosub240
14400 ifrf<=0thenprint"{down}Sei morto !{160}!{160}!{160}!{160}!{160}!":syss+18:goto12210
14410 ifnm=0then14740
14420 ifnm>1thenprint"{down}Gli avversari sono ora"nm
14430 ifnm=1thenprint"{down}Hai di fronte un solo avversario"
14440 gosub240:print"{down}Puoi fare la scelta di :"
14460 print"* 1 * Tentare la fuga"
14470 print"* 2 * Continuare il combattimento"
14480 gosub12690
14490 ifn>2thenprint"{up}{up}":goto14480
14500 onngoto14510,14710
14510 rem tentativo di fuga
14515 print"{clr}"tab(7)"{rvon} Tentativo di fuga {rvof}"
14540 print"{down}Per fuggire devi usare la tua Fortuna"
14550 print"{down}("fr"{left})con un massimo di probabilita'di 21"
14580 gosub100:gosub200:iffr>=d6then14680
14600 rem fuga non riuscita
14610 print"{down}Il tentativo di fuga non e' riuscito !"
14620 ifnm=1thenprint"{down}Hai ricevuto una ferita !":goto14660
14630 print"{down}Hai ricevuto "nm" ferite !"
14660 rf=rf-nm
14670 goto14350
14680 rem fuga riuscita
14685 syss+6:print"{down}La fuga e' riuscita"
14690 fu=1
14700 goto14790
14710 y=y+1
14720 ifnm>0thenprint"{clr}"
14730 ifnm>0then13920
14740 print"{down}hai ucciso tutti i tuoi avversari":gosub200
14760 print"{down}Sei cresciuto di 1 % di capacita' di "
14770 print"{down}usare le armi !":at=at+1
14790 print"{down}Puoi riprendere la tua avventura"
14800 syss+6:gosub1500
14810 print"{clr}"
14820 return
14830 rem
14840 fu=0:gosub15040:gosub12740:gosub11870
14870 nm$=im$:pl=int(2*rnd(0))+1
14890 ifpl=1thenpl$="una piccola palude"
14900 ifpl=2thenpl$="un villaggio "
14910 gw=1:print"{down}Stai passando presso "pl$
14940 print"{down}e ti accorgi che ,in lontananza,"nm
14960 print"{down}{left}"nm$"sono sulla tua "
14990 print"{down}strada e stanno venendo verso di te":gosub200:gosub15390
15020 iffu=0thengosub10420
15030 return
15040 a$="1":x=int(12*rnd(0))+1
15060 onxgoto15090,15110,15130,15150,15170,15200,15220,15240,15270,15290,15310
15070 im$=" Sauridi ":goto15330
15090 im$=" Tigroidi ":goto15330
15110 im$=" Coboldi ":goto15330
15130 im$=" Troll ":goto15330
15150 im$=" Centipedi ":goto15330
15170 im$=" Giganti ":a$="1":goto15330
15200 im$=" Grandi Serpenti ":goto15330
15220 im$=" Demoni alati ":goto15330
15240 im$=" Lupi mannari ":a$="0":goto15330
15270 im$=" Rospi Giganti ":goto15330
15290 im$=" Grifoni ":goto15330
15310 im$=" Folletti ":a$="1"
15330 return
15340 rem mistwood
15345 print"{down}mentre stai pattugliando Mistwood"
15350 print"{down}Vedi nel Bosco"nm;nm$:gosub240
15390 print"{down}Puoi:"
15400 print"{down}{rvon}* 1 *{rvof} fuggire ed evitarli"
15410 print"{down}{rvon}* 2 *{rvof} avvicinarti amichevolmente"
15420 print"{down}{rvon}* 3 *{rvof} attaccarli"
15430 print"{down}{rvon}* 4 *{rvof} tentare un' imboscata"
15440 gosub12690
15450 ifn>4thenprint"{up}{up}":goto15440
15460 print"{clr}":onngoto15480,15510,15690,15710
15480 syss+6:fu=1:return
15500 ifgw=1thenreturn
15510 ifleft$(nm$,2)=" L"orleft$(nm$,2)=" Z"then15530
15520 ifval(a$)=1then15570
15530 print"{clr}Loro non sono amichevoli e ti attaccano{down}{down}":gosub200
15550 gosub13900
15560 goto15760
15570 rem trattativa
15575 gosub16010
15580 ifkz=1thenprint"{clr}":goto15690
15590 gosub200:print"{down}I "nm;" ";nm$
15640 print"affascinati ,ti regalano :"
15650 gosub10430
15660 gosub18380
15670 print"{clr}":goto15760
15690 gosub13900
15700 goto15760
15710 gosub15770
15720 gosub18380
15730 print"{clr}":gosub13900
15750 goto15760
15760 rem
15765 return
15770 print"{clr}Per riuscire nell' imboscata devi"
15780 print"{down}essere agile e furtivo !":gosub17210:ifzz=0then15920
15810 print"{down}i"nm;nm$" ti hanno visto,"
15850 print"e ti attaccano all' improvviso  !":gosub240
15870 print"{down}ricevi "nm" ferite !":rf=rf-nm
15910 return
15920 ifleft$(nm$,2)<>" L"orks<>0then15950
15930 gosub280:goto15970
15950 print"{down}Hai ucciso un avversario .":nm=nm-1
15970 print"{down}Sei in mischia con"nm;nm$:return
16010 rem trattativa
16020 kz=0:bt=0
16030 print"{clr}Per convincerli della tua amicizia devi"
16040 print"usare il tuo Fascino("fa") su di"
16070 print"un massimo di probabilita' di 21"
16080 gosub100:gosub200:iffa>=d6then16200
16110 print"{down}Hai fallito ! "
16120 print"{down}I "nm;nm$"si sono irritati e"
16160 print"{down}ti attaccano ! Sei in mischia ! ":kz=1:gosub18380:return
16200 fu=4:print"{down}Ci sei riuscito !{down}":return
16230 rem sub routine combat ind
16235 ifhs=0then16290
16240 ha=10:hp=ha:hr=13:print"{clr}Il tuo avversario e' sorpreso"
16280 goto16480
16290 ha=at-int(20*rnd(0))+1:pa=at
16310 ifleft$(la$,1)="D"thenha=95
16320 ifha>95thenha=95
16330 hp=ha-15:hd=int(6*rnd(0))+1+int(6*rnd(0))+1+6
16350 ifat>99thenhp=hp-(at-100)
16360 ifhp<5thenhp=5
16370 hr=int(6*rnd(0))+1+int(6*rnd(0))+1+6:hz=hr:ifpa>95thenpa=95
16400 ifleft$(la$,1)="G"thenhr=hr+10:hd=hd-5:hp=5
16410 print"{clr}La tua Destrezza e' "de:gosub200
16440 print"{down}Quella del tuo avversario "hd:gosub200
16470 ifhd>dethenprint"{down}Lui attacca per primo !":goto16670
16480 print"{down}Attacchi per primo !":gosub200
16500 aa=int(100*rnd(0))+1
16510 ifaa>95oraa>atthenprint"{down}hai sbagliato il tuo colpo":goto16670
16520 print"{down}Hai colpito il tuo avversario":gosub240:hh=int(5*rnd(0))+3+5*ks
16550 d8=int(100*rnd(0))+1
16560 ifd8>95orhp<=0then16580
16570 ifd8<hpthenprint"{down}ma lui ha parato il tuo colpo":hp=hp-5:goto16670
16580 ifaa<int(at/10)thenprint"{down}e gli hai fatto un colpo a fondo ,":hu=hh+7
16590 ifaa<int(at/10)thenprint"{down}con una ferita da "hu" punti":hr=hr-hu:goto16650
16600 print"{down}e gli hai fatto una ferita da"hh" punti":hr=hr-hh:gosub200
16650 ifhr<=0thenprint"{down}Con questo colpo lo hai ucciso":goto16890:syss+6
16660 ifhr<int(hz/3)thenprint"{down}L'avversario si trova in difficolta'":hp=0
16670 gosub200
16680 hm=int(100*rnd(0))+1
16690 ifhm>95orhm>hathenprint"{down}l'avversario ha sbagliato il colpo":goto16830
16700 print"{down}l'avversario ti ha colpito"
16710 h8=int(100*rnd(0))+1:hy=int(4*rnd(0))+3
16730 ifh8<=pathenprint"{down}ma lo hai parato":goto16830
16740 ifhm<=int(ha/20)thenhy=hy+hy+1
16750 print"{down}e ti ha fatto una ferita da"hy" punti":rf=rf-hy:gosub200
16800 ifrf<=0thenprint"{down}{yel}Sei morto  !{wht}":syss+18:goto12210
16810 print"{down}La tua robustezza e' ora "rf
16830 ifleft$(la$,1)="V"thengosub16940
16840 ifleft$(la$,1)="L"thengosub17060
16850 gosub18380
16860 ifhs=1thenha=ha+10:hp=ha
16870 print"{clr}":goto16500
16890 syss+6:print"{down}Con questo combattimento sei cresciuto"
16900 print"{down}del 5 % in attacco !":at=at+5
16920 gosub18380
16930 return
16940 print"{down}Lo sguardo del "la$" ti":fo=fo-1:at=at-5:pa=pa-5
17000 print"{down}debilita ! Perdi un punto di Forza"
17010 print"{down}La tua Forza e' ora "fo" !"
17040 iffo<=0then12210
17050 return
17060 print"{down}L'urlo del "la$" ti paralizza":de=de-1
17100 print"{down}perdi un punto in destrezza !":hp=hp-5
17120 print"{down}La tua Destrezza e' ora "de" !"
17150 ifde<=0then12210
17160 return
17170 print"{down}{rvon}* 4 *{rvof} GRAZIE tornero' piu tardi !"
17180 return
17190 print"{down}Non hai abbastanza soldi !":goto7540
17210 print"{down}Per non farti scorgere devi usare la "
17220 print"{down}tua Destrezza ("de") su di un mas-"
17250 print"{down}simo di probabilita' di 21."
17260 gosub100:gosub200:ifd6>dethenprint"{down}Hai fallito !":zz=1:return
17290 print"{down}Ci sei riuscito !":zz=0:return
17320 d9=int(6*rnd(0))+1
17330 ond9goto17340,17360,17380,17400,17420,17440
17340 np$="Keilan":goto17460
17360 np$="Hotan Khan":goto17460
17380 np$="Elrik":goto17460
17400 np$="Toscyro":goto17460
17420 np$="Tulsak":goto17460
17440 np$="Beowulf":goto17460
17460 return
17470 print"{clr}Inserisci un nastro non registrato"
17480 print"{down}nel Registratore"
17490 gosub18380
17495 syss+30
17500 open8,1,1,np$
17510 cmd8,np$:poke781,0:sys65481
17530 cmd8,tk:poke781,0:sys65481
17550 cmd8,fo:poke781,0:sys65481
17570 cmd8,in:poke781,0:sys65481
17590 cmd8,de:poke781,0:sys65481
17610 cmd8,fr:poke781,0:sys65481
17630 cmd8,ro:poke781,0:sys65481
17650 cmd8,rf:poke781,0:sys65481
17670 cmd8,fa:poke781,0:sys65481
17690 cmd8,at:poke781,0:sys65481
17710 ifdn<1thendn=1
17720 cmd8,dn:poke781,0:sys65481
17740 ifwx=0thenp=99:cmd8,""p:poke781,0:sys65481:goto17820
17750 cmd8,wx:poke781,0:sys65481
17780 forp=1towx
17790 cmd8,os$(p):poke781,0:sys65481
17810 next
17820 close8
17825 syss+33
17830 print"{clr}Avventura salvata:vuoi continuare (S/N)"
17840 getp$
17850 ifp$=""then17840
17860 ifp$="s"thenreturn
17870 ifp$="n"then12250
17880 goto17840
17890 print"{clr}Inserisci il nastro , con l' Avventura"
17900 print"{down}salvata , nel Registratore.{down}{down}"
17910 gosub18380
17915 syss+30
17920 open8,1,0,""
17930 input#8,np$,tk,fo,in,de,fr,ro,rf,fa,at,dn,wx
17940 ifwx=99thenwx=0:goto17990
17960 forp=1towx
17970 input#8,os$(p)
17980 next
17990 close8
17995 syss+33
18000 print"{clr}Rimuovi il nastro dal registratore{down}{down}{down}"
18010 gosub18380
18020 return
18030 qq=0:print"{down}Stai vagando nel Deserto,senza guida":tt=tt+1
18060 print"{down}se entro una settimana non trovi"
18070 print"{down}un' oasi sei morto !":gosub200
18090 print"{down}Per trovare un' oasi devi usare la tua"
18100 print"Fortuna ("fr") su di un massimo di"
18130 print"probabilita' di 21."
18140 gosub100:gosub200:iffr>=d6then18190
18170 print"{down}Sei morto sperduto nel deserto !":goto12210
18190 print"{down}Hai trovato l' oasi !":gosub18380
18210 print"{clr}Nell'oasi trovi una carovana di nomadi"
18220 print"{down}e ti prendono con loro ;{down}"
18230 gosub200:q0=int(2*rnd(0))+2:tk=tk+q0
18260 qw=0:
18270 ifrf=rothen18310
18280 qt=ro-rf:ifqt>=q0thenprint"nel viaggio recuperi"q0" di Ro,":rf=rf+q0
18300 ifqt<q0thenprint"nel viaggio recuperi "qt" di Ro,":rf=rf+qt
18310 ifq0=4thenreturn
18320 print"dopo "q0" settimane sei tornato a casa":gosub1500
18360 su=0:goto2220
18380 getb$:print"{down}{rvon}{grn}Per continuare premi un tasto           {rvof}{up}{wht}"
18400 getp$:ifp$=""then18400
18420 return
18430 forp=1to7:print"{down}";:next
18470 x1$="{rght}":gosub18730
18500 forp=1to16:print"{up}";:next
18530 x1$="{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}"
18540 gosub18910
18560 forp=1to16:print"{up}";:next
18590 x1$="{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}"
18600 gosub18910
18620 forp=1to10:print"{up}";:next
18650 x1$=x1$+"{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}"
18660 gosub18730
18670 x1$="{rght}{rght}{rght}{rght}{rght}{rght}{rght}"
18680 x2$="{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}"
18690 gosub19130:gosub19490:print"{wht}":return
18730 printx1$"{gry2}{rvon} {rvof}{CBM-D}{CBM-D} {CBM-F}{CBM-F}{rvon} {rvof}"
18750 printx1$"{CBM-C}{rvon}     {rvof}{CBM-V}"
18770 printx1$" {rvon} {CBM-J} {rvof}{CBM-K}{rvon} {rvof}"
18800 forp=1to4:printx1$" {rvon}     {rvof}":next
18840 printx1$" {rvon} {CBM-V} {CBM-C} {rvof}"
18860 printx1$" {rvon}  {rvof}{brn}{rvon} {rvof}{gry2}{rvon}  {rvof}"
18880 printx1$" {rvon}  {rvof}{brn}{rvon} {rvof}{gry2}{rvon}  {rvof}{wht}":return
18910 printx1$"{pur}   {CBM-I}"
18920 printx1$"  {CBM-D}{rvon}{CBM-E}{rvof}{CBM-F}"
18950 printx1$" {CBM-D}{rvon}{CBM-E}{CBM-E}{CBM-E}{rvof}{CBM-F}"
18970 printx1$"{CBM-D}{rvon}{CBM-E}{CBM-E}{CBM-E}{CBM-E}{CBM-E}{rvof}{CBM-F}{wht}"
18990 printx1$"{gry2}{rvon}{CBM-F}{rvof} {CBM-I} {CBM-I} {rvon}{CBM-D}{rvof}"
19010 printx1$"{CBM-C}{rvon}     {rvof}{CBM-V}"
19030 printx1$" {rvon}{CBM-F}   {CBM-D}{rvof}"
19050 printx1$"  {CBM-K}{rvon} {CBM-K}{rvof} "
19080 forp=1to8:printx1$"{rght}{rght}{rvon}   {rvof}":next:return
19130 forp=1to6:print"{up}";:next:printx1$"{gry2}";:forp=1to8:print"{CBM-D}";:next:
19230 print:printx2$"{up}";:forp=1to8:print"{CBM-F}";:next:forpp=1to5
19240 print:printx1$;:print;:forp=1to8:print"{rvon} {rvof}";:next:
19390 print:printx2$;:print"{up}";:forp=1to8:print"{rvon} {rvof}";:next:next:print"{wht}{up}":return
19490 x5$="{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}{rght}"
19510 forp=1to5:print"{up}";:next:printx5$"{brn}{CBM-O}{CBM-O}{CBM-O}{CBM-O}"
19570 forp=1to5:printx5$"{lgrn}{SHIFT-+}{SHIFT-+}{SHIFT-+}{SHIFT-+}":next:return
19620 data"Drago di fuoco","Demone oscuro","Minotauro gigante","Golem di pietra"
19630 data"Pericoloso Bandito","Tirannosauro Atrox","Vampiro Maledetto"
19640 data"Licantropo nero","la Grande palude Nera","il Monte di Cristallo"
19650 data"la Foresta degli Spettri","la Collina Stregata","il Deserto di Sale"
19660 data"il Lago di Lava purpurea","il Vulcano dei 7 Fuochi"
19670 data"la Grotta dell'impiccato","Si e'persa "
19680 data"Hanno rubato ","E'scomparsa ","Non si trova ","Hanno rubato "
19690 data"Si ricerca ","E'sparita ","E'sparita "
19700 data" Figlia"," Danzatrice"," Statua d'oro"," Moglie"
19710 data" Pergamena Sacra"," Perla Nera"," Gemma Rossa"," Pietra Ircana"
19720 data"Sultano di Kebir","Nobile locale","Prete-Mago di SETH"
19730 data"Ricco Mercante"
19740 data"Cerusico di KHO","Potente Generale","Dignitario di Corte"
19750 data"Sacerdote di LYSS","Oro per \ 1000","un Filtro magico"
19760 data"un Amuleto incantato","una Pozione miracolosa","Oro per \ 1000"
19770 data"un Filtro magico","una Pozione Miracolosa","Diamanti per \ 2000"
