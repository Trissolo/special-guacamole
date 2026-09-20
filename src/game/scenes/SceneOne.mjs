import { Scene, Math as PMath, Input as PInput } from 'phaser';

import MazeManager from '../modules/TrMaze/MazeManager.mjs';

import Maze from '../modules/TrMaze/Maze.mjs';

import { dirsEnum } from '../modules/TrMaze/const.mjs';

import beyondCastleWolfensteinRooms from '../modules/TrMaze/beyondRooms.mjs';

export class SceneOne extends Scene
{
    consSeed = 0;

    roomIdx = 0;

    currentMaze;
    
    player;

    playerPosition = new PMath.Vector2();

    constructor ()
    {
        super('SceneOne');
    }

    create ()
    {
        console.log('SceneOne_git');

        this.mazeManager = new MazeManager(this, 4);
        console.log("MMAN", this.mazeManager);
        this.add.image(0, 0, 'dt').setOrigin(0);

        // const qqq = new Maze(8, 9);
        // const mai = this.generateC64Room();
        // qqq.grid.set(mai)
        // this.mazeManager.renderMaze(qqq);

        // this.testMerge();

        this.testBeyond()

        // this.basicBTMaze();

        // const maze = new Maze(3, 4);

        // this.currentMaze = maze;


        
        // this.addPlayer();
        
        // this.pressedZ();

        // this.input.keyboard.on('keydown-Z', this.pressedZ, this);
        // this.input.keyboard.on('keydown-Z', () => this.basicBTMaze(), this);
    }

    testBeyond()
    {
        // for (const room of beyondCastleWolfensteinRooms)
        // {
        //     console.log(room.length, beyondCastleWolfensteinRooms.length);
        // }
        // room 
        this.currentMaze = new Maze(8, 9);

        this.pressedN();

        this.addPlayer() ;

        this.playerPosition.reset();
        
        this.player.setPosition(0, 0);

        this.input.keyboard.on('keydown-N', this.pressedN, this);

        this.input.keyboard.on('keydown-M', this.pressedM, this);

    }

    pressedN()
    {

        console.log(`Castle Wolfenstein room IDX: ${this.roomIdx}/${beyondCastleWolfensteinRooms.length - 1}`);

        const roomData = beyondCastleWolfensteinRooms[this.roomIdx];

        this.currentMaze.grid = new Uint8Array(roomData);

        this.mazeManager.renderMaze(this.currentMaze, 0x787878, 0, 0, true);

        this.roomIdx += 1;

        this.roomIdx %= beyondCastleWolfensteinRooms.length;
    }
    pressedM()
    {
        this.currentMaze.grid.fill(15);

        this.mazeManager.buildBinaryTree(this.currentMaze, 1, 4, this.consSeed++, 0);

        this.mazeManager.renderMaze(this.currentMaze, 0x898989, 0, 0, true);
    }

    addPlayer()
    {
        this.player = this.add.rectangle(0, 0, 3, 3, 0x34dada, 1).setOrigin(0).setDepth(11);
        // console.log(JSON.stringify(dirsEnum));
        for (const stringDir in dirsEnum)
        {
            // console.log(PMath.Vector2[stringDir]);
            // this.input.keyboard.on(`keydown-${stringDir}`, ()=> console.log(`${stringDir} = ${dirsEnum[stringDir]}`));
            this.input.keyboard.on(`keydown-${stringDir}`, () => this.pressedArrow(dirsEnum[stringDir], PMath.Vector2[stringDir]));
        }
    }

    basicBTMaze()
    {
        const w = this.mazeManager.rnd.integerInRange(2, 7);
        const h = this.mazeManager.rnd.integerInRange(2, 7);
        const tempMaze = new Maze(w, h);
        tempMaze.grid.fill(15);
        this.mazeManager.buildBinaryTree(tempMaze, 1, 4, this.consSeed++);
        this.mazeManager.renderMaze(tempMaze, 0xffffff, 0, 0, true);
    }

    pressedArrow(dir, vec)
    {
        const {currentMaze: maze, playerPosition, player} = this;

        const {size} = this.mazeManager;

        const currCell = playerPosition.x + playerPosition.y * maze.width;

        const potCell = maze[dir](currCell);

        if (potCell !== null && ((maze.grid[currCell] & dir) === 0))
        {
            this.playerPosition.add(vec);

            player.setPosition(1 + this.playerPosition.x * size, 1 + this.playerPosition.y * size);
        }
    }

    buildStuff()
    {
        // const size = 4;
        // const w = 8;
        // const h = 3;

        // const qqq = this.add.grid(0, 0, w * size, h * size, size, size, 0xff2222)
        // .setOrigin(0)
        // .setAltFillStyle(0xfff777)
        // .setCellPadding(0);

        // this.mazeManager.renderMaze(new Maze(5,2));

    }

