let xoff = 0; //
 function setup() {
	createCanvas(windowWidth, windowHeight);
	print(`Canvas size is ${width}x${height}`);
	background(255);
}

// Called once per frame
function draw() {
	// Start xoff at 0.
	

	for (let x = 0; x < width; x++) {
		// For every xoff, start yoff at 0.
		let yoff = 0; //[bold]

		for (let y = 0; y < height; y++) {
			// Use xoff and yoff for noise().
			let bright = map(noise(xoff,yoff),0,1,0,255); //[bold]
			// Use x and y for pixel location.
			pixels[x+y*width] = color(bright);
			// Increment yoff.
			yoff += 0.01; //[bold]
		}
		// Increment xoff.
		xoff += 0.01;  //[bold]
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
