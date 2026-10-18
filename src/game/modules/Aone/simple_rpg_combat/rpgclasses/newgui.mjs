export default class GUI
{
    static container = document.getElementById('container');

    static cssPrefix = "css";

    static cssRulesLength = 0;

    static barUnit = "█";

    static svgNS = "http://www.w3.org/2000/svg";

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

        // prepare CSS classes
        GUI.customCSSClasses();

        // create the body if needed:
        if (!document.body)
        {
            document.body = document.createElement("body");
        }

        document.body.style.setProperty('background-color', '#070404');
        
        // generate the <pre> container, that will become the default NodeElement for text output
        if (!GUI.container)
        {
            const c = document.createElement('pre');
            
            const defaultCss = [
                ['font-family', 'monospace'],
                ['color', '#fafafa'],
                ['background-color', '#000000'],
                ['font-size', 'x-large'],
                ['height', '40em']
            ];

            for (const [prop, val] of defaultCss)
            {
                c.style.setProperty(prop, val);
            }
            
            document.body.appendChild(c);

            
            
            GUI.container = c;
        }

    }

    static makeTextNode(text) //line(text, lineBreak = true)
    {
        return document.createTextNode(text);
    }

    static makeLineBreak()
    {
        return document.createElement('br');
    }

    // static makeSpan(text, color)
    // {
    //     const spanElement = document.createElement('span');

    //     spanElement.appendChild(GUI.makeTextNode(text));

    //     if (Number.isFinite(color)) //< GUI.cssRulesLength)
    //     {
    //         spanElement.style.setProperty('color', GUI._numberToHexColor(color));
    //     }

    //     return spanElement;
    // }

    static makeSpanWithClass(text, cssClass)
    {
        const spanElement = document.createElement('span');

        spanElement.appendChild(GUI.makeTextNode(text));

        if (cssClass < GUI.cssRulesLength)
        {
            spanElement.classList.add(`${GUI.cssPrefix}${cssClass}`);
        }

        return spanElement;
    }

    static _numberToHexColor(num)
    {
        return `#${num.toString(16).padStart(6, '0')}`;
    }

    static removeLastLineBreak()
    {
        if (GUI.container.lastChild.tagName === "BR")
        {
            GUI.container.removeChild(GUI.container.lastChild);
        }

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
        // const lospec = [
        //     "#000000",
        //     "#626262",
        //     "#898989",
        //     "#adadad",
        //     "#ffffff",
        //     "#9f4e44",
        //     "#cb7e75",
        //     "#6d5412",
        //     "#a1683c",
        //     "#c9d487",
        //     "#9ae29b",
        //     "#5cab5e",
        //     "#6abfc6",
        //     "#887ecb",
        //     "#50459b",
        //     "#a057a3"
        // ]
        let androidsArt16ColorPalette = [
            //0x000000, //  Void
            0x9d9d9d, //  Gray
            0xffffff, //  White
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

        const myCustomSheet = new CSSStyleSheet();
      
        let i = 0;
      
        for (const elem of androidsArt16ColorPalette)
        {
            myCustomSheet.insertRule(`.${GUI.cssPrefix}${i++}{color: ${GUI._numberToHexColor(elem)}}`, myCustomSheet.cssRules.length);
        }

        // androidsArt16ColorPalette.push(0xfafafa);
      
        for (const elem of androidsArt16ColorPalette)
        {
            // myCustomSheet.insertRule(`.${GUI.cssPrefix}${i++}{background-color: ${GUI._numberToHexColor(elem)}; padding: 0 1em; color: #000000}`, myCustomSheet.cssRules.length);
            myCustomSheet.insertRule(`.${GUI.cssPrefix}${i++}{background-color: ${GUI._numberToHexColor(elem)}; color: #000000}`, myCustomSheet.cssRules.length);
        }
      
        document.adoptedStyleSheets.push(myCustomSheet);

        GUI.cssRulesLength = myCustomSheet.cssRules.length;
      
        //console.log(GUI.cssRulesLength);
        
        return GUI;
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
                GUI.container.appendChild(GUI.makeTextNode(current));
            }
        }

        return GUI.addBR();
    }

    // static drawBar(criticalRange, hitThreshold, parryRange, roll)
	// {
    //     const totalLength = 30;
    //     const sec = "█";
    //     const ratio = totalLength / 100;
    //     const colIndices = [5, 8, 0, 10];
    //     const iterArr = [
    //         criticalRange,
    //         hitThreshold - criticalRange,
    //         parryRange - hitThreshold,
    //         100 - parryRange
    //     ];

    //     for (let i = 0; i < iterArr.length; i++)
    //     {
    //         GUI.print(sec.repeat( Math.round(iterArr[i] * ratio) ), colIndices[i])
    //         .removeLastLineBreak();
    //     }
    //     return GUI.addBR().print(`${' '.repeat(Math.ceil(roll * ratio ))}▲`);

	// }

    static destroy()
    {
        GUI.container = undefined;
        //console.log("GUI Destroyed)");
    }

    static _testColors()
    {
        GUI.customCSSClasses();
        for (let i = 0; i < GUI.cssRulesLength; i++)
        {
            GUI.print(`[${i.toString().padStart(2, " ")}] --->  `, "Test!", i);
        }
    }

    static makeSVG(width = 300, height = 40)
    {
        //const svgNS = "http://www.w3.org/2000/svg";

        const svg = document.createElementNS(GUI.svgNS, "svg");

        svg.setAttribute("width", `${width}`);

        svg.setAttribute("height", `${height}`);

        GUI.container.appendChild(svg);
        
        return svg;
    }


    static makeRect(x, y, w, h, col, parent)
    {
        const rect = document.createElementNS(GUI.svgNS, "rect");

        rect.setAttribute("x", `${x}%`);

        rect.setAttribute("y", `${y}%`);

        rect.setAttribute("width", `${w}%`);

        rect.setAttribute("height", `${h}%`);

        rect.setAttribute("fill", col);
        
        

        if (parent)
        {
            parent.appendChild(rect);
        }            

        return rect;
    }

    static addSVGResultBar(limitsArray, roll, width = 300, height = 40)
    {
        const svg = GUI.makeSVG(width, height);

        const positions = [0 , ...limitsArray.slice(0, 3)];

        const relativeWidth = limitsArray.map((val, i) => i === 0 ? val : val - limitsArray[i - 1]);

        // const positions = [...limitsArray];
        // positions.reduce((accum, currVal, idx, arr) => (arr[idx] = accum, currVal), 0);

        // const positions = [...limitsArray].copyWithin(1, 0, 3);
        // positions[0] = 0; 

        // const clonedLimits = [...limitsArray];
        // clonedLimits.reduce((ac, cv, i, arr) => (arr[i] -= ac, cv));

        const colors = ['#a46422', '#493c2b', '#005784', '#1b2632']; //[5, 4, 12, 11]; //['orange', 'aqua', 'red', 'gray']; // [5, 8, 0, 10];

        for (const [x, fill, width] of Iterator.zip([positions, colors, relativeWidth]))
        {
            GUI.makeRect(x, 25, width, 50, fill, svg);
        }

        if (roll)
        {
            /*const rollMarker = */ GUI.makeRect(Math.max(roll - 0.5, 0.001), 9, 1, 82, '#67910585', svg);

            //rollMarker.setAttribute("fill-opacity", 0.2);
        }

        return GUI.addBR();
    }

    
}

