100 printchr$(14),chr$(147):at = 14: rf=10: de=12

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
16410 print"{clr}La tua Destrezza e' "de
16440 print"{down}Quella del tuo avversario "hd
16470 ifhd>dethenprint"{down}Lui attacca per primo !":goto16670
16480 print"{down}Attacchi per primo !"
16500 aa=int(100*rnd(0))+1
16510 ifaa>95oraa>atthenprint"{down}hai sbagliato il tuo colpo":goto16670
16520 print"{down}Hai colpito il tuo avversario":hh=int(5*rnd(0))+3+5*ks
16550 d8=int(100*rnd(0))+1
16560 ifd8>95orhp<=0then16580
16570 ifd8<hpthenprint"{down}ma lui ha parato il tuo colpo":hp=hp-5:goto16670
16580 ifaa<int(at/10)thenprint"{down}e gli hai fatto un colpo a fondo ,":hu=hh+7
16590 ifaa<int(at/10)thenprint"{down}con una ferita da "hu" punti":hr=hr-hu:goto16650
16600 print"{down}e gli hai fatto una ferita da"hh" punti":hr=hr-hh
16650 ifhr<=0thenprint"{down}Con questo colpo lo hai ucciso":goto16890:
16660 ifhr<int(hz/3)thenprint"{down}L'avversario si trova in difficolta'":hp=0
16670 rem
16680 hm=int(100*rnd(0))+1
16690 ifhm>95orhm>hathenprint"{down}l'avversario ha sbagliato il colpo":goto16830
16700 print"{down}l'avversario ti ha colpito"
16710 h8=int(100*rnd(0))+1:hy=int(4*rnd(0))+3
16730 ifh8<=pathenprint"{down}ma lo hai parato":goto16830
16740 ifhm<=int(ha/20)thenhy=hy+hy+1
16750 print"{down}e ti ha fatto una ferita da"hy" punti":rf=rf-hy
16800 ifrf<=0thenprint"{down}{yel}Sei morto  !{wht}":end
16810 print"{down}La tua robustezza e' ora "rf
16830 ifleft$(la$,1)="V"thengosub16940
16840 ifleft$(la$,1)="L"thengosub17060
16850 gosub18380
16860 ifhs=1thenha=ha+10:hp=ha
16870 print"{clr}":goto16500
16890 :print"{down}Con questo combattimento sei cresciuto"
16900 print"{down}del 5 % in attacco !":at=at+5
16920 gosub18380
16930 end

18380 getb$:print"{down}{rvon}{grn}Per continuare premi un tasto           {rvof}{up}{wht}"
18400 getp$:ifp$=""then18400
18420 return