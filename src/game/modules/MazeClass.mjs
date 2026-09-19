export default class Maze
{
    width = 0;
    height = 0;
    tot = 0;
    lastCol = 0;
    lastRowStart = 0;
    grid;

    constructor(width, height)
    {
        this.width = width;

        this.height = height;

        this.tot = width * height;

        this.lastCol = width - 1;

        this.lastRowStart = this.tot - width;

        this.grid = new Uint8Array(this.tot).fill(15);
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
