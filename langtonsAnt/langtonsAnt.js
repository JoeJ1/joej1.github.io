// Lanton's Ant
// Using p5.js framework
// JoeJ1


let cells = [];
let cellWidth;
let x;
let y;
let antDir; //0 = up, 1 = right, 2 = down, 3 = left
let iterationsPerFrame = 200;


function setup(){
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

function move(){
  if(antDir == 0){
    y--
  }else if(antDir == 1){
    x++
  }else if(antDir == 2){
    y++
  }else if(antDir == 3){
    x--
  }
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
    if(cells[x][y] == 1){
      turnLeft()
      cells[x][y] = 0;
    }else if(cells[x][y] == 0){
      turnRight()
      cells[x][y] = 1;
    }
    stroke(color(60))
    if(cells[x][y] == 1){
      stroke(color(255))
    }
    point(x,y)
    x,y = move()
  }
}
