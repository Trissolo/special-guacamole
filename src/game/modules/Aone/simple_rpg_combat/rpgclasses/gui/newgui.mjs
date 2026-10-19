import gui_emoji from "./gui_emoji.mjs";
import paletteAndroidArts from "./paletteAndroidArts.mjs";
import paletteLospec from "./paletteLospec.mjs";

const GUI = {

    _cssPrefix: "css",

    _cssRulesLength: 0,

    _svgNS: "http://www.w3.org/2000/svg",
    
    _svgRectQualifiedName: ["x", "y", "width", "height"],
    
    // _barUnit: "█",

    paletteIdx: 0,

    palettes: [paletteAndroidArts, paletteLospec],

    get currPalette()
    {
        return this.palettes[this.paletteIdx];
    },

    svgBarColorIndices: new Uint8Array([9, 10, 4, 0]), // [5, 4, 12, 11]),

    svgBarColors: [],

    container: document.getElementById('container'),

    emoji: gui_emoji,

    // uiController: new AbortController(),
    // const { signal } = this.uiController;
    // .addEventListener('resize', handleResize, { signal });

    _numberToHexColor(num)
    {
        return `#${num.toString(16).padStart(6, '0')}`;
    },

    _assemblePaletteColors()
    {
        this.svgBarColors.length = 0;

        for (const colIdx of this.svgBarColorIndices)
        {
            this.svgBarColors.push(this._numberToHexColor(this.currPalette[colIdx]));
        }
    },

    init(pidx = 1)
    {
        this.paletteIdx = pidx;

        // prepare CSS classes
        this.customCSSClasses();

        // the default colors for the bar sections
        this._assemblePaletteColors();

        // create the body if needed:
        if (!document.body)
        {
            document.body = document.createElement("body");
        }

        document.body.style.setProperty('background-color', '#070404');
        
        // generate the <pre> container, that will become the default NodeElement for text output
        if (!this.container)
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

            this.container = c;

            console.log("Gui initialized");
        }

    },

    makeTextNode(text)
    {
        return document.createTextNode(text);
    },

    makeLineBreak()
    {
        return document.createElement('br');
    },

    makeSpanWithClass(text, cssClass)
    {
        const spanElement = document.createElement('span');

        spanElement.appendChild(this.makeTextNode(text));

        if (cssClass < this._cssRulesLength)
        {
            spanElement.classList.add(`${this._cssPrefix}${cssClass}`);
        }

        return spanElement;
    },

    makeButton()
    {
        const btn = document.createElement('button');

        return btn;
    },

    removeLastLineBreak()
    {
        if (this.container.lastChild.tagName === "BR")
        {
            this.container.removeChild(this.container.lastChild);
        }

        return this;
    },

    clear()
    {
        this.container.replaceChildren();

        return this;
    },

    addBR(amount = 1)
    {
        for (let i = 0; i < amount; i++)
        {
            this.container.appendChild(this.makeLineBreak());
        }

        return this;
    },

    customCSSClasses()
    {
        const myCustomSheet = new CSSStyleSheet();
      
        let i = 0;
      
        for (const elem of this.currPalette)
        {
            myCustomSheet.insertRule(`.${this._cssPrefix}${i++}{color: ${this._numberToHexColor(elem)}}`, myCustomSheet.cssRules.length);
        }

        for (const elem of this.currPalette)
        {
            // myCustomSheet.insertRule(`.${this._cssPrefix}${i++}{background-color: ${this._numberToHexColor(elem)}; padding: 0 1em; color: #000000}`, myCustomSheet.cssRules.length);
            myCustomSheet.insertRule(`.${this._cssPrefix}${i++}{background-color: ${this._numberToHexColor(elem)}; color: #000000}`, myCustomSheet.cssRules.length);
        }
      
        document.adoptedStyleSheets.push(myCustomSheet);

        this._cssRulesLength = myCustomSheet.cssRules.length;
      
        //console.log(this._cssRulesLength);
        
        return this;
    },

    print(...params)
    {
        if (params.length === 0) return;

        for (let i = 0; i < params.length; i++)
        {
            const current = params[i];

            const next = params[i + 1];

            if (typeof next === 'number')
            {
                this.container.appendChild(this.makeSpanWithClass(current, next));

                i+= 1; // Skip the color index on the next iteration
            }
            else
            {
                this.container.appendChild(this.makeTextNode(current));
            }
        }

        return this.addBR();
    },

    //  drawBar(criticalRange, hitThreshold, parryRange, roll)
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
    //         this.print(sec.repeat( Math.round(iterArr[i] * ratio) ), colIndices[i])
    //         .removeLastLineBreak();
    //     }
    //     return this.addBR().print(`${' '.repeat(Math.ceil(roll * ratio ))}▲`);

	// }

    destroy()
    {
        // this.uiController.abort();

        this.container = undefined;
    },

    _testColors()
    {
        this.customCSSClasses();
        for (let i = 0; i < this._cssRulesLength; i++)
        {
            this.print(`[${i.toString().padStart(2, " ")}] --->  `, "Test!", i);
        }
    },

    makeSVG(width = 300, height = 40)
    {
        //const _svgNS = "http://www.w3.org/2000/svg";

        const svg = document.createElementNS(this._svgNS, "svg");

        svg.setAttribute("width", `${width}`);

        svg.setAttribute("height", `${height}`);

        this.container.appendChild(svg);
        
        return svg;
    },


    makeRect(x, y, w, h, cssCol, parent)
    {
        const rect = document.createElementNS(this._svgNS, "rect");

        for (const [prop, value] of Iterator.zip([this._svgRectQualifiedName, [x, y, w, h]]))
        {
            rect.setAttribute(prop, `${value}%`);
        }

        rect.setAttribute("fill", cssCol);
        
        if (parent)
        {
            parent.appendChild(rect);
        }            

        return rect;
    },

    addSVGResultBar(limitsArray, roll, width = 300, height = 40)
    {
        const svg = this.makeSVG(width, height);

        const positions = [0 , ...limitsArray.slice(0, 3)];

        const relativeWidth = limitsArray.map((val, i) => i === 0 ? val : val - limitsArray[i - 1]);

        // const positions = [...limitsArray];
        // positions.reduce((accum, currVal, idx, arr) => (arr[idx] = accum, currVal), 0);

        // const positions = [...limitsArray].copyWithin(1, 0, 3);
        // positions[0] = 0; 

        // const clonedLimits = [...limitsArray];
        // clonedLimits.reduce((ac, cv, i, arr) => (arr[i] -= ac, cv));

        //const colors = ['#a46422', '#493c2b', '#005784', '#1b2632']; //[5, 4, 12, 11]; //['orange', 'aqua', 'red', 'gray']; // [5, 8, 0, 10];

        for (const [x, width, fill] of Iterator.zip([positions, relativeWidth, this.svgBarColors]))
        {
            this.makeRect(x, 25, width, 50, fill, svg);
        }

        if (roll)
        {
            /*const rollMarker = */ this.makeRect(Math.max(roll - 0.5, 0.001), 9, 1, 82, '#67910585', svg);

            //rollMarker.setAttribute("fill-opacity", 0.2);
        }

        return this.addBR();
    }
   
}

export default GUI;
