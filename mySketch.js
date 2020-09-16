var rabbirImg, mooncakeImg
var mooncakeWin = false
var mooncakeSize = 1, mooncakeTargetSize = 1
function preload(){
	rabbirImg = loadImage("ribit.png")
	mooncakeImg = loadImage("mooncake.png")
}
var rabbit
var rabArray=[]
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
		for(var i=0;i<50;i++){
		let rabbit = new Rabbit({
			p: createVector(random(width),random(height)),
			v: createVector(random(0,1),0),
			scale:random(0.5,1),
			img: rabbirImg
			

		})
		rabArray.push(rabbit)
	}
}
function windowResized(){
	resizeCanvas(windowWidth,windowHeight)
}
function draw() {
	background(0)
	imageMode(CENTER)
	for(let rabbit of rabArray){
	rabbit.updete()
	rabbit.draw()
	}
	// imageMode(CENTER)
	// let sizeW = 80
	// fill(230,220,41,200)
	// ellipse(width/2,height/2,500*sin(frameCount/100))
// 	for(var o=0;o<height;o+=sizeW){
// 		for(var i=0;i<=width;i+=sizeW*2){
// 			push()
// 				translate(i,o)
// 				scale(1)
// 				rotate(sin(frameCount/100+i+o))
// 				translate(0,sin(frameCount/100+i+o)*100)
// 				// translate(random(-1,1),random(-1,1))
// 				image(rabbirImg,0,0,sizeW*1.5,sizeW)
// 			pop()

// 		}
// 	}
	if (mooncakeWin){
		mooncakeTargetSize =2
	}else{
		mooncakeTargetSize =1
	}
	mooncakeSize = lerp(mooncakeSize,mooncakeTargetSize,0.1)
	print(mooncakeTargetSize)
	push()
	translate(mouseX,mouseY)
	scale(0.5)
	scale(mooncakeSize)
	image(mooncakeImg,0,0,150,150)
	pop()
	if(frameCount%30==0){
			mooncakeWin = false
	}
}
 function mousePressed(){
 	mooncakeWin = true
 	
 }