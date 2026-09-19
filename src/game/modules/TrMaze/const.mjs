const dirsEnum = {
        LEFT: 1,
        RIGHT: 2,
        UP: 4,
        DOWN: 8
    };

const oppositesEnum = new Map([
    [dirsEnum.LEFT, dirsEnum.RIGHT],
    [dirsEnum.RIGHT, dirsEnum.LEFT],
    [dirsEnum.UP, dirsEnum.DOWN],
    [dirsEnum.DOWN, dirsEnum.UP]
]);

export {dirsEnum, oppositesEnum}
