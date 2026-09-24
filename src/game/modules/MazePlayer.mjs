import {Math as PMath, GameObjects, Scene} from 'phaser'
import { dirsEnum } from './TrMaze/const.mjs';

export class MazePlayer extends GameObjects.Rectangle
{
    maze;

    renderOffsetX = 3;
    renderOffsetY = 3;
    
    size = 4;

    playerPosition = new PMath.Vector2();
    /**
     * 
     * @param {Scene} scene 
     * @param {number} size 
     */
    constructor(scene, size = 1, color = 0x67bd89)
    {
        super(scene, 0, 0, size, size, color);
        this.setOrigin(0).setDepth(8);
        this.setMov();
        this.setRenderOffset();
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

    setRenderOffset(rox = 1, roy = 1, setPos = false)
    {
        this.renderOffsetX = rox;

        this.renderOffsetY = roy;

        if (setPos)
        {
            this.setPosition(rox, roy);
        }

        return this;
    }

    pressedArrow(dir, vec)
    {
        // console.log(`dir: ${dir}, vec: {x: ${vec.x}, y: ${vec.y}}`);

        if (!this.maze)
        {
            console.log("No maze set!");

            this.playerPosition.add(vec);

            this.setPosition(this.renderOffsetX + this.playerPosition.x * this.size, this.renderOffsetY + this.playerPosition.y * this.size);

            return;
        }
        
        const {playerPosition, maze, size} = this;

        const currCell = playerPosition.x + playerPosition.y * maze.width;

        const potCell = maze[dir](currCell);

        if (potCell !== null && ((maze.grid[currCell] & dir) === 0))
        {
            playerPosition.add(vec);

            this.setPosition(this.renderOffsetX + playerPosition.x * size, this.renderOffsetY + playerPosition.y * size);
        }
    }
}