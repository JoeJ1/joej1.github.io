//Maze generation with prim's algorithm
//27/01/18

let cells = [];
let cellWidth;
let cols;
let rows;
function setup(){
  cells = [];
  cellWidth = 5;
  var canvas = createCanvas(window.innerWidth,window.innerHeight*0.6);
  cols = floor(width/cellWidth); // Rounds the width and height of the window to the nearest cell width
  rows = floor(height/cellWidth);
  canvas = createCanvas(cols*cellWidth,rows*cellWidth)
  canvas.parent('canvasContainer');
  background(60);
  noStroke()
  for(j=0;j<=rows;j++){
    cells.push([]);
    for(i=0;i<=cols;i++){
      cells[j].push(Math.floor((Math.random())+0.5));
      if(cells[j][i] == 1){
        rect(i*cellWidth,j*cellWidth,cellWidth,cellWidth);
      }
    }
  }
}

function draw(){
  newCells = [];
    background(60);
    for(j=0;j<=rows;j++){
      newCells.push([])
      for(i=0;i<=cols;i++){
        //The sum of the states of alleight neighbors of the cell
        if(j == 0){
          if(i == 0){
            neighbors = cells[j+1][i] + cells[j+1][i+1] + cells[j][i+1];
          }else if(i == cols){
            neighbors = cells[j][i-1] + cells[j+1][i] + cells[j+1][i-1];
          }else{
            neighbors = cells[j+1][i] + cells[j+1][i+1] + cells[j+1][i-1] + cells[j][i-1] + cells[j][i+1];
          }
        }else if(j == rows){
          if(i == 0){
            neighbors = cells[j-1][i] + cells[j-1][i+1] + cells[j][i+1];
          }else if(i == cols){
            neighbors = cells[j-1][i] + cells[j-1][i-1] + cells[j][i-1];
          }else{
            neighbors = cells[j-1][i] + cells[j-1][i+1] + cells[j-1][i-1] + cells[j][i-1] + cells[j][i+1];
          }
        }else if(i == cols){
          if(j == rows){
            neighbors = cells[j-1][i] + cells[j-1][i-1] + cells[j][i-1];
          }else if(j == 0){
            neighbors = cells[j][i-1] + cells[j+1][i] + cells[j+1][i-1];
          }else{
            neighbors = cells[j][i-1] + cells[j-1][i-1] + cells[j-1][i] + cells[j+1][i] + cells[j+1][i-1];
          }
        }else if(i == 0){
          if(j == 0){
            neighbors = cells[j+1][i] + cells[j+1][i+1] + cells[j][i+1];
          }else if(j == rows){
            neighbors = cells[j-1][i] + cells[j-1][i+1] + cells[j][i+1];
          }else{
            neighbors = cells[j-1][i] + cells[j+1][i] + cells[j-1][i+1] + cells[j+1][i+1] + cells[j][i+1];
          }
        }else{
          neighbors = cells[j-1][i] + cells[j+1][i] + cells[j-1][i+1] + cells[j+1][i+1] + cells[j-1][i-1] + cells[j+1][i-1] + cells[j][i-1] + cells[j][i+1];
        }
        if(cells[j][i] == 0 && neighbors==3){
          newCells[j].push(1);
        }else if(cells[j][i] == 1 && (neighbors < 2 || neighbors > 3)){
          newCells[j].push(0)
        }else{
          newCells[j].push(cells[j][i])
        }
        //console.log(cells[j][i]+" + "+neighbors+" -> "+newCells[j][i])
      }
    }
    cells = newCells;
  for(j=0;j<=rows;j++){
    for(i=0;i<=cols;i++){
      if(cells[j][i] == 1){
        noStroke();
        fill(255);
        rect(i*cellWidth,j*cellWidth,cellWidth,cellWidth);
      }
    }
  }
}
