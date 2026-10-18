import GUI from "./rpgclasses/gui/newgui.mjs";
import combatA from "./rpgclasses/combatA.mjs";
import outcomeStatus from "./constants/outcomeStatus.mjs";
import outcomeStrings from "./constants/outcomeStrings.mjs";

GUI.init();
// GUI._testColors();

// GUI.addBR(2)
// const baseThreshold = attacker.accuracy - defender.defense;

// const hitThreshold = Math.max(5, Math.min(95, baseThreshold));

// const criticalRange = Math.max(1, Math.floor(hitThreshold * 0.10));

// const parryRange = hitThreshold + 20;

// const roll = Math.floor(Math.random() * 100) + 1;

// GUI.clear().print(`${combatA.ratio * 98}`, 13);

// let {barLength, ratio, clamp} = combatA;


// ne

// const harcodedLimits = [
//     5,  // limit for: 'Critical Hit'
//     35,  // limit for: 'Hit - Standard Wound'
//     90,  // limit for: 'Parried'
//     100  // 100 or MORE, 'Miss'  
// ];  //new Uint8Array(4);
const harcodedLimits = [14, 60, 88, 100];

// const {barLength} = combatA;

// console.log(barLength, harcodedLimits);

 const colors = GUI.svgBarColorIndices; //[5, 4, 12, 11];

// let previousLength = 0;

let outcome = 0;

let range = null;

// let barPortionSizes = [];

// for (let i = 0; i < harcodedLimits.length; i++)
// {
//     const perc = Math.floor(((harcodedLimits[i]) / 100) * barLength);

//     console.log(`perc = ${perc}`);

//     barPortionSizes.push(perc - previousLength);

//     const grport = GUI.makeSpanWithClass(`${GUI.barUnit.repeat(perc - previousLength)}`, colors[i]);

//     GUI.container.appendChild(grport);

//     previousLength = perc;
// }

// console.log("barPortionSizes:", barPortionSizes);

// const sum = combatA.sumElements(barPortionSizes);

// // test arrow

// const roll = 36;

// previousLength = 0;

// // harcodedLimits.reduce((ac, cv, i, arr) => {arr[i]-=ac;return cv}, 0);
// // harcodedLimits.reduce((ac, cv, i, arr) => (arr[i]-=ac, cv), 0);

// for(const [i, limit] of harcodedLimits.entries())
// {
//     // console.log("limit", limit, i);
//     if (roll <= limit)
//     {
        
//         const adapetdRoll = (  (  (roll / 100) * barLength  ) | 0  );
        
//         const clamped = combatA.clamp(adapetdRoll, previousLength, previousLength + barPortionSizes[i] - 1);
        
//         console.log(`${outcomeEnum[i]} - clmaped cursor: ${clamped}`);

//         outcome = i;

//         GUI.addBR().print(`${' '.repeat(clamped)}▲`);
//         break;
//     }

//     previousLength += barPortionSizes[i];
// }

// GUI.print(`Outcome: (${roll}) `, `${outcomeEnum[outcome]}`, colors[outcome]);

GUI.addBR().print(" ".repeat(6), `${" ".repeat(8)}Test SVG${" ".repeat(8)}`, 22).addBR();

for (let i = 5; i--;)
{
    const roll = combatA.dieRoll(); // Math.random() > 0.5? 14:15

    GUI.addSVGResultBar(harcodedLimits, roll, 300);

    for(const [i, limit] of harcodedLimits.entries())
    {
        if (roll <= limit)
        {         
            outcome = i;
            console.log("limit", limit, i, harcodedLimits);
            range = `range: ${i=== 0? `0`: `${harcodedLimits[i-1] }`} - ${harcodedLimits[i]}`;

            break;
        }
    }

   // GUI.print(`Outcome: (${roll} - ${range}) `, `${outcomeStrings[outcome]}`, colors[outcome]).addBR(2);
    GUI.print(` ${outcomeStrings[outcome]}: `, colors[outcome], `range: ${outcome===0? "0": `${harcodedLimits[outcome - 1] + 1}`}-`, ` ${roll} `, 18, `-${harcodedLimits[outcome]}.`).addBR(2);
}

