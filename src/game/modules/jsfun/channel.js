// channel.js
import { triarea2, vequal } from './geometry.js';

export class Channel
{
    constructor()
    {
        this.portals = [];
        this.path = [];
    }

    push(p1, p2 = p1)
    {
        this.portals.push({ left: p1, right: p2 });
    }

    stringPull()
    {
        const portals = this.portals;
        if (portals.length === 0) return [];
        
        const pts = [];
        
        let portalApex = portals[0].left;
        let portalLeft = portals[0].left;
        let portalRight = portals[0].right;
        
        let apexIndex = 0;
        let leftIndex = 0;
        let rightIndex = 0;

        pts.push(portalApex);
        
        for (let i = 1; i < portals.length; i++)
        {
            const left = portals[i].left;
            const right = portals[i].right;

            // Update right vertex.
            if (triarea2(portalApex, portalRight, right) <= 0.0) {
                if (vequal(portalApex, portalRight) || triarea2(portalApex, portalLeft, right) > 0.0) {
                    portalRight = right;
                    rightIndex = i;
                } else {
                    pts.push(portalLeft);
                    portalApex = portalLeft;
                    apexIndex = leftIndex;
                    portalLeft = portalApex;
                    portalRight = portalApex;
                    leftIndex = apexIndex;
                    rightIndex = apexIndex;
                    i = apexIndex;
                    continue;
                }
            }

            // Update left vertex.
            if (triarea2(portalApex, portalLeft, left) >= 0.0)
            {
                if (vequal(portalApex, portalLeft) || triarea2(portalApex, portalRight, left) < 0.0)
                {
                    portalLeft = left;
                    leftIndex = i;
                }
                else
                {
                    pts.push(portalRight);
                    portalApex = portalRight;
                    apexIndex = rightIndex;
                    portalLeft = portalApex;
                    portalRight = portalApex;
                    leftIndex = apexIndex;
                    rightIndex = apexIndex;
                    i = apexIndex;
                    continue;
                }
            }
        }
        
        if ((pts.length === 0) || (!vequal(pts[pts.length - 1], portals[portals.length - 1].left)))
        {
            pts.push(portals[portals.length - 1].left);
        }
        
        this.path = pts;
        return pts;
    }

    draw(ctx, pd, pm)
    {
        ctx.translate(pd.x, pd.y);
        
        const line = (p1, p2) => {
            ctx.moveTo(p1.x * pm.x, p1.y * pm.y);
            ctx.lineTo(p2.x * pm.x, p2.y * pm.y);
        };
        
        const lines = (vv, z) => {
            if (z === undefined) {
                for (let n = 1; n < vv.length; n++) {
                    line(vv[n - 1], vv[n]);
                }
            } else {
                for (let n = 1; n < vv.length; n++) {
                    line(vv[n - 1][z], vv[n][z]);
                }
            }
        };

        ctx.globalAlpha = 1.0;
        const portals = this.portals;
        
        ['left', 'right'].forEach((v, k) => {
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';
            ctx.strokeStyle = k ? 'black' : 'blue';
            ctx.beginPath();
            lines(portals, v);
            ctx.closePath();
            ctx.stroke();
        });

        ctx.strokeStyle = 'red';
        ctx.globalAlpha = 0.6;
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.beginPath();
        lines(this.path);
        ctx.closePath();
        ctx.stroke();
    }
}
