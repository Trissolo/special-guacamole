export default class GUI
{
    static container = document.getElementById('container');

    static emoji = {
        bug: `🐛`,
        debugInfo: '💬',
        enemyHits: '💥',
        enemyMisses: '💨',
        enemyParried: '🛡️'
    }

    // static {
    //     // document.getElementById("btn2").addEventListener("pointerdown", GUI.click);
    // }

    // static click()
    // {
    //     GUI.clear();
    // }

    static makeTextNode(text) //line(text, lineBreak = true)
    {
        return document.createTextNode(text);
    }

    static makeLineBreak()
    {
        return document.createElement('br');
    }

    static makeSpan(text, color = 0)
    { 
        const spanElement = document.createElement('span');

        spanElement.appendChild(GUI.makeTextNode(text));

        if (color)
        {
            spanElement.style.setProperty('color', GUI._numberToHexColor(color));
        }

        return spanElement;
    }

    static _numberToHexColor(num)
    {
        return `#${num.toString(16).padStart(6, '0')}`;
    }

    static line(text)
    {
        GUI.container.append(GUI.makeTextNode(text), GUI.makeLineBreak());

        return GUI;
    }

    static colored(bef, val, col)
    {
        GUI.container.append(GUI.makeTextNode(`${bef} `), GUI.makeSpan(`${val}`, col), GUI.makeLineBreak());

        return GUI;
    }

    static removeLineBreak()
    {
        GUI.container.removeChild(container.lastChild);

        return GUI;
    }

    static clear()
    {
        GUI.container.replaceChildren();

        return GUI;
    }

    static addBR()
    {
        GUI.container.appendChild(GUI.makeLineBreak());

        return GUI;
    }

    // static logWrite(text, clearBefore = false, newLine = true)
    // {
    //     const guiPre = document.getElementById("container");

    //     if (clearBefore)
    //     {
    //         guiPre.replaceChildren();
    //     }
        
    //     if (text)
    //     {
    //         guiPre.innerHTML += `${text}`;
    //     }
        
    //     if (newLine)
    //     {
    //         guiPre.innerHTML += `<br>`;
    //     }

    //     console.log(guiPre);
        
    // }

    // static logDebugVar(text, elem, color = "#4a5", newLine = true)
    // {
    //     // const guiPre = document.getElementById("demo");
    //     GUI.logWrite(`${text}: <b style="color: ${color}">${elem}</b>`, false, newLine);
        
    // }
    static destroy()
    {
        GUI.container = undefined;
        console.log("GUI Destroyed)")
    }
}

/*

const container = document.getElementById("demo");

for (let i = 1; i < 6; i++)
{
    const mioTesto = document.createTextNode(`${i}0 ${String.fromCharCode(65 + i)}`);
    container.appendChild(mioTesto);
    if (i < 5)
    {
        const lineBreak = document.createElement('br');
        container.appendChild(lineBreak);
    }

}

const ultim = document.createTextNode(`ultim`);
container.appendChild(ultim);

const textStartSpan = document.createTextNode('span colorato');

// 2. Crea un elemento HTML contenitore (es. span)
const myspa = document.createElement('span');

// 3. Applica lo stile al contenitore HTML
myspa.style.color = '#699';

// 4. Inserisce il Text Node dentro il contenitore HTML
myspa.appendChild(textStartSpan);
container.appendChild(myspa)
console.log(container);

*/

/*
//A)
const contenitore = document.createElement('div');
contenitore.style.color = '#699';

// Crea l'elemento <br>
const br = document.createElement('br');

// Aggiunge la stringa (che diventa TextNode) e il <br> in un colpo solo
contenitore.append("Questo è il testo", br);

document.body.appendChild(contenitore);

// B)
const contenitore = document.createElement('div');
contenitore.style.color = '#699';

// Inserisce il testo e il tag <br> direttamente alla fine dell'elemento
contenitore.insertAdjacentHTML('beforeend', 'Questo è il testo<br>');

document.body.appendChild(contenitore);

*/