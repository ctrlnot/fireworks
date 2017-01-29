function Particle(x, y, hue, splash) {
    this.pos = createVector(x, y);
    this.splash = splash;
    this.lifespan = 255;
    this.hue = hue;

    if(splash) {
        this.vel = createVector(0, random(-16, -10));
    } else {
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(2, 6));
    }

    this.acc = createVector(0, 0);

    this.applyForce = function(force) {
        this.acc.add(force);
    }

    this.update = function() {
        if(!this.splash) {
            this.vel.mult(0.9);
            this.lifespan -= 5;
        }

        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    this.done = function() {
        return this.lifespan < 0;
    }

    this.show = function() {
        colorMode(HSB);
        if(!this.splash) {
            strokeWeight(2)
            stroke(this.hue, 255, 255, this.lifespan);
        } else {
            strokeWeight(4)
            stroke(this.hue, 255, 255);
        }

        point(this.pos.x, this.pos.y);
    }
}