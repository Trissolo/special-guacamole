import {Math as PMath, GameObjects, Scene} from 'phaser'
import { dirsEnum } from './TrMaze/const.mjs';

export class MazePlayer extends GameObjects.Rectangle
{
    maze;

    // offsetX = 3;
    // offsetY = 3;
    
    size = 4;

    playerPosition = new PMath.Vector2();
    /**
     * 
     * @param {Scene} scene 
     * @param {number} size 
     */
    constructor(scene, size = 1, color = 0x67bd89)
    {
        super(scene, 3, 3, size, size, color);
        this.setOrigin(0).setDepth(8);
        this.setMov();
        scene.add.existing(this);
    }

    setMaze(maze)
    {
        this.maze = maze;

        return this;
    }

    setMov()
    {
        for (const stringDir in dirsEnum)
        {
            this.scene.input.keyboard.on(`keydown-${stringDir}`, () => this.pressedArrow(dirsEnum[stringDir], PMath.Vector2[stringDir]));
        }
    }

    pressedArrow(dir, vec)
    {
        // console.log(`dir: ${dir}, vec: {x: ${vec.x}, y: ${vec.y}}`);

        if (!this.maze)
        {
            console.log("No maze set!");

            this.playerPosition.add(vec);

            this.setPosition(1 + this.playerPosition.x * this.size, 1 + this.playerPosition.y * this.size);

            //return;
        }
    }
}