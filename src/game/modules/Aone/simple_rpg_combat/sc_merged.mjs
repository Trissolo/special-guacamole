import GUI from "./newgui.mjs";
import combatA from "./combatA.mjs";

GUI.customCSSClasses();
for (let i = 0; i < GUI.cssRulesLength; i++)
{
    GUI.print(`[${i.toString().padStart(2, " ")}] --->  `, "Merged!", i);
}

// const baseThreshold = attacker.accuracy - defender.defense;

// const hitThreshold = Math.max(5, Math.min(95, baseThreshold));

// const criticalRange = Math.max(1, Math.floor(hitThreshold * 0.10));

// const parryRange = hitThreshold + 20;

// const roll = Math.floor(Math.random() * 100) + 1;

// GUI.clear().print(`${combatA.ratio * 98}`, 13);

let {barLength, ratio, clamp} = combatA;

const res = new Uint8Array(4);

console.log("UIN:", res);

function splitProportioned(percent, total, min = 1)
{
    // percent = clamp(percent, 1, 99) | 0;

    const portion = clamp(  (percent * ratio) | 0, min, total - 1);

    let remaining = Math.max(1, total - portion);
    console.log("BEFORE:", total - portion)
    return [portion, remaining];
}

const hitThreshold = 99;

const [good, bad] = splitProportioned(hitThreshold, barLength, 1);
console.log(`good: ${good}, bad: ${bad}, good + bad: ${good + bad}`);

const [critical, normal] = splitProportioned(10, good, 1);
console.log(`G, critical: ${critical}, normal: ${normal}, critical + normal: ${critical + normal}, ${(critical + normal) === good}`);
res[0] = critical;
res[1] = normal;

const [parried, miss] = splitProportioned(15, bad , 1);
console.log(`G, parried: ${parried}, miss: ${miss}, parried + miss: ${parried + miss}, ${(parried + miss) === bad}`);
res[2] = parried
res[3] = miss;


const {barUnit} = GUI;

// const testAry = [4, 60, 80, 100];

 const colors = [5, 4, 8, 11];

// let prev = 0;

// const proportioned = testAry.map( el => Math.floor(el * ratio));

// let currBorder = 1;

for (const [porzSize, colClass] of Iterator.zip([res, colors]))
{
// //     console.log(porzSize, colClass);
// //     const currsize = Math.min( (porzSize * ratio) | 0, currBorder);
    const grport = GUI.makeSpanWithClass(`${barUnit.repeat(porzSize)}`, colClass);
//      prev = porzSize;
    GUI.container.appendChild(grport);
}
