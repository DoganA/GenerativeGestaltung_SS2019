// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Clock
// Video:
let t1 = 0;
let t2 = 0;

let speedX = 0;
let speedY = 0;

var baer;

function setup() {
    createCanvas(1200, 700);
    ellipseMode(CENTER);
    rectMode(CENTER);
    baer = new Bear();
}

function draw() {
    background(0);
    t1 = second() / 2;
    var s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
    t2 = second();

    speedX = sin(t1 / 2) * 2;
    speedY = cos(t2) * 30;

    //line(200, 0, x + speedX, y + speedY);
    //ellipse(x + speedX, y + speedY, 100);

    baer.update(sin(t1) * 100, cos(t2) * 30);
    baer.show();

}