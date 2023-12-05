// Set up canvas
function setup() {
    createCanvas(400, 400);
}

// Create an array to store the balls
let balls = [];

// Create a Ball class
class Ball {
    constructor(x, y, radius, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    // Update the ball's position
    update() {
        // Calculate the distance between the ball and the mouse
        let dx = this.x - mouseX;
        let dy = this.y - mouseY;
        let distance = sqrt(dx * dx + dy * dy);

        // Move the ball away from the mouse
        if (distance < 100) {
            this.speedX = dx / distance;
            this.speedY = dy / distance;
        }

        this.x += this.speedX * 2; // Increase the speedX by multiplying with 2
        this.y += this.speedY * 2; // Increase the speedY by multiplying with 2

        // Check for collision with walls
        if (this.x - this.radius < 0 || this.x + this.radius > width) {
            this.speedX *= -1;
        }
        if (this.y - this.radius < 0 || this.y + this.radius > height) {
            this.speedY *= -1;
        }
    }

    // Display the ball
    display() {
        fill(255, 0, 0); // Set the fill color to red
        ellipse(this.x, this.y, this.radius * 2);
    }
}
display() {
    fill(255, 0, 0); // Set the fill color to red
    ellipse(this.x, this.y, this.radius * 2);
}
}

// Create new balls and add them to the array
function createBalls(numBalls) {
    for (let i = 0; i < numBalls; i++) {
        let x = random(width);
        let y = random(height);
        let radius = random(10, 30);
        let speedX = random(-2, 2);
        let speedY = random(-2, 2);
        let ball = new Ball(x, y, radius, speedX, speedY);
        balls.push(ball);
    }
}

// Set up the sketch
function setup() {
    createCanvas(400, 400);
    createBalls(10);
}

// Draw the balls
function draw() {
    background(220);

    // Update and display each ball
    for (let i = 0; i < balls.length; i++) {
        balls[i].update();
        balls[i].display();
    }
}
