// main.js
import { Point } from './geometry.js';
import { Channel } from './channel.js';

const channel = new Channel();
channel.push(Point(1, 0));
channel.push(Point(0, 4), Point(4, 3));
channel.push(Point(4, 7), Point(4, 3));
channel.push(Point(16, 0), Point(10, 1));
channel.push(Point(16, 0), Point(9, -5));
channel.push(Point(12, -11));
channel.stringPull();

const canvasElement = document.querySelector('canvas');
if (canvasElement)
{
    const ctx = canvasElement.getContext('2d');
    channel.draw(ctx, Point(160, 250), Point(20, 20));
}
