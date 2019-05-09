// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Clock
// Video: https://youtu.be/E4RyStef-gY

var clocks;

function setup() {
    createCanvas(200, 200);
    clocks = new Clock(303, 450, 450);
}

function draw() {
    clocks.draw();
}
