const stringify = myObj => JSON.stringify(myObj);

class Example extends Phaser.Scene
{
    create ()
    {
        const fromGimp = '10 10 30 10 30 30 40 30 40 10 80 10 80 50 60 50 60 20 50 20 50 50 10 50';
        
        const coords = new Uint8Array(fromGimp.split(' '));
        //const coords = fromGimp.split(' ');
        //coords.forEach((el, idx, arr) => arr[idx] = Number(el));


        const polygon = new Phaser.Geom.Polygon(
           [...coords]
        );

        const graphics = this.add.graphics({ x: 0, y: 0 });

        const color = new Phaser.Display.Color();
        
        graphics
            .lineStyle(1, color.random(10, 120).color)
            .fillStyle(0xfafafa,1)
            .strokePoints(polygon.points, true);

        
        console.log(`Earcutting: ${stringify(coords)}`);

        const earcutResult = Phaser.Geom.Polygon.Earcut(coords);
        
        console.log(`indices: ${stringify(earcutResult)} (length: ${earcutResult.length} - trangles: ${earcutResult.length / 3})`);

        const temporaryTriangle = new Phaser.Geom.Triangle();


        // show tris

        const {points} = polygon;
        console.log(`Poly points: ${stringify(points)} - length: ${points.length}`);

        let i = 0;

        while (i < earcutResult.length)
        {
            //const [a, b, c] = [earcutResult[i++], earcutResult[i++], earcutResult[i++]];
            //temporaryTriangle.setTo(points[a].x, points[a].y, points[b].x, points[b].y, points[c].x, points[c].y);

            const {x: x1, y: y1} = points[earcutResult[i++]];
            const {x: x2, y: y2} = points[earcutResult[i++]];
            const {x: x3, y: y3} = points[earcutResult[i++]];
            
            temporaryTriangle.setTo(x1, y1, x2, y2, x3, y3);

            console.dir(i, temporaryTriangle);
            
            graphics
                .fillStyle(color.random(50).color)
                .fillTriangleShape(temporaryTriangle);;      
        }

        
    }
}

const config = {
    pixelArt: true,
    scale: {
        mode: Phaser.Scale.NONE,
        parent: 'phaser-example',
        width: 160,
        height: 144,
        zoom: 4
    },
    
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);


/*
# obtain Image.Path coordinates:

image = Gimp.get_images()[0]
polys = {}
for path in image.get_paths():
    if len(path.get_strokes()) == 0:
        continue
    res = []
    for curr_stroke in path.get_strokes():
        bp = path.stroke_get_points(curr_stroke).controlpoints
        res.append(" ".join([str(int(x)) for pair in zip(bp[0::6], bp[1::6]) for x in pair]))
    polys[path.get_name()] = res[0] if len(res) == 1 else res


print(polys)

*/