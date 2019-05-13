// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/CKeyIbT3vXI

function Particle(x, y, hu, firework, speed) {
   this.pos = createVector(x, y);
   this.firework = firework;
   this.lifespan = 255;
   this.hu = hu;
   //this.acc = createVector(0,0);
   this.acc = (speed == undefined ? createVector(0, 0) : speed.copy());
   this.burntime = 0;
   this.gravity = 0;

   if (this.firework) {
      this.vel = createVector(random(-1,1), random(-14, -10));
   } else {
      this.vel = p5.Vector.random2D();
      this.vel.mult(random(2, 10));
      
   }
   //-----------------------------------------------------------------------------
   this.applyForce = function (force) {
   //-----------------------------------------------------------------------------
      this.gravity = force;
      this.acc.add(this.gravity);
   }
   //-----------------------------------------------------------------------------
   this.update = function () {
   //-----------------------------------------------------------------------------
      if (!this.firework) {
         this.vel.mult(0.9);
         this.lifespan -= 4;
      }

      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
   }
   //-----------------------------------------------------------------------------
   this.done = function () {
   //-----------------------------------------------------------------------------
      if (this.lifespan < 0) {
         return true;
      } else {
         return false;
      }
   }
   //-----------------------------------------------------------------------------
   this.show = function () {
   //-----------------------------------------------------------------------------
      colorMode(HSB);
      
      if (!this.firework) { //Sparkle
         strokeWeight(2);
         stroke(hu, 255, 255, this.lifespan);
         
        // this.burntime++;
      } else { //Firework
         strokeWeight(4);
         stroke(hu, 255, 255);
      }
      point(this.pos.x, this.pos.y);
   }
}
