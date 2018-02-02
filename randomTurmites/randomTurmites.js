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

// Interesting Termites:
/*
  // Sorry for bad descriptions, It's hard to come up with unique names

  // Large, chaotic Spiral (Example of what this notation means)
  1,R,0,0,R,1 -> currentState0 = [[1, 'R', 0],[0, 'R', 1]];
  0,N,0,1,N,1 -> currentState1 = [[0, 'N', 0],[1, 'N', 1]];

  // Langton's Ant-Like
  1,R,0,0,U,1
  0,L,0,1,R,1

  // Circularly eminating widely spaced white dots
  0,N,1,1,N,0
  1,L,0,1,R,1

  // Spiral forming half-filled square (interesting after wrap)
  0,N,1,0,R,0
  1,U,1,0,L,0

  // Expanding Square
  1,L,0,1,U,1
  0,R,1,1,L,0

  // Chaotic with interesting patern
  0,U,1,0,N,0
  1,L,1,0,L,0

  // Expanding cross with cross at 45 degreees in center
  1,R,0,0,U,1
  0,R,0,1,U,1

  // Fills up screen left to white then interesting pattern
  1,L,0,0,L,1
  1,N,1,1,R,0

  // Interestingly filled expanding square
  0,L,1,0,R,0
  1,R,1,1,L,0

  // Expands in squares
  1,U,0,0,L,1
  1,R,1,1,N,0

  // Very rare highways
  1,U,0,0,L,1
  1,N,0,0,L,1

  // Builds in centre forming highways in both directions
  0,L,0,0,N,1
  1,R,1,1,R,0

  // Chaotic growth
  1,N,1,0,R,0
  1,U,0,1,N,1

  // Expanding Octagon
  1,U,1,0,U,0
  1,R,1,1,N,0

  // Langton's ant-Like
  1,R,0,1,R,1
  1,L,1,0,U,0

  // Chaotic Spiral
  0,U,0,1,N,1
  1,L,1,0,U,0

  // Angled highway
  1,N,1,0,L,0
  1,R,1,1,L,0

  // Expanding x-shape
  1,R,0,0,L,1
  1,N,1,0,R,0

  // Tightly packed expanding Spiral
  1,R,0,0,L,1
  1,L,0,0,R,1

  // Expanding diagonal square with interesting center pattern
  1,R,1,0,U,0
  1,N,0,0,L,1

  // Rotated expanding x-shape
  1,R,0,0,L,1
  1,N,1,0,R,0

  // Difficult to descibe
  1,N,1,1,N,0
  0,N,0,0,R,1

  // Off-center square with diagonal highway
  1,U,0,1,N,1
  1,L,0,0,R,1

  // Cross builds chaoticicaly in center
  1,N,0,0,R,1
  0,N,0,0,R,1

  // Interesting highways
  1,N,1,0,N,0
  1,U,0,0,R,1

  // Small Square chaotic growth
  1,N,1,0,N,0
  1,R,1,1,N,0

  // Langton's ant-like
  1,R,1,1,R,0
  0,N,0,0,N,1

  // Fractal-like chaotic generation
  1,L,1,1,N,0
  1,U,0,0,R,1

  // Interesting expanding square
  1,R,1,1,R,0
  0,N,0,1,L,1

  // Langton's Ant
  1,R,0,0,L,1
  1,R,0,0,L,1

  // Interesting bouncing highways
  1,N,1,0,R,0
  1,R,0,0,U,1

  // Spiral highways
  1,L,0,1,L,1
  0,N,1,0,N,0

  // bouncing diagonal highways
  1,L,1,0,L,0
  1,N,0,0,U,1

  // Wavy lines square
  1,N,1,0,L,0
  0,L,0,0,R,1

  // Expanding Trapesium
  0,U,1,0,U,0
  1,N,0,1,R,1

  // Thick highways
  1,L,0,0,N,1
  1,U,1,1,R,0

  // Spiral
  1,N,1,1,R,0
  1,U,1,0,L,0

  // Interesting opposing highways
  1,R,1,1,N,0
  1,L,1,0,R,0
*/
