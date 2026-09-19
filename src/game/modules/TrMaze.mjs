import {Math as PhaserMath} from 'phaser';

import Maze from './MazeClass.mjs';

import { oneWall, dirVal, threeWalls, allWalls, opposites } from './mazeConsts.mjs';

export default class TrMaze
{
    rnd = PhaserMath.RND;

    dt = null;
    
    size = 4;

    // recycled stuff:
    stack = [];

    neighbors = [];

    // helper
    directions = [
        ["Up", dirVal.TOP, dirVal.BOTTOM, null],
        ["Right", dirVal.RIGHT, dirVal.LEFT, null],
        ["Down", dirVal.BOTTOM, dirVal.TOP, null],
        ["Left", dirVal.LEFT, dirVal.RIGHT, null]
    ];

    constructor(scene)
    {
        console.log('TrMaze!');

        this.dt = scene.textures.addDynamicTexture('dt');
    }

    recursiveBacktracker(width, height, seed)
    {
        const newMaze = new Maze(width, height);

        this.rnd.sow(`abc${seed}`);

        this.dt.setSize(width * this.size + 1, height * this.size + 1, true);

        // console.log("DT!", this.dt);
        this.visited = new Uint8Array(newMaze.tot);

        return this.buildRecursiveBacktracker(newMaze);
    }

    buildRecursiveBacktracker(maze) // , useForced = false)
    {
        const {stack, visited} = this;
        const {grid} = maze;

        let forcedStart = null;

        // if (useForced)
        // {
        //     forcedStart = this.forced(maze, visited);
        // }

        // let current = forcedStart !== null? forcedStart: this.rnd.integerInRange(0, grid.length - 1);
        let current = this.rnd.integerInRange(0, grid.length - 1);

        visited[current] = 1;

        stack.length = 0;

        stack.push(current);

        while (stack.length !== 0)
        {
            // console.log(`stack: ${JSON.stringify(stack)}, ${stack.length}`);

            const next = this.getNeighbors(current, maze);
          
            if (next !== null)
            {
                current = next;

                stack.push(current);
            }
            else
            {
                current = stack.pop();
            }

        }  // end while
        
        console.log("Maze done!", grid);

        this.showMaze(maze);

        return maze;


    }  // end buildRecursiveBacktracker

    getNeighbors(cellIdx, maze)
    {
        const {neighbors, visited} = this;
        const {grid} = maze;

        neighbors.length = 0;

        //for (const [f, curMod, adjMod] of this.directions)
        for (const candidateDirection of this.directions)
        {
            const adjacentIdx = maze[`get${candidateDirection[0]}`](cellIdx);
            // console.log(`adjacent: ${adjacentIdx}`);
          	
            if (adjacentIdx !== null && visited[adjacentIdx] === 0)
            {
                neighbors.push(candidateDirection);
                
                candidateDirection[3] = adjacentIdx;
            }
        }

        if (neighbors.length !== 0)
        {
            const [_, curMod, adjMod, adjacentIdx] = this.rnd.pick(neighbors);

            grid[cellIdx] &= ~curMod;

            grid[adjacentIdx] &= ~adjMod;

            visited[adjacentIdx] = 1;

            // 
            return adjacentIdx;
        }

        return null;
    }  // end getNeghbors

    // buildRecursiveBacktracker(maze) //, useForced = false)
    // {
    //     const {stack, visited} = this;
    //     const {grid} = maze;

    //     // let forcedStart = null;

    //     // if (useForced)
    //     // {
    //     //     forcedStart = this.forced(maze, visited);
    //     // }

    //     let current = this.rnd.integerInRange(0, grid.length - 1);

    //     visited[current] = 1;

    //     stack.length = 0;

    //     stack.push(current);

    //     while (stack.length !== 0)
    //     {
    //         // console.log(`stack: ${JSON.stringify(stack)}, ${stack.length}`);

    //         const next = this.getNeighbors(current, maze);
          
    //         if (next !== null)
    //         {
    //             current = next;

    //             stack.push(current);
    //         }
    //         else
    //         {
    //             current = stack.pop();
    //         }

    //     }  // end while
        
    //     console.log("Maze done!", grid);

    //     this.showMaze(maze);

    //     return maze;


    // }  // end buildRecursiveBacktracker

    // getNeighbors(cellIdx, maze)
    // {
    //     const {neighbors, visited} = this;
    //     const {grid} = maze;

    //     neighbors.length = 0;

    //     //for (const [f, curMod, adjMod] of this.directions)
    //     for (const candidateDirection of this.directions)
    //     {
    //         const adjacentIdx = maze[`get${candidateDirection[0]}`](cellIdx);
    //         console.log(`💩 adjacent: ${adjacentIdx}, ${candidateDirection[0]}`);
          	
    //         if (adjacentIdx !== null && visited[adjacentIdx] === 0)
    //         {
    //             neighbors.push(candidateDirection);
                
