import outcomeEnum from "./outcomeEnum.mjs";

import GUI from "./newgui.mjs";

export default class combatA
{
    static ONEHUNDRED = 100;

    static barLength = 35;

    static ratio = combatA.barLength / combatA.ONEHUNDRED;

    static sections = new Array(4).fill();

    static clamp(value, min, max)
    {
        return Math.max(min, Math.min(max, value));
    }

    static dieRoll(faces = 100)
    {
        return ((Math.random() * 100) + 1) | 0;
        // Math.floor(Math.random() * faces) + 1;
    }

    static clearSections()
    {
        return combatA.sections.fill(0);
    }
}
