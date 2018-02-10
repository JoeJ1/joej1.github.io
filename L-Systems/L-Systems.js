// L Systems
// Using p5.js framework
// JoeJ1



// Move x = len*cos(angle)
// Move y = len*sin(angle)

let n = 4; // The number of generations
let type = 0; // 0 = Sierpinski Triangle, 1 = Hexagonal Sierpinski Triangle, 2 =  Dragon Curve, 3 = Fractal Plant
let angle = 120; // The angle to turn at
let len = 50;
let instructions = ['F', '-', 'G', '-', 'G'];
let x;
let y;
let currentAngle = 0;

function setup() {
  var canvas = createCanvas(640, 480);
  canvas.parent('canvasContainer')
  background(60);
  stroke(255);
  if (type == 0) {
    x = width / 2;
    y = height / 2;
    let toX = x;
    let toY = y;
    for (let i = 0; i < n; i++) {
      let tempInstructions = [];
      console.log('1 step')
      for (let j = 0; j < instructions.length; j++) {
        if (instructions[j] == 'F' || instructions[j] == 'G') {
          toX = x + len * cos(currentAngle);
          toY = y + len * sin(currentAngle);
        } else if (instructions[j] == '-') {
          currentAngle += angle;
          if (currentAngle > 360) {
            currentAngle = currentAngle % angle;
          }
          toX = x + len * cos(currentAngle);
          toY = y + len * sin(currentAngle);
        } else if (instructions[j] == '+') {
          currentAngle -= angle;
          currentAngle = 360 - currentAngle;
          if (currentAngle < 0) {
            currentAngle = 360 - currentAngle % angle;
          }
          toX = x + len * cos(currentAngle);
          toY = y + len * sin(currentAngle);
        }
        stroke(255)
        line(x, y, toX, toY);
        x = toX;
        y = toY;
        console.log(angle + " " + currentAngle);
      }
      console.log(instructions)
      for (let j = 0; j < instructions.length; j++) {
        if (instructions[j] == 'F') {
          tempInstructions.push('F');
          tempInstructions.push('-');
          tempInstructions.push('G');
          tempInstructions.push('+');
          tempInstructions.push('F'); //
          tempInstructions.push('+');
          tempInstructions.push('G');
          tempInstructions.push('-');
          tempInstructions.push('F');
        } else if (instructions[j] == 'G') {
          tempInstructions.push('G');
          tempInstructions.push('G');
        }
      }
      instructions = tempInstructions;
    }
  }
}

function changeType(element) {
  type++;
  if (type > 3) {
    type = 0;
  }
  if (type == 0) {
    element.innerHTML = 'Sierpinski Triangle';
  } else if (type == 1) {
    element.innerHTML = 'Hexagonal Sierpinski Triangle';
  } else if (type == 2) {
    element.innerHTML = 'Dragon Curve'
  } else {
    element.innerHTML = 'Fractal Plant'
  }
}
