import { Scene } from 'phaser';
import TrMaze from '../modules/TrMaze.mjs';
import { dirVal } from '../modules/mazeConsts.mjs';

export class Game extends Scene
{
    consSeed = 0;
    constructor ()
    {
        super('Game');
    }

    create ()
    {
        // this.cameras.main.setBackgroundColor(0x00ff00);

        this.qqq = new TrMaze(this);

        const mazeData = this.qqq.recursiveBacktracker(8, 4, 1990);
        
        this.mazeData = mazeData;

        console.log(mazeData);

        // this
        
        // console.log(mazeData);
        
        // qqq.hardcoded();

        // qqq.dt.clear().fill(0xffff00, 1, 1, 0, qqq.size, 1).render();

        this.add.image(0, 0, 'dt').setOrigin(0);

        this.input.keyboard.on('keydown-Z', this.pressedZ, this);

        this.input.keyboard.on('keydown-X', this.pressedX, this);

        this.input.keyboard.on('keydown-C', this.pressedC, this);
    }

    pressedZ()
    {
        console.log('Z');
        console.log(`currSeed: ${this.consSeed}`);
        this.qqq.rnd.sow(`abc${this.consSeed++}`);
        this.mazeData.grid.fill(15);
        this.qqq.visited.fill(0);
        this.qqq.buildRecursiveBacktracker(this.mazeData, true);
        //this.qqq.generateBinaryTreeMaze(this.mazeData, "SE", false);

        this.qqq.showMaze(this.mazeData);
    }

    pressedX()
    {
        console.log('X');
        this.qqq.generateBinaryTreeMaze(this.mazeData, "SE", false);

        this.qqq.showMaze(this.mazeData);
    }

    pressedC()
    {
        console.log('C');
        console.log(`currSeed: ${this.consSeed}`);
        this.qqq.rnd.sow(`abc${this.consSeed++}`);
        //this.mazeData.grid.fill(dirVal.TOP + dirVal.LEFT);
        this.qqq.visited.fill(0);
        // this.qqq.buildRecursiveBacktracker(this.mazeData, true);
        this.qqq.generateBinaryTreeMaze(this.mazeData, "SE", true);
        this.qqq.generateBinaryTreeMaze(this.mazeData, "NE", false);

        this.qqq.showMaze(this.mazeData);
    }
}
