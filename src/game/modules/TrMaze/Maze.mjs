import { dirsEnum, oppositesEnum } from "./const.mjs";

export default class Maze
{
    width;
    height;
    tot;
    lastCol;
    lastRowStart;
    grid;

    constructor(width = 3, height = 2)
    {
        this.width = width;

        this.height = height;

        this.tot = width * height;

        this.lastCol = width - 1;

        this.lastRowStart = this.tot - width;

        this.grid = new Uint8Array(this.tot).fill(15);

        this[dirsEnum.LEFT] = this.getLeft;
        this[dirsEnum.RIGHT] = this.getRight;
        this[dirsEnum.UP] = this.getUp;
        this[dirsEnum.DOWN] = this.getDown;
    }
    
    getLeft(cellIndex)
    {
        return (cellIndex % this.width === 0) ? null : cellIndex - 1;
    }

    getRight(cellIndex)
    {
        return (cellIndex % this.width === this.lastCol) ? null : cellIndex + 1;
    }

    getUp(cellIndex)
    {
        return (cellIndex < this.width) ? null : cellIndex - this.width;
    }

    getDown(cellIndex)
    {
        return (cellIndex >= this.lastRowStart) ? null : cellIndex + this.width;
    }
}
