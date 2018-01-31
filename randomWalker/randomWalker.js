// Random Walker
// Using p5.js framework
// JoeJ1

let walkerX;
let walkerY;

function setup(){
	canvas = createCanvas(window.innerWidth,window.innerHeight*0.7);
	canvas.parent('canvasContainer');
	background(60);
	walkerX = Math.floor(width/2);
	walkerY = Math.floor(height/2);
}

function draw(){
	for(i=0;i<100;i++){
		walkerX = walkerX + Math.floor((Math.random()*3)-1);
		walkerY = walkerY + Math.floor((Math.random()*3)-1);
		stroke(255);
		point(walkerX,walkerY);
		if(walkerX>width-1){
			walkerX = 0;
		}else if(walkerX<0){
			walkerX = width;
		}
		if(walkerY>height-1){
			walkerY = 0;
		}else if(walkerY<0){
			walkerY = height-1;
		}
	}
}
