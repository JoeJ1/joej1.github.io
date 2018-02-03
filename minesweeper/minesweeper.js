// Minesweeper clone
// Using p5.js framework
// JoeJ1

let overlay = []; // Whether or not each cell should be seen or flagged (0 = unseen, 1 = flagged, 2 = shown)
let cells = []; // The value of each cell, calculated on how many mines are around it (-1 = bomb, all other numbers = amount of mines in neighboring cells)
let cellWidth; // The width of each cell (no height value because the cells are always squares)
let mines = []; // All the mines (0 = no mine, 1 = mine)
let minesAmount = 0;


function setup(){
  cells = [];
  mines = [];
  overlay = [];
  cellWidth = 26;
  var canvas = createCanvas(window.innerHeight*0.7,window.innerHeight*0.7);
  cols = floor(width/cellWidth);
  rows = floor(height/cellWidth);
  canvas = createCanvas((cols)*cellWidth,(rows)*cellWidth)
  canvas.parent('canvasContainer');
  background(60);
  for(let x=0; x<cols; x++){ // Initialising arrays
    cells.push([]);
    overlay.push([]);
    mines.push([]);
    for(let y=0; y<rows; y++){
      cells[x].push(0);
      overlay[x].push(0);
      mines[x].push(0);
    }
  }
  for(let x=0; x<cols; x++){ // Calculating array values
  	for(let y=0; y<rows; y++){
  		let randNo = Math.random()*100;
  		if(randNo<=15){ // Percentage chance of cell being a mine
  			mines[x][y] = 1;
        minesAmount++;
  			if(x>0){
  				cells[x-1][y] += 1; // Left/West cell
  				if(y!=0){
  					cells[x-1][y-1] += 1; // Top-Left/North-West cell
  				}
          if(y != rows-1){
  					cells[x-1][y+1] += 1; // Bottom-Left/South-West cell
  				}
  			}
  			if(x <cols-1){
  				cells[x+1][y] += 1; // Right/East cell
  				if(y!=0){
  					cells[x+1][y-1] += 1; // Top-Right/North-East cell
  				}
  			}
  			if(y <rows-1){
  				cells[x][y+1] += 1; // Bottom/South cell
          if(x<cols-1){
            cells[x+1][y+1] += 1; // Bottom-Right/South-East cell
          }
  			}
  			if(y> 0){
  				cells[x][y-1] += 1; // Top/North cell
  			}
  		}
  	}
  }
  update();
}

function overlayZero(x, y){
  if(x>0){
    if(overlay[x-1][y] != 2){
      overlay[x-1][y] = 2; // Left/West cell
      if(cells[x-1][y] == 0){overlayZero(x-1,y)}
    }
    if(y!=0){
      if(overlay[x-1][y-1] != 2){
        overlay[x-1][y-1] = 2; // Top-Left/North-West cell
        if(cells[x-1][y-1] == 0){overlayZero(x-1,y-1)}
      }
    }
    if(y != rows-1){
      if(overlay[x-1][y+1] != 2){
        overlay[x-1][y+1] = 2; // Bottom-Left/South-West cell
        if(cells[x-1][y+1] == 0){overlayZero(x-1,y+1);}
      }
    }
  }
  if(x <cols-1){
      if(overlay[x+1][y] != 2){
        overlay[x+1][y] = 2; // Right/East cell
        if(cells[x+1][y] == 0){overlayZero(x+1,y)}
      }
    if(y!=0){
      if(overlay[x+1][y-1] != 2){
        overlay[x+1][y-1] = 2; // Top-Right/North-East cell
        if(cells[x+1][y-1] == 0){overlayZero(x+1,y-1)}
      }
    }
  }
  if(y <rows-1){
    if(overlay[x][y+1] != 2){
      overlay[x][y+1] = 2; // Bottom/South cell
      if(cells[x][y+1] == 0){overlayZero(x,y+1)}
    }
    if(x<cols-1){
      if(overlay[x][y+1] != 2){
        overlay[x+1][y+1] = 2; // Bottom-Right/South-East cell
        if(cells[x+1][y+1] == 0){overlayZero(x+1,y+1)}
      }
    }
  }
  if(y> 0){
    if(overlay[x][y-1] != 2){
      overlay[x][y-1] = 2; // Top/North cell
      if(cells[x][y-1] == 0){overlayZero(x,y-1)}
    }
  }
}

