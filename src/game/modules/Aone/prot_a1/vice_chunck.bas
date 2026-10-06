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