// Random Turmites
// Using p5.js framework
// JoeJ1


let cells = [];
let cellWidth;
let x;
let y;
let antDir; //0 = up, 1 = right, 2 = down, 3 = left
let iterationsPerFrame = 200;

let currentState = 0;
//               Left  Right  None  U-turn
//                 |     |      |     |
let directions = ['L',  'R',   'N',  'U'];

let currentState0;
let currentState1;

function setup(){
  cells = [];
  antDir = 0;
  var canvas = createCanvas(window.innerWidth*0.7,window.innerHeight*0.6);
  canvas.parent('canvasContainer');
  background(60);
  noStroke()
  for(x=0;x<=width;x++){
    cells.push([]);
    for(y=0;y<=height;y++){
      cells[x].push(0);
    }
  }
  x = floor(width/2);
  y = floor(height/2);
  options = [0,1]; // Really stupid way to do this
  currentState0 = [
    // Write colour                    Turn in direction                   Next state
    //      |                                 |                                 |
    [Math.round(Math.random()), directions[Math.floor(Math.random()*4)], options.splice(Math.round(Math.random()),1)], // If current colour == 0
    [Math.round(Math.random()), directions[Math.floor(Math.random()*4)], options[0]]  // If current colour == 1
  ] ;
  options = [0,1];
  currentState1 = [
    // Write colour                    Turn in direction                   Next state
    //      |                                 |                                 |
    [Math.round(Math.random()), directions[Math.floor(Math.random()*4)], options.splice(Math.round(Math.random()),1)], // If current colour == 0
    [Math.round(Math.random()), directions[Math.floor(Math.random()*4)], options[0]]  // If current colour == 1
  ];
  console.log(currentState0+"\n"+currentState1)
}

function turnRight(){
  antDir++
  if(antDir>3){
    antDir = 0;
  }
}

function turnLeft(){
  antDir--;
  if(antDir <0){
    antDir = 3;
  }
}

function turn(state, colour){
  if(state == 0){
    turnDir = currentState0[colour][1];
    if(turnDir == 'L'){
      turnLeft();
    }else if(turnDir == 'R'){
      turnRight();
    }else if(turnDir == 'N'){
      // Nothing
    }else if(turnDir == 'U'){
      // U turn
      turnRight();
      turnRight();
    }
  }else if(state == 1){
    turnDir = currentState1[colour][1];
    if(turnDir == 'L'){
      turnLeft();
    }else if(turnDir == 'R'){
      turnRight();
    }else if(turnDir == 'N'){
      // Nothing
    }else if(turnDir == 'U'){
      // U turn
      turnRight();
      turnRight();
    }
  }
}

function move(){
  // Moving
  if(antDir == 0){
    y--
  }else if(antDir == 1){
    x++
  }else if(antDir == 2){
    y++
  }else if(antDir == 3){
    x--
  }
  // Wrapping screen
  if(x > cells.length-1){
    x = 0;
  }else if(x< 0){
    x = cells.length-1;
  }
  if(y > cells[0].length-1){
    y = 0;
  }else if(y<0){
    y = cells[0].length-1;
  }
  return(x,y)
}

function draw(){
  for(i=0;i<iterationsPerFrame;i++){
    if(currentState == 0){
      if(cells[x][y] == 0){
        cells[x][y] = currentState0[0][0];
        turn(0,0);
        currentState = currentState0[0][2];
      }else if(cells[x][y] == 1){
        cells[x][y] = currentState0[1][0];
        turn(0,1);
        currentState = currentState0[1][2];
      }
    }else if(currentState == 1){
      if(cells[x][y] == 0){
        cells[x][y] = currentState1[0][0];
        turn(1,0);
        currentState = currentState1[0][2];
      }else if(cells[x][y] == 1){
        cells[x][y] = currentState1[1][0];
        turn(1,1);
        currentState = currentState1[1][2];
      }
    }
    stroke(color(60))
    if(cells[x][y] == 1){
      stroke(color(255))
    }
    point(x,y)
    x,y = move()
  }
}
