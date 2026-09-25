import { oppositesEnum, dirsEnum, candidateNeighbors } from "./const.mjs";
import Phaser from "phaser";
import Maze from "./Maze.mjs";

export default class MazeManager
{
    dt;

    size = 0;

    rnd; // = Phaser.Math.RND;

    debugVec = new Phaser.Math.Vector2();

    /**
     * 
     * @param {Phaser.Scene} scene 
     * @param {number} size
     * 
     */

    constructor(scene, size = 4)
    {
        this.dt = scene.textures.addDynamicTexture('dt', 128, 128);

        this.size = size;

        this.rnd = Phaser.Math.RND;
    }

    /**
     * 
     * @param {Maze} maze 
     * @param {number} biasHor 
     * @param {number} biasVer 
     * @param {number} seed 
     */

    buildBinaryTree(maze, biasHor = 1, biasVer = 4, seed = 0, from = 0)
    {
        this.rnd.sow(`abc${seed}`);
        let idxVer, idxHor;
        const {grid} = maze;
        const candidates = [];
        const recyHor = [null, biasHor];
        const recyVer = [null, biasVer];

        for (let cell = from, len = maze.grid.length; cell < len; cell++)
        {
            candidates.length = 0;

            idxHor = maze[biasHor](cell);
            idxVer = maze[biasVer](cell);

            if (idxHor !== null)
            {
                recyHor[0] = idxHor;

                candidates.push(recyHor);
            }
            if (idxVer !== null)
            {
                recyVer[0] = idxVer;
                
                candidates.push(recyVer);
            }

            // console.log(cell, JSON.stringify(candidates));

            if (candidates.length !== 0)
            {
                const [adj, dir] = this.rnd.pick(candidates);

                // Carve the wall on the current cell
                grid[cell] &= ~dir;
                
                // Carve the corresponding opposite wall on the neighbor cell
                grid[adj] &= ~oppositesEnum.get(dir);
            }
        }

        return maze;
    }

    renderMaze(maze, color = 0x658743, glPadX = 0, glPadY = 0, clearAll = false)
    {
        const {dt, size} = this;
        const {grid, width, height} = maze;

        const { LEFT, RIGHT, UP, DOWN } = dirsEnum;
        if (clearAll)
        {
            dt.clear().fill(0xffa5a5);
        }

        let x = 0;
        let y = 0;

        for (const elem of grid)
        {
            let rx = x * size + glPadX;

            let ry = y * size + glPadY;

            const pezspa = size - 1;


            if ((elem & UP) !== 0)
            {
                dt.fill(color, 1, rx, ry, size + 1, 1);
            }


            if ((elem & LEFT) !== 0)
            {
                dt.fill(color, 1, rx, ry, 1, size + 1);
            }


            if (++x === width)
            {
                x = 0;
                y++;
            }
        }

        dt.fill(color, 1, glPadX + 0, glPadY + size * height, size * width, 1);

        dt.fill(color, 1, glPadX + size * width, glPadY + 0, 1,  size * height + 1);

        dt.render();
    }

    debugDrawCell(cell, maze, color = 0x43dada, alpha = 1, immediatlyRender = true)
    {

        if (typeof cell === 'number')
        {
            const {size} = this;

            const {x, y} = Phaser.Math.ToXY(cell, maze.width, maze.height, this.debugVec);

            this.dt.fill(color, alpha, x * size, y * size, size, size);

            if (immediatlyRender)
            {
                this.dt.render();
            }

            return `Cell: ${cell.toString().padStart(2, " ")} {x: ${x}, y: ${y}}`;

        }
        else
        {
            return `Cell: null`;
        }
    }

    debugMazeInfo(maze, sep = '  ')
    {
        const res = [];

        const {width, tot} = maze;
  
        for (let i = 0, x = 0; i < tot; i++)
        {
            if (x === width)
            {
                x = 0;

                res.push('\n\n');
            }

            res.push(`${i.toString().padStart(2, " ")}${sep}`);

            x++;
        }

        console.log(`DebugMaze:\nwidth: ${width}, height: ${maze.height}, tot: ${tot}\n\n${res.join('')}`);

        console.log();

    }

    suboptimalGetExistingNeighbors(cell, maze, res = [])
    {
        res.length = 0;

        if (cell !== null)
        {

            for (let dir = 1, neighbor; dir < 9; dir <<= 1)
            {
                neighbor = maze[dir](cell);

                if (neighbor !== null)
                {
                    res.push(neighbor);
                }

            }
        }

        return res;
    }

    suboptimalDebugNeighbors(cell, maze, res = [])
    {
        //const nei = this.suboptimalGetExistingNeighbors(cell, maze, res);
        res.length = 0;

        if (cell === null)
        {
            return res;
        }

        res.push(`🫂 ${cell.toString().padStart(2, ' ')}:`);

        for (const prop in dirsEnum)
        {
            const nei = maze[dirsEnum[prop]](cell);
            // console.log(prop, dirsEnum[prop]);
            if (typeof nei === 'number')
            {
                res.push(`${prop}: ${nei}`);
            }
        }

        return res.join('\n')

    }