    testMerge()
    {
        console.log('TestMerge');

        this.currentMaze = new Maze(7, 5);

        //first
        const tempMaze = this.currentMaze; //new Maze(4, 4);

        this.mazeManager.buildBinaryTree(tempMaze, 1, 4, this.consSeed++);
        this.mazeManager.buildBinaryTree(tempMaze, 1, 8, this.consSeed++, (tempMaze.tot * Math.random()) | 0 );
        // this.mazeManager.buildBinaryTree(tempMaze, 1, 4, this.consSeed++, tempMaze.width +6);

        // let x = 0;
        // let y = 0;
        // let w = 4;
        // const resWidth = 8;
        // for (const elem of tempMaze.grid)
        // {
        //     const currCell = x + y * resWidth;
        //     this.currentMaze.grid[currCell] = elem;
        //     if (++x === w)
        //     {
        //         x = 0;
        //         y+= 1;
        //         //this.currentMaze.grid[currCell+1] &= ~1;
        //     }
        // }

        // second;
        // tempMaze.grid.fill(15);
        // this.mazeManager.buildBinaryTree(tempMaze, 1, 4, this.consSeed++);
        // x = 4;
        // y = 0;

        // for (const elem of tempMaze.grid)
        // {
        //     const currCell = x + y * resWidth;
        //     this.currentMaze.grid[currCell] = elem;
        //     if (++x === resWidth)
        //     {
        //         x = 4;
                
        //         y+= 1;

                
        //         // Carve the corresponding opposite wall on the neighbor cell
        //         //this.currentMaze.grid[currCell][this.currentMaze[1](currCell)] &= ~2;//oppositesEnum.get(dir);
        //     }
        // }

        // // carve arbitrary
        // let uff = 4 + 3 * resWidth;
        // this.currentMaze.grid[uff] &= ~1;
        // this.currentMaze.grid[uff - 1] &= ~2;

        // uff = 4 + 0 * resWidth;
        // this.currentMaze.grid[uff] &= ~1;
        // this.currentMaze.grid[uff - 1] &= ~2;

        this.mazeManager.renderMaze(this.currentMaze, 0x656565, 0, 0, true);


        this.addPlayer();
    }

    pressedZ()
    {
        console.log('pressedZ');

        const {currentMaze: maze} = this;

        maze.grid.fill(15);
        this.mazeManager.buildBinaryTree(maze, 1, 8, this.consSeed++);
        this.mazeManager.renderMaze(maze, 0x8798da, 0, 0, true);

        maze.grid.fill(15);
        this.mazeManager.buildBinaryTree(maze, 1, 8, this.consSeed++);
        this.mazeManager.renderMaze(maze, 0x8798da, this.mazeManager.size * maze.width, 0, false);

        maze.grid.fill(15);
        this.mazeManager.buildBinaryTree(maze, 1, 8, this.consSeed++);
        this.mazeManager.renderMaze(maze, 0x8798da, 0, this.mazeManager.size * maze.height, false);


        // this.buildStuff()
        
        // reset Player position:
        this.playerPosition.reset();

        this.player.setPosition(1, 1);
    }

    generateC64Room()
    {
        const ROWS = 8;
        const COLS = 9;
        const grid = Array(ROWS).fill(null).map(() => Array(COLS).fill(0));

        // Helper to get random item from array
        const randomChoice = arr => arr[Math.floor(Math.random() * arr.length)];

        for (let r = 0; r < ROWS; r++)
        {
            for (let c = 0; c < COLS; c++)
            {
                // Determine required or forbidden walls based on neighbors
                let requiredWalls = 0;
                let forbiddenWalls = 0;

                // Check Left neighbor
                if (c > 0)
                {
                    if (grid[r][c - 1] & dirsEnum.RIGHT) requiredWalls |= dirsEnum.LEFT;
                    else forbiddenWalls |= dirsEnum.LEFT;
                }
                else
                {
                    // Screen boundary (high probability of wall)
                    if (Math.random() > 0.1) requiredWalls |= dirsEnum.LEFT;
                }

                // Check Top neighbor
                if (r > 0)
                {
                    if (grid[r - 1][c] & dirsEnum.DOWN) requiredWalls |= dirsEnum.UP;
                    else forbiddenWalls |= dirsEnum.UP;
                }
                else
                {
                    // Screen boundary
                    if (Math.random() > 0.1) requiredWalls |= dirsEnum.UP;
                }

                // Screen boundaries for bottom/right (lookahead)
                if (c === COLS - 1 && Math.random() > 0.1) requiredWalls |= dirsEnum.RIGHT;
                if (r === ROWS - 1 && Math.random() > 0.1) requiredWalls |= dirsEnum.DOWN;

                // Find all bitmasks (0-15) that satisfy the rules
                const validOptions = [];
                for (let mask = 0; mask <= 15; mask++)
                {
                    // Must contain all required walls
                    if ((mask & requiredWalls) !== requiredWalls) continue;
                    // Must NOT contain any forbidden walls
                    if ((mask & forbiddenWalls) !== 0) continue;

                    validOptions.push(mask);
                }

                // Fallback if trapped, otherwise pick a valid tile layout
                grid[r][c] = validOptions.length > 0 ? randomChoice(validOptions) : requiredWalls;
            }
        }

        // Post-processing: Inject special game entities (like 3 or 21) into open floor spaces (0)
        // for (let i = 0; i < 2; i++)
        // {
        //     let r = Math.floor(Math.random() * ROWS);
        //     let c = Math.floor(Math.random() * COLS);
        //     if (grid[r][c] === 0)
        //     {
        //         grid[r][c] = randomChoice([3, 21]);
        //     }
        // }

        return grid.flat();
    }
}