    //             candidateDirection[3] = adjacentIdx;
    //         }
    //     }

         

    //     if (neighbors.length === 0)
    //     {
    //         return null;
    //     }

    //     let res = null;

    //     console.log(`🌊 ${JSON.stringify(neighbors)}`);

    //     for (let i = 0; i < 1; i++) // Math.min(2, neighbors.length); i++)
    //     {
    //         const uffa = this.rnd.pick(neighbors);
    //         const [_, curMod, adjMod, adjacentIdx] = uffa; //this.rnd.pick(neighbors);

    //         //console.log(`🌊 neighbors.length: ${neighbors.length}, ${JSON.stringify(uffa)}`);
            

    //         grid[cellIdx] &= ~curMod;

    //         grid[adjacentIdx] &= ~adjMod;

    //         visited[adjacentIdx] = 1;

    //         if (i === 0)
    //         {
    //             res = adjacentIdx;
    //         }
    //         else
    //         {
    //             this.stack.push(adjacentIdx);
    //         }
    //         console.log(`neighbors: ${neighbors.length}, cellIdx: ${cellIdx}, i: ${i}, adjacentIdx: ${adjacentIdx}, dir: ${_}`);
    //     }

        
    //         // const rrr = this.rnd.frac();
    //         // console.log("RRR", rrr, rrr > 0.5)
    //         // if( rrr < 0.5 && neighbors.length > 2)
    //         // {
    //         //     for (const [_, curMod, adjMod, adjacentIdx] of neighbors)
    //         //     {
    //         //         grid[cellIdx] &= ~curMod;

    //         //         grid[adjacentIdx] &= ~adjMod;

    //         //         visited[adjacentIdx] = 1;

    //         //         this.stack.push(adjacentIdx);
    //         //     }

    //         //     return this.stack[this.stack.length - 1];
    //         // }
    //         // console.log(neighbors.length);

    //     // uff test

    //     // for (const [_, curMod, adjMod, adjacentIdx] of neighbors)
    //     // {
    //     //     if (this.rnd.frac() < 0.99) {continue;}

    //     //     grid[cellIdx] &= ~curMod;

    //     //     grid[adjacentIdx] &= ~adjMod;

    //     //     visited[adjacentIdx] = 1;

    //     //     //res = adjacentIdx
    //     // }

    //         // 
    //     return res;

    // }  // end getNeghbors

    showMaze(maze, color = 0x232323)
    {
        const {dt, size} = this;
        const {grid, width, height} = maze;

        const { LEFT, RIGHT, TOP, BOTTOM } = dirVal;

        dt.clear().fill(0xa5a5a5, 1, 0, 0, dt.width - 1, dt.height - 1);

        let x = 0;
        let y = 0;

        for (const elem of grid)
        {
            let rx = x * size;

            let ry = y * size;

            // console.log(x, y, rx, ry);

            const pezspa = size - 1;

            // console.log((elem & LEFT) !== 0, (elem & RIGHT) !== 0, (elem & TOP) !== 0, (elem & BOTTOM) !== 0);
            if (threeWalls.has(elem))
            {
                //  dt.fill(0xf7e29b, 1, rx + 1, ry + 1, pezspa, pezspa);
                dt.fill(0xf7e29b, 1, rx + 2, ry + 2, 1, 1);
                // color = 0x3278bd;
            }
            else if (oneWall.has(elem))
            {
                // dt.fill(0x456799, 1, rx + 1, ry + 1, pezspa, pezspa);
                dt.fill(0x456799, 1, rx + 2, ry + 2, 1, 1);
            }

            // color = PhaserMath.Between(0x454545, 0xffffff);

            if ((elem & TOP) !== 0)
            {
                dt.fill(color, 1, rx, ry, size + 1, 1);
            }

            // if ((elem & BOTTOM) !== 0)
            // {
            //     dt.fill(color, 1, rx, ry + pezspa, size, 1);
            // }

            if ((elem & LEFT) !== 0)
            {
                dt.fill(color, 1, rx, ry, 1, size + 1);
            }

            // if ((elem & RIGHT) !== 0)
            // {
            //     dt.fill(color, 1, rx + pezspa, ry, 1, size);
            // }

            // console.log(x);

            if (++x === width)
            {
                x = 0;
                y++;
            }
        }

        dt.fill(color, 1, 0, this.size * height, size * width, 1);

        dt.fill(color, 1, size * width, 0, 1,  size * height + 1);

        dt.render();
    }
    hardcoded()
    {
        const test = new Maze(8, 9);
        test.grid = new Int8Array([5, 4, 4, 0, 0, 6, 21, 6, 9, 0, 0, 0, 0, 2, 1, 2, 4, 0, 0, 0, 0, 0, 0, 2, 0, 0, 8, 8, 8, 8, 8, 2, 1, 2, 5, 4, 4, 6, 5, 2, 1, 2, 1, 0, 0, 2, 9, 10, 1, 0, 0, 0, 0, 0, 4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 9, 8, 8, 8, 0, 0, 8, 10]);
        //([5, 4, 6, 1, 2, 5, 4, 6, 9, 0, 0, 0, 0, 0, 0, 10, 6, 1, 8, 0, 0, 8, 2, 5, 10, 3, 5, 0, 0, 6, 3, 9, 13, 2, 1, 0, 0, 2, 1, 14, 6, 3, 9, 0, 0, 10, 3, 5, 10, 1, 4, 0, 0, 4, 2, 9, 5, 0, 8, 0, 0, 8, 0, 6, 9, 10, 7, 9, 10, 7, 9, 10]);
        // this.width = 8;
        // this.height = 9;
        // this.tot = this.width * this.height;
        // this.lastCol = this.width - 1;
        // this.lastRowStart = this.tot - this.width;
        const size = 4;
        this.dt.setSize(test.width * size + 1, test.height * size + 1, true);
        this.showMaze(test, 0x99dd99);
    }

