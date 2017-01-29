var fireworks = [];
var gravity;

function setup() {
    createCanvas(1366, 710);
    colorMode(HSB);
    stroke(255);
    strokeWeight(4);
    background(51);

    gravity = createVector(0, 0.2);
}

function draw() {
    colorMode(RGB);
    background(0, 0, 0, 70);

    if(random(1) < 0.1) {
        fireworks.push(new Firework());
    }

    for(var i=fireworks.length-1; i>=0; i--) {
        fireworks[i].update();
        fireworks[i].show();

        if(fireworks[i].done()) {
            fireworks.splice(i, 1);
        }
    }
}