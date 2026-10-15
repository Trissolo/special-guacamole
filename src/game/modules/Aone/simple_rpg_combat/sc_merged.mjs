import GUI from "./newgui.mjs";
import combatA from "./combatA.mjs";
import outcomeEnum from "./outcomeEnum.mjs";

// GUI._testColors();

// const baseThreshold = attacker.accuracy - defender.defense;

// const hitThreshold = Math.max(5, Math.min(95, baseThreshold));

// const criticalRange = Math.max(1, Math.floor(hitThreshold * 0.10));

// const parryRange = hitThreshold + 20;

// const roll = Math.floor(Math.random() * 100) + 1;

// GUI.clear().print(`${combatA.ratio * 98}`, 13);

// let {barLength, ratio, clamp} = combatA;


// ne

const harcodedLimits = [
    11,  // limit for: 'Critical Hit'
    60,  // limit for: 'Hit - Standard Wound'
    80,  // limit for: 'Parried'
    100  // 100 or MORE, 'Miss'  
];  //new Uint8Array(4);

const {barLength} = combatA;

console.log(barLength, harcodedLimits);

const colors = [5, 4, 12, 11];

let prev = 0;

let barPortionSizes = [];

for (let i = 0; i < harcodedLimits.length; i++)
{
    const perc = Math.floor(((harcodedLimits[i]) / 100) * barLength);

    console.log(`perc = ${perc}`);

    barPortionSizes.push(perc - prev);

    const grport = GUI.makeSpanWithClass(`${GUI.barUnit.repeat(perc - prev)}`, colors[i]);
    GUI.container.appendChild(grport);

    prev = perc;
}

console.log("barPortionSizes:", barPortionSizes);

const sum = combatA.sumElements(barPortionSizes);

// test arrow
const roll = 68;
prev = 0;

for(const [i, limit] of harcodedLimits.entries())
{
    // console.log("limit", limit, i);
    if (roll <= limit)
    {
        
        const adapetdRoll = (  (  (roll / 100) * barLength  ) | 0  );
        
        const clamped = combatA.clamp(adapetdRoll, prev, prev + barPortionSizes[i] - 1);
        
        console.log(`${outcomeEnum[i]} - clmaped cursor: ${clamped}`);

        GUI.addBR().print(`${' '.repeat(clamped)}|`);
        break;
    }

    prev += barPortionSizes[i];
}
