var xPos = 30;
var yPos = 30;
var xDir = 1;
var yDir = -1

function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(255, 0, 255);
  xPos = xPos + xDir;
  yPos = yPos + yDir;
  ellipse(xPos, yPos, 20, 20);
  if (xPos < 0 || xPos > width) {
    xDir = -xDir;
  }
  if (yPos < 0 || yPos > height) {
    yDir = -yDir;
  }
}