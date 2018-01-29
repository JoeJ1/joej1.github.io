//Maze generation with prim's algorithm
//27/01/18

function setup(){
  var cellWidth = int(document.getElementById('input').value); //Width of each cell
  console.log(cellWidth)
  var cols, rows;
  var maze = [];

  var canvas = createCanvas(500,500);
  cols = floor(width/cellWidth);
  rows = floor(height/cellWidth);
  canvas = createCanvas(cols*cellWidth,rows*cellWidth)
  canvas.parent('canvasContainer');

  for(j=0;j<rows;j++){
    maze.push([])
    for(i=0;i<cols;i++){
      var thisCell = new cell(i,j,cellWidth, cols, rows);
      maze[j].push(thisCell);
    }
  }

  thisCell = maze[0][0];
  walls = [thisCell.rightWall, thisCell.bottomWall];
  thisCell.visited = 1;
  while(walls.length>0){
    wallChoice = Math.floor((Math.random()*walls.length));
    wall = walls[wallChoice];
    walls.splice(wallChoice,1);
    //console.log(wall+" "+walls.length+" "+wallChoice+" "+walls[wallChoice])
    if(wall.type == 'top'){
      if(wall.parent.j>0){
        visits = maze[wall.parent.j-1][wall.parent.i].visited + wall.parent.visited;
        if(visits < 2){
          neighbourCell = maze[wall.parent.j-1][wall.parent.i];
          neighbourCell.bottomWall.state = 0;
          neighbourCell.visited = 1;
          wall.parent.visited = 1;
          wall.state = 0;
          if(neighbourCell.topWall.state == 1){
            walls.push(neighbourCell.topWall);
          }
          if(neighbourCell.leftWall.state == 1){
            walls.push(neighbourCell.leftWall);
          }
          if(neighbourCell.rightWall.state == 1){
            walls.push(neighbourCell.rightWall);
          }
        }
      }
    }else if(wall.type == 'right'){
      if(wall.parent.i<rows-1){
        visits = maze[wall.parent.j][wall.parent.i+1].visited + wall.parent.visited;
        if(visits < 2){
          neighbourCell = maze[wall.parent.j][wall.parent.i+1];
          neighbourCell.leftWall.state = 0;
          neighbourCell.visited = 1;
          wall.parent.visited = 1;
          wall.state = 0;
          if(neighbourCell.topWall.state == 1){
            walls.push(neighbourCell.topWall);
          }
          if(neighbourCell.rightWall.state == 1){
            walls.push(neighbourCell.rightWall);
          }
          if(neighbourCell.bottomWall.state == 1){
            walls.push(neighbourCell.bottomWall);
          }
        }
      }
    }else if(wall.type == 'bottom'){
      if(wall.parent.j<cols-1){
        visits = maze[wall.parent.j+1][wall.parent.i].visited + wall.parent.visited;
        if(visits < 2){
          neighbourCell = maze[wall.parent.j+1][wall.parent.i];
          neighbourCell.topWall.state = 0;
          neighbourCell.visited = 1;
          wall.parent.visited = 1;
          wall.state = 0;
          if(neighbourCell.rightWall.state == 1){
            walls.push(neighbourCell.rightWall);
          }
          if(neighbourCell.bottomWall.state == 1){
            walls.push(neighbourCell.bottomWall);
          }
          if(neighbourCell.leftWall.state == 1){
            walls.push(neighbourCell.leftWall);
          }
        }
      }
    }else if(wall.type == 'left'){
      if(wall.parent.i>0){
        visits = maze[wall.parent.j][wall.parent.i-1].visited + wall.parent.visited
        if(visits < 2){
          neighbourCell = maze[wall.parent.j][wall.parent.i-1]
          neighbourCell.rightWall.state = 0;
          neighbourCell.visited = 1;
          wall.parent.visited = 1;
          wall.state = 0;
          if(neighbourCell.topWall.state == 1){
            walls.push(neighbourCell.topWall);
          }
          if(neighbourCell.bottomWall.state == 1){
            walls.push(neighbourCell.bottomWall);
          }
          if(neighbourCell.rightWall.state == 1){
            walls.push(neighbourCell.rightWall);
          }
        }
      }
    }
  }
  background(60);
  for(j=0;j<maze.length;j++){
    for(i=0;i<maze[j].length;i++){
      maze[j][i].display();
    }
  }
}

function draw(){

}



function cell(i, j, cellWidth, cols, rows){
  this.i = i; // position in maze array
  this.j = j;
  this.topWall={state: 1, parent: this, type: 'top'} // state of 1 means wall exists 0 means wall doesn't exist
  this.rightWall={state: 1, parent: this, type: 'right'}
  this.leftWall={state: 1, parent: this, type: 'left'}
  this.bottomWall={state: 1, parent: this, type: 'bottom'}
  this.visited = 0;


  this.display = function(){
    var x = this.i*cellWidth; // cell position in canvas
    var y = this.j*cellWidth;
    // Top wall
    stroke(255,255,255,this.topWall.state*255);
    line(x,y,x+cellWidth,y);
    // Right wall
    stroke(255,255,255,this.rightWall.state*255);
    line(x+cellWidth,y,x+cellWidth,y+cellWidth);
    // Left wall
    stroke(255,255,255,this.leftWall.state*255);
    line(x,y,x,y+cellWidth);
    // Bottom wall
    stroke(255,255,255,this.bottomWall.state*255);
    line(x,y+cellWidth,x+cellWidth,y+cellWidth)
    if(i == rows-1 && j == cols-1){
        fill(0,255,0)
        noStroke()
        rect(x+1,y+1,cellWidth-1,cellWidth-1);
        console.log('yup')
    }
  }

}

function controller(i, j, cellwidth, cols, rows){
  //Moved by keyboard through maze to finish
}

function showVal(){
  //Showing the slider's value
  document.getElementById('inputDisplay').innerHTML = "size: "+document.getElementById('input').value
}
