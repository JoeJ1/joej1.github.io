// Truchet tiles
// With p5.js framework
// JoeJ1

let tiles = [];
let tilesWidth;
let cols;
let rows;
let mode = 0;

function setup() {
  tiles = [];
  tilesWidth = 20;
  var canvas = createCanvas(500, 500);
  cols = floor(width / tilesWidth);
  rows = floor(height / tilesWidth);
  canvas = createCanvas(cols * tilesWidth, rows * tilesWidth)
  canvas.parent('canvasContainer');
  background(60);
  for (x = 0; x <= rows; x++) {
    tiles.push([]);
    for (y = 0; y <= cols; y++) {
      if (mode == 0) {
        tiles[x].push(new circleTile(Math.round(Math.random()), x, y));
      } else if (mode == 1) {
        tiles[x].push(new triangleTile(Math.floor(Math.random() * 4), x, y));
      } else{
        tiles[x].push(new diagonalTile(Math.round(Math.random()), x, y));
      }
      tiles[x][y].draw();
    }
  }
}

function circleTile(rotation, x, y) {

  this.draw = function() {
    fill(60);
    noStroke();
    rect(x * tilesWidth, y * tilesWidth, tilesWidth, tilesWidth);
    noFill()
    stroke(255);
    strokeWeight(3);
    if (rotation == 0) {
      arc(x * tilesWidth, y * tilesWidth, tilesWidth, tilesWidth, PI + (PI / 2) * 2, PI / 2);
      arc(x * tilesWidth + tilesWidth, y * tilesWidth + tilesWidth, tilesWidth, tilesWidth, PI, PI + (PI / 2));
    } else {
      arc(x * tilesWidth + tilesWidth, y * tilesWidth, tilesWidth, tilesWidth, PI / 2, PI);
      arc(x * tilesWidth, y * tilesWidth + tilesWidth, tilesWidth, tilesWidth, PI + PI / 2, PI * 2);
    }
  }
}

function triangleTile(rotation, x, y) {
  // Rotation of 0 = top-right shaded white, 1 = bottom-left, 2 = bottom-right, 3 = top-left
  this.draw = function() {
    fill(60);
    noStroke();
    rect(x * tilesWidth, y * tilesWidth, tilesWidth, tilesWidth);
    fill(255);
    if (rotation == 0) {
      triangle(x * tilesWidth, y * tilesWidth, x * tilesWidth + tilesWidth, y * tilesWidth, x * tilesWidth + tilesWidth, y * tilesWidth + tilesWidth);
    } else if (rotation == 1) {
      triangle(x * tilesWidth, y * tilesWidth, x * tilesWidth, y * tilesWidth + tilesWidth, x * tilesWidth + tilesWidth, y * tilesWidth + tilesWidth);
    } else if (rotation == 2) {
      triangle(x * tilesWidth, y * tilesWidth + tilesWidth, x * tilesWidth + tilesWidth, y * tilesWidth, x * tilesWidth + tilesWidth, y * tilesWidth + tilesWidth);
    } else {
      triangle(x * tilesWidth, y * tilesWidth, x * tilesWidth + tilesWidth, y * tilesWidth, x * tilesWidth, y * tilesWidth + tilesWidth);
    }
  }
}

function diagonalTile(rotation, x, y){
  this.draw = function(){
    stroke(255);
    strokeWeight(3);
    strokeCap(SQUARE);
    if(rotation == 0){
      line(x*tilesWidth,y*tilesWidth,x*tilesWidth+tilesWidth,y*tilesWidth+tilesWidth);
    }else{
      line(x*tilesWidth+tilesWidth,y*tilesWidth,x*tilesWidth,y*tilesWidth+tilesWidth);
    }
  }
}

function changeType() {
  mode++;
  if (mode > 2) {
    mode = 0;
  }
  if (mode == 0) {
    document.getElementById('changeTypeButton').innerHTML = 'Circles';
  } else if (mode == 1) {
    document.getElementById('changeTypeButton').innerHTML = 'Triangles';
  } else {
    document.getElementById('changeTypeButton').innerHTML = 'Diagonals';
  }
}
