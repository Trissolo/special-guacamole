import {Scene, Math as PMath} from 'phaser';
import { dirsEnum, oppositesEnum } from '../modules/TrMaze/const.mjs';
import Maze from '../modules/TrMaze/Maze.mjs';
import MazeManager from '../modules/TrMaze/MazeManager.mjs';

export class SceneTwo extends Scene
{
    consSeed = 0;

    roomIdx = 0;

    currentMaze;

    mazeManager;
    
    player;

    playerPosition = new PMath.Vector2();

    constructor ()
    {
        super('SceneTwo');

    }

    create ()
    {
        console.log('SceneTwo', dirsEnum, oppositesEnum);

        this.mazeManager = new MazeManager(this, 4);

        this.add.image(0, 0, 'dt').setOrigin(0);

        this.mazeManager.dt.fill(0x00ccbb).render();

        this.currentMaze = new Maze(8, 9);
        //this.currentMaze = new Maze(4, 4);

        this.mazeManager.debugMazeInfo(this.currentMaze);

        this.testBinary();

        // generator
        const repeat = 11;
        const ffgen = this.mazeManager.floodFillInt(this.currentMaze, 0, 1, 0, repeat);

        this.timedEvent = this.time.addEvent({ delay: 220, callback: () => ffgen.next(), callbackScope: this, repeat});
    }

    testBinary()
    {
        this.currentMaze.grid.fill(15);

        this.mazeManager.buildBinaryTree(this.currentMaze, 1, 4, 4);

        this.mazeManager.renderMaze(this.currentMaze, 0x454545, 0, 0, true);
    }

}
