import GUI from "../gui/newgui.mjs";

export default class Combat
{
    // boundaryCoordinates
    static limits = []
    static clamp(value, min, max)
    {
        return Math.max(min, Math.min(max, value));
    }

    static dieRoll(faces = 100)
    {
        return ((Math.random() * faces) + 1) | 0;
    }

    static clearSections()
    {
        return combatA.sections.fill(0);
    }

    constructor()
    {
        // this.limits = new Uint8Array(4);
    }

    compare(value, limsArr = this.limits)
    {
        for (const [i, rangeBorder] of limsArr.entries())
        {
            if (value <= rangeBorder)
            {
                console.log("Limit", rangeBorder, i === limits.length - 1);

                return i;
            }
        }
        console.log(`Out of range! value: ${value} > ${limsArr[limsArr.length - 1]}`);
        
        return (limsArr.length - 1);
    }
}
