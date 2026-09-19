import { oppositesEnum, dirsEnum } from "./const.mjs";
import Phaser from "phaser";
import Maze from "./Maze.mjs";

export default class MazeManager
{
    dt;

    size = 0;

    rnd; // = Phaser.Math.RND;

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

            // console.log(elem, (elem & LEFT) !== 0, (elem & RIGHT) !== 0, (elem & UP) !== 0, (elem & DOWN) !== 0);
            // if (threeWalls.has(elem))
            // {
            //     //  dt.fill(0xf7e29b, 1, rx + 1, ry + 1, pezspa, pezspa);
            //     dt.fill(0xf7e29b, 1, rx + 2, ry + 2, 1, 1);
            //     // color = 0x3278bd;
            // }
            // else if (oneWall.has(elem))
            // {
            //     // dt.fill(0x456799, 1, rx + 1, ry + 1, pezspa, pezspa);
            //     dt.fill(0x456799, 1, rx + 2, ry + 2, 1, 1);
            // }

            // color = PhaserMath.Between(0x454545, 0xffffff);

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

    *floodFillInt(maze, from = 0, amount = 1)
    {
        const ffAry = new Uint8Array(maze.grid.length).fill(0);
        const frontier = [from];
        ffAry[from] = 1;
        let control = 0;
        const {size} = this;
        
        const debugVec = new Phaser.Math.Vector2();
        
        const {dt} = this;
        
        orcus: while(frontier.length !== 0)// && control < amount)
        {
            const curr = frontier.shift();

            // debug render
            

            // if (control++ >= amount)
            // {
            //     console.log("%c Breaking 'ORCUS' because amount ", "background-color: #555;");
            //     break orcus;
            // }

            console.log(`GRABBED:, ${curr}`); //{x: ${x}, y: ${y}}`);

            for (let dir = 1, temp; dir < 9; dir <<= 1)
            {
                const temp = maze[dir](curr);
                {
                    if (temp !== null && ffAry[temp] === 0)
                    {
                        
                        if (++control >= amount)
                        {
                            console.log("%c Breaking ORCUS because amount ", "background-color: #555;");
                            break orcus;
                        }


                        frontier.push(temp);
                        
                        ffAry[temp] = 1;

                        const {x, y} = Phaser.Math.ToXY(temp, maze.width, maze.height, debugVec);
                        dt.fill(Phaser.Math.Between(0xffff00, 0xffffff), 0.9, x * size, y * size, size, size);
                        yield dt.render();
                        // end debug
                        
                        

                        console.log(`Storing: ${temp}, ${JSON.stringify(Phaser.Math.ToXY(temp, maze.width, maze.height, debugVec))}, control: ${control}/${amount}`);
                        
                    }
                }
            }
            console.log("---");

        }


        console.log("Done", ffAry, control);

        // const {size} = this;

        for (let i = 0; i < ffAry.length; i++)
        {
            if (ffAry[i] !== 0)
            {
                const {x, y} = Phaser.Math.ToXY(i, maze.width, maze.height, debugVec);

                dt.fill(0xfafafa, 1, x * size, y * size, size, size);
            }
        }

        yield dt.render();

    }
}
