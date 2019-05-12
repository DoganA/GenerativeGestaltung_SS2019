// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/CKeyIbT3vXI

var fireworks = [];
var gravity;
var moving = true;

function setup() {
  createCanvas(innerWidth, innerHeight);
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(4);
  background(0);
   
}

function draw() {
  colorMode(RGB);
  background(0, 0, 0, 25);
  
   //Create a Firework or "Rocket"
  if (random(1) < 0.03) {
    fireworks.push(new Firework());
  }
  
   //Execute the firework
  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    
   //Delete exploaded 
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
   
   
}

function touchStarted() {
	if(moving)
	{
		moving = false; 
		strokeWeight(1);
		fill(255);
		rect(width/2-30, -height+20, 10, 30);
		rect(width/2-50, -height+20, 10, 30);
		noLoop();
	}
	else
	{ 
		moving = true;
		loop();
	} 
	// prevent default
  	return false;
}
