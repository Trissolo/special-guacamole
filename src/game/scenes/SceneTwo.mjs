import {Scene, Math as PMath} from 'phaser';
import { dirsEnum, oppositesEnum } from '../modules/TrMaze/const.mjs';
import Maze from '../modules/TrMaze/Maze.mjs';
import MazeManager from '../modules/TrMaze/MazeManager.mjs';

import { MazePlayer } from '../modules/MazePlayer.mjs';

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

    init(payload)
    {
        this.input.keyboard.once('keydown-N', () => {

            this.textures.remove('dt');
            
            this.scene.switch('SceneOne');
        });
    }

    create ()
    {
        console.log('SceneTwo', dirsEnum, oppositesEnum);

        this.mazeManager = new MazeManager(this, 4);

        this.add.image(0, 0, 'dt').setOrigin(0);

        this.mazeManager.dt.fill(0x00ccbb).render();

        const baseMaze = new Maze(4, 4);
        baseMaze.grid.fill(15);
        this.mazeManager.buildBinaryTree(baseMaze, 1, 4, 970);

        this.mazeManager.renderMaze(baseMaze, 0x454545, 34, 8, true);

        console.log("Scale");
        this.currentMaze = this.mazeManager.scaleMaze(baseMaze);

        this.mazeManager.renderMaze(this.currentMaze, 0xfada67);

        // this.currentMaze = new Maze(4, 4);

        // this.mazeManager.debugMazeInfo(this.currentMaze, " ");

        // this.mazeManager.debugMazeInfo(new Maze(8, 8), " ");

        // console.log(this.mazeManager.suboptimalDebugNeighbors(27, this.currentMaze, []));

        // this.testBinary(10, 2);
        
        

        const player = new MazePlayer(this, 3, 0x7889db)
            .setMaze(this.currentMaze)
            .setRenderOffset(1, 1, true);


        // generator
        // const repeat = this.currentMaze.width * 6;            
        
        // const ffgen = this.mazeManager.floodFillInt(this.currentMaze, [27, 53], 1, 0, repeat);

        // const timeEvent = this.timedEvent = this.time.addEvent({
        //     delay: 290,
        //     repeat,
        //     callback: () => {
        //         // console.log("ffgen:", ffgen, timeEvent.repeatCount);

        //         ffgen.next();

        //         if (timeEvent.repeatCount === 0)
        //         {
        //             console.log("Timer ended", ffgen.return());
        //         }
        //     }
        // });
    }

    testBinary(renderOffsetX = 0, renderOffsetY = 0, seed = 0)
    {
        this.currentMaze.grid.fill(15);

        this.mazeManager.buildBinaryTree(this.currentMaze, 1, 4, seed);

        this.mazeManager.renderMaze(this.currentMaze, 0x454545, renderOffsetX, renderOffsetY, true);
    }

}
