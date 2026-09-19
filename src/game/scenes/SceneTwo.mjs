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

        this.mazeManager.dt.fill(0x009900).render();
    }


}
