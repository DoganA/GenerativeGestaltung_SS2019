function Bear() {

    let line_x = 520;
    let line_y = 190;
    let baloon_x = 520;
    let baloon_y = 120;
    let speed_x = 0;
    let speed_y = 0;
    /****************************************************************
     *Update the angle of the ballon, holding by the bear
     ****************************************************************/
    this.update = function (speedX, speedY) {
        speed_x = speedX;
        speed_y = speedY;
    }
    /****************************************************************
     * Drawing the Body of baer.
     ***************************************************************/
    this.show = function () {
        ellipseMode(CENTER);
        rectMode(CENTER);
        //Body & Shade
        noStroke();
        fill(249, 150, 1)
        ellipse(303, 450, 300, 300)

        //fill(249, 150, 1)
        //ellipse(302, 250, 203, 200)

        //fill(249, 209, 110)
        //ellipse(300, 450, 300, 300)

        //Baloon
        fill(244, 122, 86)
        ellipse(523 - speed_x, 120 - speed_y, 138, 140)

        //shadow
        fill(255, 152, 129)
        ellipse(baloon_x - speed_x, baloon_y - speed_y, 130, 140)
        stroke(-150)
        fill(0, 0, 0)
        line(line_x - speed_x, line_y - speed_y, 520, 350)
        noFill()
        arc(495, 350, 50, 50, 0, PI) //Leine an der Hand

        //Arm
        noStroke()
        fill(249, 209, 110)
        rect(450, 375, 60, 60, 20)

        fill(249, 209, 110)
        rect(170, 375, 60, 60, 20)

        // Ears
        fill(249, 209, 126)
        ellipse(390, 180, 60, 60)

        fill(249, 209, 126)
        ellipse(210, 180, 60, 60)

        // Ears2 
        fill(213, 170, 71)
        ellipse(390, 180, 45, 45)

        fill(213, 170, 71)
        ellipse(210, 180, 45, 45)

        // Head
        noStroke()
        fill(249, 209, 126)
        ellipse(300, 250, 200, 200)

        fill(252, 245, 230)
        ellipse(300, 250, 170, 185)

        fill(249, 209, 126)
        rect(250, 225, 80, 100, 30)

        fill(249, 209, 126)
        rect(350, 225, 80, 100, 30)

        fill(249, 209, 126)
        ellipse(325, 185, 40, 40)

        fill(249, 209, 126)
        ellipse(275, 185, 40, 40)

        fill(249, 209, 126)
        arc(300, 180, 100, 50, PI, PI + PI)

        fill(249, 209, 126)
        ellipse(300, 185, 21, 21)

        fill(252, 245, 230)
        ellipse(300, 196, 21, 21)

        // Cheeks
        fill(249, 209, 126)
        ellipse(220, 270, 30, 30)

        fill(249, 209, 126)
        ellipse(380, 270, 30, 30)

        fill(252, 245, 230)
        ellipse(233, 286, 22, 22)

        fill(252, 245, 230)
        ellipse(367, 286, 22, 22)

        // Eyes
        fill(255, 255, 255)
        ellipse(340, 230, 40, 30)
        ellipse(260, 230, 40, 30)

        fill(0, 0, 0)
        ellipse(347, 228, 10, 10)
        ellipse(267, 228, 10, 10)

        //Nose & Mouth
        fill(0, 0, 0)
        rect(300, 270, 25, 18, 5)

        noFill()
        stroke(0, 0, 0)
        arc(325, 270, 50, 50, 0, PI);
        arc(275, 270, 50, 50, 0, PI);

        noStroke()
        fill(245, 218, 157)
        arc(300, 310, 50, 50, 0, PI);
        this.clock();
    }

    this.clock = function (tx, ty, radius) {

        translate(303, 450);
        var radius = int(min(200, 200) / 2);
        var numPoints = 60;
        var angle = TWO_PI / numPoints;

        var secondsRadius = radius * 0.72;
        var minutesRadius = radius * 0.60;
        var hoursRadius = radius * 0.50;

        var s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
        var m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
        var h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

        //Draw the minute/second ticks
        // beginShape() will build the points into a single custom shape  
        strokeWeight(2);
        stroke(0);
        beginShape(POINTS);
        var i = 0;
        while (i < numPoints) {
            x = cos(angle * i) * secondsRadius;
            y = sin(angle * i) * secondsRadius;
            vertex(x, y);
            i++;
        }
        endShape();

        strokeWeight(1);
        line(0, 0, cos(s) * secondsRadius, sin(s) * secondsRadius);
        strokeWeight(2);
        line(0, 0, cos(m) * minutesRadius, sin(m) * minutesRadius);
        strokeWeight(4); // hour hand should be thicker
        line(0, 0, cos(h) * hoursRadius, sin(h) * hoursRadius);

        // Write the numerals text
        fill(0, 0, 0);
        textSize(16);
        strokeWeight(0.1);
        x = cos(PI + HALF_PI) * secondsRadius - 10;
        y = sin(PI + HALF_PI) * secondsRadius - 10;
        text("12", x, y);

        x = cos(TWO_PI) * secondsRadius + 10;
        y = sin(TWO_PI) * secondsRadius + 5;
        text("3", x, y);

        x = cos(HALF_PI) * secondsRadius - 7;
        y = sin(HALF_PI) * secondsRadius + 20;
        text("6", x, y);

        x = cos(PI) * secondsRadius - 25;
        y = sin(PI) * secondsRadius + 5;
        text("9", x, y);
    }
}
