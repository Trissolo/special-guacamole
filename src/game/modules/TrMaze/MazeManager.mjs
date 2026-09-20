import { oppositesEnum, dirsEnum } from "./const.mjs";
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
     */

    constructor(scene, size = 4)
    {
        this.dt = scene.textures.addDynamicTexture('dt', 128, 128);

        this.size = size;

        this.rnd = Phaser.Math.RND;
    }

    /**
     * 
     * @param {*} maze 
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

            res.push(i < 10 ?  ` ${i}${sep}`: `${i}${sep}`);

            x++;
        }

        console.log(`DebugMaze:\nwidth: ${width}, height: ${maze.height}, tot: ${tot}\n\n${res.join('')}`);

        console.log();

    }

    *floodFillInt(maze, from = 0, zoneId = 1, zoneToRemove = 0, filledCellsAmount = maze.tot)
    {
        const ffAry = new Uint8Array(maze.grid.length).fill(0);

        const frontier = [from];

        ffAry[from] = zoneId;

        console.log(`FloodFill\n`)

        let control = 0;

        const {size, dt} = this;
        
        orcus: while(frontier.length !== 0)
        {
            const curr = frontier.shift();

            Phaser.Math.ToXY(curr, maze.width, maze.height, this.debugVec);

            console.log(`📦 ${curr} at {x: ${this.debugVec.x}, y: ${this.debugVec.y}`);

            for (let dir = 1, temp; dir < 9; dir <<= 1)
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
                this.debugDrawCell(i, maze, 0xfafafa, 1, false);
            }
        }

        yield dt.render();

    }
}
