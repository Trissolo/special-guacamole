
import GUI from "./gui/newgui.mjs";

export default class combatA
{
    static EFFECTIVE_RANGE = 100;

    static barLength = 40;

    static ratio = combatA.barLength / combatA.EFFECTIVE_RANGE;

    static sections = new Array(4).fill();

    static clamp(value, min, max)
    {
        console.log(`Clamp-> min: ${min}, max: ${max}`);
        return Math.max(min, Math.min(max, value));
    }

    static dieRoll(faces = 100)
    {
        // return ((Math.random() * 100) + 1) | 0;
        return Math.floor(Math.random() * faces) + 1;
    }

    static clearSections()
    {
        return combatA.sections.fill(0);
    }


    static splitProportioned(percent, total = combatA.barLength, min = 1) // ratio = combatA.ratio)
    {
        if (percent < 1)
        {
            return [0, total];
        }

        const portion = combatA.clamp(  ((percent / 100) * total) | 0, min, total - 1  );

        // console.log(`Portion (${percent}% of ${total}): ${portion}`);

        
        const remaining = Math.max(1, total - portion);
        
        // console.log(`Remaining: ${remaining}`);
        // console.log("BEFORE:", portion, remaining, portion+remaining, total === (portion+remaining) );

        return [portion, remaining];
    }

    static sumElements(ary)
    {
        const sum = ary.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        const {barLength} = combatA;
        
        const ch = barLength === sum;

        console.log(`(barLength = ${barLength}, ${ch? "SAME":` ${sum-this.barLength}`})`);

        return sum;
        //return ary.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }

}
