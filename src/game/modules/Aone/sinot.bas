rem let RO
rem let RF
rem let AT
rem let KS (has Magic Sword)

12740 rem generazione mostri 
rem let SM (scans monster)

rem let NM (numero mostri)
rem let AM (attacco mostri)

rem at= 49  -> am =  21 - 58 
rem at= 50  -> am =  21 - 58 
rem at= 99  -> am =  21 - 58 
rem at= 100 -> am =  21 - 58

rem at= 149 -> am =  25 - 69 
rem at= 150 -> am =  25 - 69 

rem at= 199 -> am =  42 - 95 
rem at= 200 -> am =  42 - 95

rem at= 249 -> am =  73 - 95 
rem at= 250 -> am =  73 - 95 
rem at= 299 -> am =  73 - 95 

rem let Y (turno mischia)

rem let J (current monster)
rem let PA
rem let CS = 0

rem PA = NM >= 4? pa = int(at / 4): int(at / nm) + 10
rem let CM = int(100 * rnd(0)) + 1
rem let PP = int(100 * rnd(0)) + 1

rem if (AM < CM) // 14080
{
    res.push("avversario sbaglia il colpo");
}
else //14100
{
   if (PA < PP)
   {
       rem let CS = 1
   }
}

rem let CC = int(am / 20)

if CC >= CM then XF = 2
if (CS ===1 && xf > 0)
{
    res.push(`avversario avversario ti fa ${XF} ferite`);
    // goto14190
}
else
{
    res.push(`Parato colpo del ${J}'avversario`);
}
14190 XF = 1 : next J
rem CC = (NM > 1)? int(AT/15): 1
if (KS !== 0) // puoi colpire chiunque 14250
{
    rem let AP = int(100*rnd(0))+1
    //14260
    if (AT < AP)
    {
        res.push(`Hai mancato il tuo colpo`); // : goto14350
    }
    else
    {
        rem let XS = int(100*rnd(0)) + 1
        if (AT >= AP && SM >= XS)
        {
            res.push("L'avversario ha scansato tuo colpo") // : goto14350
        }
        else
        {
            rem let TS
            TS = (AT >= AP)? 1 : 0
            if (TS === 1 && CC >= AP)
            {
                res.push(`Hai ucciso ${Math.min(2, nm)} avversari`);
            }

        }

    }
    if (RF <= 0)
    {
        res.push("Sei morto");
        break;
    }
    if (NM === 0)
    {
        res.push("Hai Vinto!");
    }
}
