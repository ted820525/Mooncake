class Rabbit{
	constructor(args){
		this.p = args.p
		this.v = args.v || createVector(1,-1)
		this.scale = args.scale
		this.img = rabbirImg
	
	}
draw(){
	let  ang =this.v.heading()
	push()
		imageMode(CENTER)
		translate(this.p.x,this.p.y)
	  scale(0.2)
		scale(this.scale)
		rotate(ang)
		image(this.img,200,300)
	pop()
	
}
	updete(){
	this.p.add(this.v)
		let d =dist(mouseX,mouseY,this.p.x,this.p.y)
		if (d<200){
			this.v = p5.Vector.random2D().mult(10)
			mooncakeWin =true
		}
	}
}