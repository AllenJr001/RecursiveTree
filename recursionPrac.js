
let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');


let startX = 0;
let startY = canvas.height  / 2;
console.log(canvas.width);
let length = 25;
let angle = 0; 
// use Math.Pi / 2
// would set it to pi/2 which would be in radians or 90 degrees.

let depth = 3; 


drawTree(context, startX, startY, length, angle, depth);

function drawTree(context, startX, startY, length, angle, depth) {
    if (depth === 0) {
        return;
    }

    let endX = startX + length * Math.cos(angle);
    let endY = startY + length * Math.sin(angle);

    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.stroke();

    drawTree(context, endX, endY, length * 0.8, angle - Math.PI / 6, depth - 1);
    drawTree(context, endX, endY, length * 0.8, angle + Math.PI / 6, depth - 1);
}
