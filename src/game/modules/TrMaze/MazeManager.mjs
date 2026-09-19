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
}
