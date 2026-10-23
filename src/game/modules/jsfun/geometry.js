// geometry.js

/**
 * Creates a 2D point object.
 */
export const Point = (x, y) => ({ x, y });

/**
 * Computes twice the area of the triangle formed by points a, b, and c.
 * Sign determines orientation.
 */
export function triarea2(a, b, c)
{
    const ax = b.x - a.x;
    const ay = b.y - a.y;
    const bx = c.x - a.x;
    const by = c.y - a.y;
    return bx * ay - ax * by;
}

/**
 * Computes the squared distance between two points.
 */
export function vdistsqr(a, b)
{
    const x = b.x - a.x;
    const y = b.y - a.y;
    return Math.sqrt(x * x + y * y);
}

/**
 * Checks if two vertices are close enough to be considered equal.
 */
export function vequal(a, b)
{
    return vdistsqr(a, b) < (0.001 * 0.001);
}
