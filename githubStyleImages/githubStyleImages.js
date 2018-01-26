// Github Style Image Generation
// JoeJ1

function generateImage(width){
  image = [];
  cells = 0;
  for(i=0;i<width;i++){
    image.push([])
    for(j=0;j<width;j++){
      image[i].push(0)
      if(j<width/2){
        //Generate a random number, 1 or 0. 1 being a coloured-in cell 0 being an empty cell
        rand = Math.floor((Math.random() * 1)+0.5);
        if(rand == 1){cells++}
        image[i][j] = rand;
      }else{
        //mirroring image
        image[i][j] = image[i][width-j-1];
      }
    }
  }
  //Making sure the picture isn't too full or too empty
  if(cells<3 || cells>(width*(width/2))){image = generateImage(width)}
  console.log(cells)
  return(image);
}

function displayImage(width){
  image = generateImage(width)
  var canvas = document.getElementById('githubImageCanvas');
  var ctx = canvas.getContext('2d');
  //Clearing Canvas
  ctx.fillStyle = "#e9e9e9";
  ctx.fillRect(0,0,500,500);
  //Generating random colour for cells
  ctx.fillStyle = "rgb("+Math.floor((Math.random()*255)+1)+","+Math.floor((Math.random()*255)+1)+","+Math.floor((Math.random()*255)+1)+")";
  for(i=0;i<width;i++){
    for(j=0;j<width;j++){
      if(image[i][j] == 1){
        //Placing coloured cell in corresponding spot if a 1 is there
        ctx.fillRect(j*(500/width),i*(500/width),500/width+1,500/width+1)
      }
    }
  }
}

function showVal(){
  //Showing the slider's value
  document.getElementById('inputDisplay').innerHTML = "size: "+document.getElementById('input').value
}
