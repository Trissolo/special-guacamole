const dirVal = {
        LEFT: 1,
        RIGHT: 2,
        TOP: 4,
        BOTTOM: 8
    };

const oneWall = new Set(Object.values(dirVal));

const threeWalls = new Set();

const allWalls = [...oneWall].reduce((a, b) => a + b, 0);

for (let pow = 1; pow < allWalls; pow <<= 1)
{
    threeWalls.add(allWalls - pow);
}

const opposites = new Map([
    [dirVal.LEFT, dirVal.RIGHT],
    [dirVal.RIGHT, dirVal.LEFT],
    [dirVal.TOP, dirVal.BOTTOM],
    [dirVal.BOTTOM, dirVal.TOP]
]);

export {dirVal, oneWall, threeWalls, allWalls, opposites};
