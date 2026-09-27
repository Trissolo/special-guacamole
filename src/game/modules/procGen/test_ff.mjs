const {ToXY} = Phaser.Math;
console.clear();
const ew = 128;
const eh = 32;
const maxZonesByUser = 22;

class ProcGen
{
    tempVec = Phaser.Math.Vector2();
    neigbors = {u:0, d:0, l:0, r:0};
    decSort = (a, b) => a.y === b.y? a.x > b.x : a.y > b.y;
    getAdjacent = null;
    colors;
    startingCoords = [];
    
    constructor(scene, width = 8, height = 4, seed = 1)
    {
        this.width = width;
        this.height = height;
        this.totalCells = width * height;
        this.lastRowStart = this.totalCells - width;
        
        // Typed Array usad for temporary store the coordinates of the four adjacent coords of the given cell coordinate 
        this.aryAdj = this.totalCells > 0xffff? new Uint32Array(4) : new Uint32Array(16);

        this.map = new Uint8Array(width * height);
        // block to determine 
        {
            const isPowOfTwo = n => (n & (n - 1)) === 0;
            if (isPowOfTwo(width) && isPowOfTwo(height))
            {
                this.xMask = width - 1;
                this.rowMask = ~(width - 1);
            }
        }

        // RND genarator
        this.rnd = Phaser.Math.RND;
        this.rnd.sow(`abc${seed}`);

        // Dynamic Texture
        this.dt = scene.textures.addDynamicTexture('dt', this.width, this.height);
        //this.colors = Phaser.Display.Color.HSVColorWheel();
        
    }

    pickSeeds(wantedQuan)
    {
      	const sizeInPixels = new Array(wantedQuan + 1).fill(0);

        // random starting coords for each zone:
        const seeds = [];
        for (let label = 1; label <= wantedQuan; label++)
        {
            const location = this.rnd.between(0, this.totalCells - 1);
            
            seeds.push(location);
            this.map[location] = label;
            sizeInPixels[label] += 1;
        }

        this.startingCoords.length = 0;
		this.startingCoords.push(0, ...seeds);
        
        while (seeds.length !== 0)
        {
            const i = this.rnd.between(0, seeds.length - 1)
            const gridIdx = seeds[i];
            const zoneId = this.map[gridIdx];

            // now remove the seed we just used
            seeds[i] = seeds[seeds.length - 1];
            seeds.pop();

            // Flood Fill!
            for (const adj of this.getNeighborsBitwise(gridIdx))
            {
                if (this.map[adj] === 0)
                {
                    // set the current zoneId 
                    this.map[adj] = zoneId;
                    seeds.push(adj);

                    // increase the pixel count of this Zone
                    sizeInPixels[zoneId] += 1;

                    // if (zoneId === undefined)
                    // {
                    //     console.log(`zoneId: ${zoneId}, adj: ${adj}, gridIdx: ${gridIdx}, i: ${i}`);
                    // }
                }
            }
        }
		this.sizeInPixels = sizeInPixels;
        console.dir("sizeInPixels", sizeInPixels, "StartingCoords", this.startingCoords);
        return seeds;
    }

pickColors(wantedColors = 250)
{
  // One of my favorite ways to pick colors is to draw a circle on
  // YIQ space <http://en.wikipedia.org/wiki/YIQ>. Set the radius to
  // be larger to get more saturated colors. Set Y to be larger to
  // get brighter colors.
  var colors = [0]; // background color
  for (var k = 0; k < wantedColors; k++) {
  var angle = 2 * Math.PI * k / wantedColors;
  var radius = 0.05 + 0.05 * Math.cos(angle * 17);
  var Y = 0.7 + 0.2 * Math.cos(angle * 13);
  var I = radius * Math.cos(angle);
  var Q = radius * Math.sin(angle);
  var r = Y + 0.948262*I + 0.624013*Q;
  var g = Y - 0.276066*I - 0.639810*Q;
  var b = Y - 1.105450*I + 1.729860*Q;
  colors.push(Phaser.Display.Color.GetColor(Math.max(0, Math.min(255, (255 * r) | 0)),
  Math.max(0, Math.min(255, (255 * g) | 0)),
  Math.max(0, Math.min(255, (255 * b) | 0))));
  }
  return colors;
}
    substitute(gridIdx, oldId, newId)
    {
        for (const adj of this.getNeighborsBitwise(gridIdx))
        {
            if (this.map[adj] === oldId)
            {
                this.map[adj] = newId;
                this.substitute(adj, oldId, newId);
            }
        }
        console.log(`Old zone ${oldId} has been replaced by ${newId}`);
    }

