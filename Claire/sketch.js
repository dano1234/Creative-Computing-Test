let bg;
let classifier;
let bingo;
let draw1;
let labelSpan;
let confidenceSpan;
let clearButton;
let canvas;
let check1 = false;
let check2 = false;
let check3 = false;

function preload() {
  classifier = ml5.imageClassifier('DoodleNet');
  bingo = loadImage("bingo.png");
  bg = loadImage("bg.jpg");
  draw1 = loadImage("draw.jpg");
}

function setup() {
  canvas = createCanvas(380, 420);
  background(255);
  classifier.classify(canvas, gotResult);

  // Create a clear canvas button
  clearButton = createButton("clear canvas");
  clearButton.position(10, 10);
  // clearButton = select("#clearBtn");
  //pure javascript way
  //clearButton = document.getElementById("clearBtn");
  //clearButton.addEventListener("click", clearCanvas);
  //  clearButton.touchStarted(clearCanvas);
  clearButton.mousePressed(clearCanvas);

  // Create 'label' and 'confidence' div to hold results
  labelSpan = select("#label");
  confidenceSpan = select("#confidence");
  textSize(17);
  text("Draw:  Cat", 0, 405);
  text("Strawberry", 130, 405);
  text("House", 270, 405);
}


function clearCanvas() {
  image(bg, 0, 0, 380, 380);
}


function draw() {
  strokeWeight(16);
  stroke(0);

}

function touchMoved() {
  line(mouseX, mouseY, pmouseX, pmouseY);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  labelSpan.html(results[0].label);
  confidenceSpan.html(floor(100 * results[0].confidence));
  classifier.classify(canvas, gotResult);

  if (results[0].label == "cat") {
    image(bingo, 85, 380, 40, 40);
    check1 = true;
  }
  if (results[0].label == "strawberry") {
    image(bingo, 220, 380, 40, 40);
    check2 = true;
  }
  if (results[0].label == "house" || results[0].label == "lighthouse") {
    image(bingo, 330, 380, 40, 40);
    check3 = true;
  }
  countN();
}

function countN() {

  if (check1 == true & check2 == true & check3 == true) {
    image(draw1, 0, 0);
  }
}