function updateOverlay(button){
  console.log(button)
  let x = Math.floor(mouseX/cellWidth);
  let y = Math.floor(mouseY/cellWidth);
  console.log(x+" "+y)
  console.log(mines[x][y])
  console.log(mines)
  if(button == 0){ // Left mouse button
    overlay[x][y] = 2;
    update();
    if(mines[x][y] == 1){
      overlay[x][y] = 2;
      for(let i=0; i<cols; i++){
        for(let j=0; j<cols; j++){
          overlay[i][j] = 2;
        }
      }
      update();
      fill(255,0,0);
      stroke(255,0,0);
      textSize(width/6);
      text("GAME OVER", width/2, height/2);
    }else{
      overlay[x][y] = 2;
      if(cells[x][y] == 0){
        overlayZero(x, y);
      }
      update();
    }
  }else if(button == 2){
    if(overlay[x][y] != 2){
      overlay[x][y] = 1;
      update();
    }
  }
}

function update(){
  for(let x=0; x<cols; x++){ // displaying cells
    for(let y=0; y<rows; y++){
      fill(200);
      stroke(0);
      rect(x*cellWidth,y*cellWidth,cellWidth,cellWidth);
      textSize(cellWidth*0.7);
      textAlign(CENTER);
      if(mines[x][y] == 1){
        fill(255,0,0);
        stroke(255,0,0);
        text('X',(x+1)*cellWidth-(cellWidth/2),(y+1)*cellWidth-(cellWidth*0.3));
      }else if(cells[x][y] == 0){
        // I didn't need this if statement out but I kept it for consistency
      }else if(cells[x][y] == 1){
        fill(100,100,255);
        stroke(100,100,255);
        text(cells[x][y].toString(),(x+1)*cellWidth-(cellWidth/2),(y+1)*cellWidth-(cellWidth*0.3));
      }else if(cells[x][y] == 2){
        fill(100,255,100);
        stroke(100,255,100);
        text(cells[x][y].toString(),(x+1)*cellWidth-(cellWidth/2),(y+1)*cellWidth-(cellWidth*0.3));
      }else if(cells[x][y] == 3){
        fill(255,100,100);
        stroke(255,100,100);
        text(cells[x][y].toString(),(x+1)*cellWidth-(cellWidth/2),(y+1)*cellWidth-(cellWidth*0.3));
      }else if(cells[x][y] == 4){
        fill(0,0,200);
        stroke(0,0,200);
        text(cells[x][y].toString(),(x+1)*cellWidth-(cellWidth/2),(y+1)*cellWidth-(cellWidth*0.3));
      }else if(cells[x][y] == 5){
        fill(255,0,0);
        stroke(255,0,0);
        text(cells[x][y].toString(),(x+1)*cellWidth-(cellWidth/2),(y+1)*cellWidth-(cellWidth*0.3));
      }else if(cells[x][y] == 6){
        fill(0,100,200);
        stroke(0,100,200);
        text(cells[x][y].toString(),(x+1)*cellWidth-(cellWidth/2),(y+1)*cellWidth-(cellWidth*0.3));
      }else if(cells[x][y] == 7){
        fill(0);
        stroke(0);
        text(cells[x][y].toString(),(x+1)*cellWidth-(cellWidth/2),(y+1)*cellWidth-(cellWidth*0.3));
      }else if(cells[x][y] == 8){
        fill(100);
        stroke(100);
        text(cells[x][y].toString(),(x+1)*cellWidth-(cellWidth/2),(y+1)*cellWidth-(cellWidth*0.3));
      }
    }
  }
  /*for(let x=0; x<cols; x++){ // Displaying overlay
    for(let y=0; y<rows; y++){
      if(overlay[x][y] == 0){
        fill(170);
        stroke(0);
        rect(x*cellWidth,y*cellWidth,cellWidth,cellWidth);
      }else if(overlay[x][y] == 1){
        fill(170);
        stroke(0);
        rect(x*cellWidth,y*cellWidth,cellWidth,cellWidth);
        stroke(255,100,100);
        fill(255,100,100);
        text('⚑ ',(x+1)*cellWidth-(cellWidth/2),(y+1)*cellWidth-(cellWidth*0.3));
      }
    }
  }
  discoveredMines = 0
  for(let x=0; x<cols; x++){ // Checking if the player has won
    for(let y=0; y<rows; y++){
      if(mines[x][y] == 1){
        if(overlay[x][y] == 1){
          discoveredMines++;
        }
      }
    }
  }
  if(discoveredMines == minesAmount){
    fill(255,0,0);
    stroke(255,0,0);
    textSize(width/6);
    text("YOU WIN!!", width/2, height/2);
  }*/
}
