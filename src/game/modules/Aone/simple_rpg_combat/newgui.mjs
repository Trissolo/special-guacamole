export default class GUI
{
    static container = document.getElementById('container');

    static cssPrefix = "css";
    static cssRulesLength = 0;

    static emoji = {
        bug: `🐛`,
        debugInfo: '💬',
        enemyHits: '💥',
        enemyMisses: '💨',
        enemyParried: '🛡️',
        playerMisses: '👎',
        playerKillsTwo: '⚔️',
        playerKills: '🗡️',
        cup: '🏆',
        lose: '🪦'
    }

    static {
        if (!GUI.container)
        {
            const c = document.createElement('pre');
            
            c.style.setProperty('color', '#fafafa');
            
            c.style.setProperty('background-color', '#000000');

            c.style.setProperty('font-size', 'x-large');
    
            document.body = document.createElement("body");

            document.body.appendChild(c);
            
            GUI.container = c;
        }

        //console.log(GUI.container = c, document);
    }

    static makeTextNode(text) //line(text, lineBreak = true)
    {
        return document.createTextNode(text);
    }

    static makeLineBreak()
    {
        return document.createElement('br');
    }

    static makeSpan(text, color = false)
    {
        const spanElement = document.createElement('span');

        spanElement.appendChild(GUI.makeTextNode(text));

        if (color < GUI.cssRulesLength)
        {
            spanElement.style.setProperty('color', GUI._numberToHexColor(color));
        }

        return spanElement;
    }

    static makeSpanWithClass(text, cssClass)
    {
        const spanElement = document.createElement('span');

        spanElement.appendChild(GUI.makeTextNode(text));

        if (cssClass < GUI.cssRulesLength)
        {
            spanElement.classList.add(`${GUI.cssPrefix}${cssClass}`);
        }
        else
        {
            console.log("no color set")
        }

        return spanElement;
    }

    static _numberToHexColor(num)
    {
        return `#${num.toString(16).padStart(6, '0')}`;
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

    static addBR(amount = 1)
    {
        for (let i = 0; i < amount; i++)
        {
            GUI.container.appendChild(GUI.makeLineBreak());
        }

        return GUI;
    }

    static customCSSClasses()
    {
        let androidsArt16ColorPalette = [
            //0x000000, //  Void
            0x9d9d9d, //  Gray
            //0xffffff, //  White
            0xbe2633, //  Red
            0xe06f8b, //  Meat
            0x493c2b, //  DarkBrown
            0xa46422, //  Brown
            0xeb8931, //  Orange
            0xf7e26b, //  Yellow
            0x2f484e, //  DarkGreen
            0x44891a, //  Green
            0xa3ce27, //  SlimeGreen
            0x1b2632, //  NightBlue
            0x005784, //  SeaBlue
            0x31a2f2, //  SkyBlue
            0xb2dcef //  CloudBlue

        ];
        // 1. Create a new custom CSSStyleSheet object
        const myCustomSheet = new CSSStyleSheet();
      
        let i = 0;
      
        for (const elem of androidsArt16ColorPalette)
        {
            myCustomSheet.insertRule(`.${GUI.cssPrefix}${i++}{color: #${elem.toString(16).padStart(6, 0)}}`, myCustomSheet.cssRules.length);
        }

        androidsArt16ColorPalette.push(0xfafafa);
      
        for (const elem of androidsArt16ColorPalette)
        {
            myCustomSheet.insertRule(`.${GUI.cssPrefix}${i++}{background-color: ${GUI._numberToHexColor(elem)}; padding: 0 1em; color: #000000}`, myCustomSheet.cssRules.length);
        }
      
        document.adoptedStyleSheets.push(myCustomSheet);

        GUI.cssRulesLength = myCustomSheet.cssRules.length;
      
        console.log(GUI.cssRulesLength);
    }

    static print(...params)
    {
        if (params.length === 0) return;

        for (let i = 0; i < params.length; i++)
        {
            const current = params[i];
            const next = params[i + 1];

            if (typeof next === 'number')
            {
                GUI.container.appendChild(GUI.makeSpanWithClass(current, next));

                i++; // Skip the color index on the next iteration
            }
            else
            {
                GUI.container.appendChild(GUI.makeSpanWithClass(current));
            }
        }

        return GUI.addBR();
    }

    static destroy()
    {
        GUI.container = undefined;
        console.log("GUI Destroyed)");
    }
}

// GUI.customCSSClasses();
// GUI.print(`max= ${GUI.cssRulesLength}`, 1, "qwe", 1, " Asdft", 29);
// for (let i = 0; i < GUI.cssRulesLength; i++)
// {
//     GUI.print(`[${i.toString().padStart(2, " ")}] --->  `, "Test String", i);
// }
