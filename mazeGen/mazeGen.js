function generateMaze(canvas){
  cellWidth = 6;
  wallWidth = 1;
  cellsH = canvas.width; //Number of cells needed to fill the whole canvas
  cellsV = canvas.height;
  maze = []; //each 1 is a wall each 0 is a path
  walls = [];
  for(i=0;i<cellsH;i++){
    maze.push([])
    for(j=0;j<cellsV;j++){
      if(i%(cellWidth+(wallWidth*2)) == 0 || (i-1)%(cellWidth+(wallWidth*2)) == 0 || j%(cellWidth+(wallWidth*2)) == 0 || (j-1)%(cellWidth+(wallWidth*2)) == 0 || i+1==canvas.scrollHeight || j+1==canvas.scrollWidth){
        maze[i].push(1)
      }else{
        maze[i].push(0)
      }
    }
  }
  console.log(maze)
  return(maze);
}




function displayImage(){
  var canvas = document.getElementById('mazeGenerationCanvas');
  var ctx = canvas.getContext('2d');
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerWidth/4;
  ctx.imageSmoothingEnabled = false;
  var maze = generateMaze(canvas);
  var id = ctx.createImageData(1,1);
  var d = id.data;
  //R        G        B        A
  d[0] = 0;d[1] = 0;d[2] = 0;d[3] = 255;
  for(i=0;i<maze.length;i++){
    for(j=0;j<maze[i].length;j++){
      if(maze[i][j] == 1){
        ctx.putImageData(id,i,j)
      }
    }
  }
}

function toggleQuickGen(toggleButton){
  if(toggleButton.innerHTML == 'Quick Generate'){
    interval = setInterval(function(){displayImage()},350); //calling the display image function once every 350 milliseconds
    toggleButton.state = 'on';
    toggleButton.innerHTML = 'Stop Generating';
  }else{
    clearInterval(interval);
    toggleButton.state = 'off';
    toggleButton.innerHTML = 'Quick Generate';
  }
}
