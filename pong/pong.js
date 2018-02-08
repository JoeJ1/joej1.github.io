// Pong clone
// using p5.js framework
// JoeJ1

let leftPaddle;
let rightPaddle;
let ball;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight * 0.5);
  canvas.parent('canvasContainer')
  background(60);
  ball = new Ball();
  rightPaddle = new Paddle('R');
  leftPaddle = new Paddle('L');
}

function draw() {
  background(60);
  leftPaddle.show();
  rightPaddle.show();
  ball.move();
  ball.show();
  if (keyIsDown(UP_ARROW)) {
    rightPaddle.moveUp();
  } else if (keyIsDown(DOWN_ARROW)) {
    rightPaddle.moveDown();
  }
  if(keyIsDown(87)){
    leftPaddle.moveUp();
  }else if(keyIsDown(83)){
    leftPaddle.moveDown();
  }
}

function Paddle(side) {
  this.height = floor(height / 3);
  this.width = floor(height / 10);
  this.y = floor((height / 2) - this.height / 2);
  if (side == 'L') {
    this.x = width / 12;
  } else {
    this.x = width - (width / 12);
  }
  this.x = floor(this.x);

  this.moveUp = function() {
    if (this.y > 0) {
      this.y -= 5;
    }
  }

  this.moveDown = function() {
    if (this.y < height - (this.height)) {
      this.y += 5;
    }
  }

  this.show = function() {
    fill(255);
    noStroke();
    rectMode(CORNER);
    rect(this.x, this.y, this.width, this.height);
  }
}

function Ball() {
  this.x = floor(width / 2);
  this.y = floor(height / 2);
  this.xIncrease = 5;
  this.yIncrease = 5;
  this.move = function() {
    this.x += this.xIncrease;
    this.y += this.yIncrease;
    if (this.x < 0 || this.x > width) {
      this.bounceX();
    }
    if (this.y < 0 || this.y > height) {
      this.bounceY();
    }
    if(this.x<leftPaddle.x+leftPaddle.width && this.y>leftPaddle.y && this.y<leftPaddle.y+leftPaddle.height){
      this.bounceX();
    }
    if(this.x>rightPaddle.x && this.y>rightPaddle.y && this.y<rightPaddle.y+rightPaddle.height){
      this.bounceX();
    }
  }

  this.bounceX = function() {
    this.xIncrease = this.xIncrease * -1;
  }

  this.bounceY = function() {
    this.yIncrease = this.yIncrease * -1;
  }
  this.show = function() {
    rectMode(CENTER);
    fill(255);
    rect(this.x, this.y, height / 12, height / 12)
  }
}
