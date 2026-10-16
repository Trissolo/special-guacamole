import GUI from "./newgui.mjs";
import combatA from "./combatA.mjs";
import outcomeEnum from "./outcomeEnum.mjs";

GUI.addBR(2)
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

let previousLength = 0;

let outcome = 0;

let barPortionSizes = [];

for (let i = 0; i < harcodedLimits.length; i++)
{
    const perc = Math.floor(((harcodedLimits[i]) / 100) * barLength);

    console.log(`perc = ${perc}`);

    barPortionSizes.push(perc - previousLength);

    const grport = GUI.makeSpanWithClass(`${GUI.barUnit.repeat(perc - previousLength)}`, colors[i]);
    GUI.container.appendChild(grport);

    previousLength = perc;
}

console.log("barPortionSizes:", barPortionSizes);

const sum = combatA.sumElements(barPortionSizes);

// test arrow

const roll = 11;

previousLength = 0;

// harcodedLimits.reduce((ac, cv, i, arr) => {arr[i]-=ac;return cv}, 0);
// harcodedLimits.reduce((ac, cv, i, arr) => (arr[i]-=ac, cv), 0);

for(const [i, limit] of harcodedLimits.entries())
{
    // console.log("limit", limit, i);
    if (roll <= limit)
    {
        
        const adapetdRoll = (  (  (roll / 100) * barLength  ) | 0  );
        
        const clamped = combatA.clamp(adapetdRoll, previousLength, previousLength + barPortionSizes[i] - 1);
        
        console.log(`${outcomeEnum[i]} - clmaped cursor: ${clamped}`);

        outcome = i;

        GUI.addBR().print(`${' '.repeat(clamped)}▲`);
        break;
    }

    previousLength += barPortionSizes[i];
}

GUI.print(`Outcome: `, `${outcomeEnum[outcome]}`, colors[outcome]);

GUI.addResultBar(harcodedLimits, roll, 434);

GUI.print(`Outcome: `, `${outcomeEnum[outcome]}`, colors[outcome]);


/*
// <body>
// <script>
const svgNS = "http://www.w3.org/2000/svg";

const svg = document.createElementNS(svgNS, "svg");

svg.setAttribute("width", "300");

svg.setAttribute("height", "40");

document.body.appendChild(svg);


function relRect(x, y, w, h, col, parent = svg)
{
    const rect = document.createElementNS(svgNS, "rect");
    rect.setAttribute("x", `${x}%`);
    rect.setAttribute("y", `${y}%`);
    rect.setAttribute("width", `${w}%`);
    rect.setAttribute("height", `${h}%`);
    rect.setAttribute("fill", col);
    parent.appendChild(rect);
    return rect;
}

//bg
relRect(0, 0, 100, 100, '#e0e0e0');


// the bar
const harcodedLimits = [5, 50, 95, 100];

const posi = [0, ...harcodedLimits];
posi.pop(); 

harcodedLimits.reduce((ac, cv, i, arr) => (arr[i]-=ac, cv), 0);

console.log("harcodedLimits", harcodedLimits);
console.log("posi", posi);


const cols = ['orange', 'aqua', 'red', 'gray'];


for (const [x, fill, width] of Iterator.zip([posi, cols, harcodedLimits]))
{
    relRect(x, 25, width, 50, fill);
}

const marker = relRect(50, 0, 1, 100, '#111111');
marker.setAttribute("fill-opacity", 0.5);

// </script>
// </body>
*/