    toXY(val)
    {
        return ToXY(val, this.width, this.height, this.tempVec);
    }

    rle(other)
    {
        const {map, width} = this;
        const res = [];
        for (let ourPixel = 0, y = 0; ourPixel < map.length; ourPixel += width)
        {
            const row = map.subarray(ourPixel, ourPixel + width)
                const chunks = [];
                if (row.length === 0) {continue}
                let start = 0;
                for (let i = 1; i <= row.length; i++)
                {
                    if (i === row.length || row[i] !== row[start])
                    {
                        const data = {
                            v: row[start],
                            start,
                            end: i - 1
                        };

                        chunks.push(data);

                        if (!other[data.v])
                        {
                            other[data.v] = [];
                        }
                        other[data.v].push({y, start: data.start, end: data.end});

                        start = i;
                    }
                }
                res.push(chunks);
                y += 1;
            }
        return res;
    }

    // Move Left: If on left edge, wrap to right side of same row; else step left (-1)
    getLeft(i)
    {
        return (i % this.width === 0) ? (i + this.width - 1) : (i - 1);
    }

    // Move Right: If on right edge, wrap to left side of same row; else step right (+1)
    getRight(i)
    {
        return (i % this.width === this.width - 1) ? (i - this.width + 1) : (i + 1);
    }

    // Move Up: If on top edge, wrap to bottom column; else step up (-640)
    getUp(i)
    {
        return (i < this.width) ? (i + this.lastRowStart) : (i - this.width);
    }
    // Move Down: If on bottom edge, wrap to top column; else step down (+640)
    getDown(i)
    {
        return (i >= this.lastRowStart) ? (i - this.lastRowStart) : (i + this.width);
    }

    // for powof2
    getNeighborsBitwise(i)
    {
      const rowStart = i & this.rowMask;
        // Vertical wrapping (using total cells mask if total is also power of 2)
		const adiacenti = [
        // North
        /*this.aryAdj[0] =*/ (i - this.width + this.totalCells) & (this.totalCells - 1),

        // South
        /*this.aryAdj[1] =*/ (i + this.width) & (this.totalCells - 1),
        // Clears the X coordinate to find row start
        // Horizontal wrapping inside the current row
        

        // East
        /*this.aryAdj[2] =*/ rowStart + ((i + 1) & this.xMask),

        // West
        /*this.aryAdj[3] =*/ rowStart + ((i - 1) & this.xMask)];
        
        return adiacenti; //this.aryAdj;
    }

    buildRegionGraph()
    {
        const {map} = this;
        const graph = new Map();
        const mapsize = map.length;
        // 1. Initialize empty lists for every unique region label found on the map
        for (let i = 0; i < mapsize; i++)
        {
            const label = map[i];
            if (label !== 0 && !graph.has(label))
            {
                graph.set(label, new Set());
                // Using a Set to automatically prevent duplica
            }
        }
        // 2. Scan the map and link adjacent regions
        for (let location = 0; location < mapsize; location++)
        {
            const currentLabel = map[location];
            // Skip empty unassigned cells
            if (currentLabel === 0) continue;
            // Check right and down neighbors (this handles all links without duplicating wo
            const [north, south, east, west] = this.getNeighborsBitwise(location)
            const rightLabel = map[east];
            const downLabel = map[south];

            // Connect with the right neighbor if it's a different region
            if (rightLabel !== 0 && rightLabel !== currentLabel)
            {
                graph.get(currentLabel).add(rightLabel);
                graph.get(rightLabel).add(currentLabel);
                // Undirected link
            }
            // Connect with the bottom neighbor if it's a different region
            if (downLabel !== 0 && downLabel !== currentLabel)
            {
                graph.get(currentLabel).add(downLabel);
                graph.get(downLabel).add(currentLabel);
                // Undirected link
            }
        }
        // 3. Optional: Convert Sets to normal Arrays for cleaner reading/usage
        const finalGraph = {};
        for (let [region, neighborSet] of graph.entries())
        {
            finalGraph[region] = Array.from(neighborSet);
        }
        return finalGraph;
    }

/*
getNeighborRegions(targetLabel, size, map)
{
    const neighbors = new Set();
    const mapsize = map.length;
    // Loop through the entire 1D map array
    for (let location = 0; location < mapsize; location++)
    {
        // Find cells that belong to our target region
        if (map[location] === targetLabel)
        { // Calculate the 4-way neighbor positions (with wrap-around)
            const up = (location - size + mapsize) % mapsize;
            const down = (location + size) % mapsize;
            const left = (location - 1 + mapsize) % mapsize;
            const right = (location + 1) % mapsize;
            const checkDirections = [up, down, left, right]; // Check the label of each neighbor cell
            for (let nextLoc of checkDirections)
            {
                const neighborLabel = map[nextLoc];
                // If it's a different region and not empty (0), record it
                if (neighborLabel !== targetLabel && neighborLabel !== 0)
                {
                    neighbors.add(neighborLabel);
                }
            }
        }
    }
    // Convert the Set back to a normal array of region IDs
    return Array.from(neighbors);
}
*/

} // End Class

