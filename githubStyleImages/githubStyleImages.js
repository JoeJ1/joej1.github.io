// Github Style Image Generation
// JoeJ1

function generateImage(width){
  image = []

  for(i=0;i<width;i++){
    image.push([])
    for(j=0;j<width;j++){
      image[i].push(0)
      if(j<width/2){
        image[i][j] = Math.floor((Math.random() * 1)+0.5)
      }else{
        image[i][j] = image[i][width-j-1]
      }
    }
  }
  console.log(image)
  return(image);
}

function displayImage(width){
  image = generateImage(width)
  var canvas = document.getElementById('githubImageCanvas');
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = "#e9e9e9";
  ctx.fillRect(0,0,500,500);
  ctx.fillStyle = "rgb("+Math.floor((Math.random()*255)+1)+","+Math.floor((Math.random()*255)+1)+","+Math.floor((Math.random()*255)+1)+")";
  ctx.strokeStyle = "none"
  for(i=0;i<width;i++){
    for(j=0;j<width;j++){
      if(image[i][j] == 1){
        ctx.fillRect(j*(500/width),i*(500/width),500/width+1,500/width+1)
      }
    }
  }
}

function showVal(){
  document.getElementById('inputDisplay').innerHTML = "size: "+document.getElementById('input').value
}