    *floodFillInt(maze, from = 0, zoneId = 1, zoneToRemove = 0, filledCellsAmount = maze.tot)
    {
        const ffAry = new Uint8Array(maze.grid.length).fill(0);

        const frontier = [];

        if (!Array.isArray(from))
        {
            from = [from]
        }

        for (const elem of from)
        {
            ffAry[elem] = zoneId;
            frontier.push(elem);

        }


        console.log(`FloodFill (from: ${from} [${zoneId}])`);

        let control = 0;

        const {size, dt} = this;
        
        orcus: while(frontier.length !== 0)
        {
            const curr = frontier.shift();

            Phaser.Math.ToXY(curr, maze.width, maze.height, this.debugVec);

            console.log(`📦 ${curr} at {x: ${this.debugVec.x}, y: ${this.debugVec.y}`);

            for (let dir = 1; dir < 9; dir <<= 1)
            {
                const temp = maze[dir](curr);
                {
                    if (temp !== null && ffAry[temp] === zoneToRemove)
                    {
                        
                        if (++control >= filledCellsAmount)
                        {
                            console.log(`%c Breaking ORCUS because filledCellsAmount (${control}/${filledCellsAmount}) `, "background-color: #555;");

                            break orcus;
                        }

                        frontier.push(temp);
                        
                        ffAry[temp] = zoneId;

                        yield console.log(this.debugDrawCell(temp, maze, 0x00baba, 0.8));
                        
                    }
                }
            }

        }

        console.log("Done", ffAry, control);

        for (let i = 0; i < ffAry.length; i++)
        {
            if (ffAry[i] !== 0)
            {
                // this.debugDrawCell(i, maze, (ffAry[i] + 1) << 6 , 1, true);
                this.debugDrawCell(i, maze, 0xfafafa, 1, false);
            }
        }

        yield dt.render();

    }

    scaleMaze(orig)
    {
        const res = new Maze(orig.width << 1, orig.height << 1);
        res.grid.fill(0);
        const {width: targetRow, grid: targetGrid} = res;
        console.log(targetRow);

        // this.debugMazeInfo(orig);

        this.debugMazeInfo(res);
        let curr, tl, tr, bl, br;

        for (let i = 0, len = orig.tot, x = 0, y = 0, row = 0; i < len; i++)
        {
            
            curr = orig.grid[i];
            tl = (i << 1) + row;
            tr = tl + 1;
            bl = tl + targetRow;
            br = bl + 1;

            console.log(`${i} [${tl} ${tr}]\n   [${bl}, ${br}]`);
            // console.log(`${i}, ${curr & dirsEnum.LEFT}, ${curr & dirsEnum.UP}, ${curr & dirsEnum.RIGHT}, ${curr & dirsEnum.DOWN}`);
            if ((curr & dirsEnum.LEFT) !== 0)
            {
                targetGrid[tl] |= (curr & dirsEnum.LEFT);
                targetGrid[bl] |= (curr & dirsEnum.LEFT);
            }
            if ((curr & dirsEnum.UP) !== 0)
            {
                targetGrid[tl] |= (curr & dirsEnum.UP);
                targetGrid[tr] |= (curr & dirsEnum.UP);
            }
            if ((curr & dirsEnum.RIGHT) !== 0)
            {
                targetGrid[tr] |= (curr & dirsEnum.RIGHT);
                targetGrid[br] |= (curr & dirsEnum.RIGHT);
            }
            if ((curr & dirsEnum.DOWN) !== 0)
            {
                targetGrid[bl] |= (curr & dirsEnum.DOWN);
                targetGrid[br] |= (curr & dirsEnum.DOWN);
            }

            if (++x === orig.width)
            {
                x = 0;
                y++;
                row += targetRow;
            }

        }



        return res;
    }

    /**
     * 
     * @param {Maze} maze 
     * @param {number} startingCell
     * @param {number} [seed = 0]
     */

    buildRecursiveBacktracker(maze, startingCell, seed = 0)
    {
        this.rnd.sow(`abc${seed}`);
        
        const visited = new Uint8Array(maze.tot);

        const {grid} = maze;
        
        let current = typeof startingCell === "number"? startingCell: this.rnd.integerInRange(0, grid.length - 1);
        
        const stack = [current];

        visited[current] = 1;

        const potential = [];

        while(stack.length !== 0)
        {
            const next = this.recursiveGetNeighbor(current, maze, visited, potential);
            if (next !== null)
            {
                current = next;
                stack.push(current);
            }
            else
            {
                current = stack.pop();
            }
        }

        return maze;

    }

    /**
     * 
     * @param {number | null} cellIdx 
     * @param {Maze} maze 
     * @param {Uint8Array} visited 
     * @param {Array} potential 
     */
    recursiveGetNeighbor(cellIdx, maze, visited, potential)
    {
        potential.length = 0;

        //for (let dir = 1, adjacentIdx; dir < 9; dir <<= 1)
        // {dir, opposite, adjacentIdx: null}
        for (const elem of candidateNeighbors)
        {
            console.log("elem.dir", elem.dir, "maze:", maze)
            const adjacentIdx = maze[elem.dir](cellIdx);

            if (adjacentIdx !== null && visited[adjacentIdx] === 0)
            {
                elem.adjacentIdx = adjacentIdx;

                potential.push(elem);
            }
        }

        if (potential.length !== 0)
        {
            const {dir, opposite, adjacentIdx} = this.rnd.pick(potential);
            maze.grid[cellIdx] &= ~dir;
            maze.grid[adjacentIdx] &= ~opposite;
            visited[adjacentIdx] = 1;
            return adjacentIdx;
        }
        return null;
    }

}