class TestScene extends Phaser.Scene
{
  userClick = new Phaser.Math.Vector2();

  lastSelected = null;

  constructor ()
  {
    super({ key: 'TestScene' });
  }


  create()
  {
    const gag = new ProcGen(this, ew, eh, 2);
    this.gag = gag;
    
    const regionAmount = maxZonesByUser;
    gag.colors = gag.pickColors(regionAmount)
    gag.pickSeeds(regionAmount);
    
    const regions = gag.buildRegionGraph();
    
    console.dir("regions", regions);
    
    
    this.add.image(0, 0, 'dt').setOrigin(0).setInteractive().on('pointerdown', this.click);
    
    const o = [];
    const rle = gag.rle(o);
    
    // let x = 0, y = 0;
    let i =  0;
    for (const elem of o)
    {
      
      if (elem && elem.length)
      {
          for (const {y, start, end} of elem)
          {
            gag.dt.fill(gag.colors[i], 1, start, y, end-start+1, 1);
            //gag.dt.fill(0, 1, end, y, 1, 1);
          }
      }
      i+=1;
      //console.log(`x: ${x}, y: ${y}, ${elem}`);
//       if (elem !== 0)
//       {
//           gag.dt.fill(gag.colors[elem], 1, x, y, 1, 1);
          
//       }
//       x++;
//           if (x === gag.width)
//           {
//               x = 0;
//               y+=1;
//           }
    }
    
    gag.dt.render();
  }
  
  click(pointer, rx, ry)
  {
      const {gag, lastSelected, userClick} = this.scene;
      const {map, dt} = gag;
    
      ({x:rx, y:ry} = userClick.setTo(rx, ry).floor());
    
      const zoneId = map[rx + ry * gag.width];
    
      const confini = gag.buildRegionGraph()
      console.log(`zoneId: ${zoneId} at {x: ${rx}, y: ${ry}}`);
      for (let z = 0; z < map.length; z++)
      {
          if (lastSelected == map[z])
          {
          		const {x, y} = gag.toXY(z);
            dt.fill(gag.colors[lastSelected], 1, x, y, 1, 1);
          }
          if (map[z] === zoneId)
          {
			const {x, y} = gag.toXY(z);
            dt.fill(0xffffba, 1, x, y, 1, 1);
          }
      }
      dt.render();
      this.scene.lastSelected = zoneId;
    
  }
  
} // end TestScene
    
const config = {
    type: Phaser.WEBGL,
    parent: "gameContainer",
    pixelArt: true,
    backgroundColor: '#320822',
    scale: {
        mode: Phaser.Scale.NONE,
        //autoCenter: Phaser.Scale.CENTER_BOTH,
        width: ew,
        height: eh,
        zoom: 5
    },
    //loader: {
    //  baseURL: 'https://labs.phaser.io/',
    //  baseURL: 'https://i.ibb.co/YhGPn4S',
    //  crossOrigin: 'anonymous'
    //},
    scene: TestScene
};

window.game = new Phaser.Game(config);