    forced(maze, visited)
    {
        console.log(`Forced: maze w: ${maze.width}, maze h: ${maze.height}`);
        const room = [ 7, 7, 9, 10, 1, 11 ];
        let ri = 0;
        maze.grid.fill(15);
        visited.fill(0);
        for (let y = 0; y < 3; y++)
        {
            for (let x = 0; x < 2; x++)
            {
                const currCell = x + y * maze.width;
                console.log(`currCell: ${currCell}, val: ${room[ri]}, vis: ${visited[currCell]}`)
                maze.grid[currCell] = room[ri++];
                visited[currCell] = 1;
            }
        }

        const newSta = 1 + maze.width * 1;//(maze.height - 2);
        maze.grid[newSta] = 10;


        return newSta;

    }


    generateBinaryTreeMaze(maze, bias, resetMaze = true)
    {
        // 1. Map the biases to their respective two valid directions
        const biasMap = {
            'NE': [dirVal.TOP, dirVal.RIGHT],
            'NW': [dirVal.TOP, dirVal.LEFT],
            'SE': [dirVal.BOTTOM, dirVal.RIGHT],
            'SW': [dirVal.BOTTOM, dirVal.LEFT]
        };

        const directions = biasMap[bias.toUpperCase()];
        if (!directions) {
            throw new Error("Invalid bias. Choose from 'NE', 'NW', 'SE', 'SW'.");
        }


        // Helper to get the neighbor index using the Maze class methods
        function getNeighbor(cellIndex, dir) {
            if (dir === dirVal.LEFT) return maze.getLeft(cellIndex);
            if (dir === dirVal.RIGHT) return maze.getRight(cellIndex);
            if (dir === dirVal.TOP) return maze.getUp(cellIndex);
            if (dir === dirVal.BOTTOM) return maze.getDown(cellIndex);
            return null;
        }

        // Reset grid to all walls intact before carving
        if (resetMaze)
        {
            maze.grid.fill(15);
        }

        // 2. Loop through every cell in the grid
        for (let i = 0; i < maze.tot; i++)
        {
            // Filter choices to only keep directions that lead to a valid neighbor (inside grid boundaries)
            const validChoices = directions.filter(dir => getNeighbor(i, dir) !== null);
            console.log(`i: ${i}, directions: ${directions}, filtered: ${validChoices}`);

            // If there are valid moves, pick one at random
            // ([SMALL ADDITION: '&& (i & 1)'] ...provided it's an odd-numbered cell)
            if (validChoices.length !== 0 && (i & 1))
            {
                const chosenDir = this.rnd.pick(validChoices); //validChoices[Math.floor(Math.random() * validChoices.length)];
                const neighborIndex = getNeighbor(i, chosenDir);
                console.log(`chosenDir: ${chosenDir}`);

                // Carve the wall on the current cell
                maze.grid[i] &= ~chosenDir;
                
                // Carve the corresponding opposite wall on the neighbor cell
                maze.grid[neighborIndex] &= ~opposites.get(chosenDir);

                // // second carve:
                // const prob = this.rnd.frac();
                // console.log(`prob: ${prob} [${prob < 0.1}]`);
                // if (prob < 0.1)
                // {
                //     const chosenDir = this.rnd.pick(validChoices); //validChoices[Math.floor(Math.random() * validChoices.length)];
                //     const neighborIndex = getNeighbor(i, chosenDir);
                //     console.log(`chosenDir: ${chosenDir}`);

                //     // Carve the wall on the current cell
                //     maze.grid[i] &= ~chosenDir;
                    
                //     // Carve the corresponding opposite wall on the neighbor cell
                //     maze.grid[neighborIndex] &= ~opposites.get(chosenDir);
                // }
            }
        }
    }

    
}
