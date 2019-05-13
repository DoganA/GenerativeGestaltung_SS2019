// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/CKeyIbT3vXI

function Firework() {
  this.hu = random(255);
  this.firework = new Particle(random(width), height, this.hu, true);
  this.exploded = false;
  this.particles = [];
//-----------------------------------------------------------------------------
  this.done = function() {
//-----------------------------------------------------------------------------
    if (this.exploded && this.particles.length === 0) {
      return true;
    } else {
      return false;
    }
  }
//-----------------------------------------------------------------------------
  this.update = function() {
//-----------------------------------------------------------------------------
    if (!this.exploded) {
      this.firework.applyForce(gravity);
      this.firework.update();
      
      if (this.firework.vel.y >= 0) {
        this.exploded = true;
        this.explode();
      }
    }
    
    for (var i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(gravity);
      this.particles[i].update();
      
      if (this.particles[i].done()) {
        this.particles.splice(i, 1);
      }
    }
     makeHouses();
  }
//-----------------------------------------------------------------------------
  this.explode = function() {
//-----------------------------------------------------------------------------
    /*for (var i = 0; i < 100; i++) {
      var p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hu, false);
      this.particles.push(p);
    }*/
     //
     //https://forum.processing.org/two/discussion/25369/how-to-modify-fireworks-code-so-that-it-reacts-to-sound-mic-input
     //
     for (var i = 0; i < 90; i++) 
     {
       sparkleDir = random(0, TWO_PI);
       sparkleVel = random(3,5);
       sparkleSpd = createVector(this.firework.vel.x + sparkleVel * cos(sparkleDir), this.firework.vel.y + sparkleVel * sin(sparkleDir))
       thisSparkle = new Particle(this.firework.pos.x, this.firework.pos.y, this.hu, false, sparkleSpd.copy());
      
       this.particles.push(thisSparkle);
     }
     /*for (var i = 0; i < 10; i++) 
     {
       sparkleDir = random(0, TWO_PI);
       sparkleVel = random(0,.5);
       sparkleSpd = createVector(this.firework.vel.x + sparkleVel * cos(sparkleDir), this.firework.vel.y + sparkleVel * sin(sparkleDir))
       thisSparkle = new Particle(this.firework.pos.x, this.firework.pos.y, this.hu, false, sparkleSpd.copy(), round(random(0,40)));
       this.particles.push(thisSparkle);
     }*/
  }
//-----------------------------------------------------------------------------
  this.show = function() {
//-----------------------------------------------------------------------------
    if (!this.exploded) {
      this.firework.show();
    }
    
    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].show();
    }
  }
}
function makeHouses() {
	houses = createGraphics(width, height);
	houses.strokeWeight(2);
	const houseCount = 10;
	const houseWidth = width / houseCount;
	const houseWindowWidth = 10;
	const houseWindowHeight = 15;
	for (let i = 0; i < houseCount; i++) {
		const houseHeight = random(35, 100);
		houses.fill(128);
		houses.rect(houseWidth * i, height - houseHeight, houseWidth, houseHeight * 2);

		for (let windowY = height - houseHeight + 10; windowY < height - houseWindowHeight - 5; windowY += houseWindowHeight + 5) {
			houses.fill(random() < 0.25 ? 'yellow' : 64);
			houses.rect(houseWidth * i + 12, windowY, houseWindowWidth, houseWindowHeight);

			houses.fill(random() < 0.25 ? 'yellow' : 64);
			houses.rect(houseWidth * (i + 1) - 12 - houseWindowWidth, windowY, houseWindowWidth, houseWindowHeight);

		}
	}
}