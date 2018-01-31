// Random Walker
// Using p5.js framework
// JoeJ1

let walkerX;
let walkerY;
let xOff = 100;
let yOff = 0;
let rOff = 0;
let gOff = 5;
let bOff = 10;
let mode = 0;


function setup(){
	canvas = createCanvas(window.innerWidth,window.innerHeight*0.7);
	canvas.parent('canvasContainer');
	background(60);
	walkerX = Math.floor(width/2);
	walkerY = Math.floor(height/2);
}

function draw(){
	if(mode == 0){
		for(i=0;i<100;i++){
			xOff += 0.001;
			yOff += 0.001;

			rOff += 0.0001;
			gOff += 0.0001;
			bOff += 0.0001;
			walkerX+= map(noise(xOff),0,1,-1,1);
			walkerY+= map(noise(yOff),0,1,-1,1);
			strokeWeight(3);
			stroke(map(noise(rOff),0,1,0,255),map(noise(gOff),0,1,0,255),map(noise(bOff),0,1,0,255));
			point(walkerX,walkerY);
			if(walkerX>width-1){
				walkerX = 0;
			}else if(walkerX<0){
				walkerX = width-1;
			}
			if(walkerY>height-1){
				walkerY = 0;
			}else if(walkerY<0){
				walkerY = height-1;
			}
		}
		textSize(height/6);
		textAlign(CENTER);
		text('With Perlin Noise',width/2,height/2);
		fill(255)
	}else if(mode == 1){
		for(i=0;i<100;i++){
			rOff += 0.0001;
			gOff += 0.0001;
			bOff += 0.0001;
			walkerX+= (Math.floor((Math.random()*3))-1)
			walkerY+= (Math.floor((Math.random()*3))-1)
			stroke(map(noise(rOff),0,1,0,255),map(noise(gOff),0,1,0,255),map(noise(bOff),0,1,0,255));
			point(walkerX,walkerY);
			if(walkerX>width-1){
				walkerX = 0;
			}else if(walkerX<0){
				walkerX = width-1;
			}
			if(walkerY>height-1){
				walkerY = 0;
			}else if(walkerY<0){
				walkerY = height-1;
			}
		}
		textSize(height/6);
		textAlign(CENTER);
		text('Completely Random',width/2,height/2);
		fill(255)
	}else if(mode == 2){
		for(i=0;i<100;i++){
			xOff += 0.01;
			yOff += 0.01;

			rOff += 0.0001;
			gOff += 0.0001;
			bOff += 0.0001;
			walkerX+= (Math.floor(noise(xOff)*3)-1);
			walkerY+= (Math.floor(noise(yOff)*3)-1);
			stroke(map(noise(rOff),0,1,0,255),map(noise(gOff),0,1,0,255),map(noise(bOff),0,1,0,255));
			strokeWeight(3);
			point(walkerX,walkerY);
			if(walkerX>width-1){
				walkerX = 0;
			}else if(walkerX<0){
				walkerX = width-1;
			}
			if(walkerY>height-1){
				walkerY = 0;
			}else if(walkerY<0){
				walkerY = height-1;
			}
		}
		textSize(height/6);
		textAlign(CENTER);
		text('Floored Perlin Noise',width/2,height/2);
		fill(255)
	}
}

function changeMode(){
	setup()
	mode = mode +1;
	if(mode>2){
		mode = 0;
	}
	console.log(mode);
}
