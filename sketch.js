const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render= Matter.Render;
var dustbinObj, paperObject, groundObject;

var  world;

function setup() {
	createCanvas(1600, 700);
rectMode(CENTER)
	engine = Engine.create();
	world = engine.world;

	paperObject=new Paper(200,450,30);
	groundObject=new Ground(width/2,670,width,50);
	dustbinObj=new Bin(1200,650);

//ustbinObj=new Bin(1200,650);
    
var render= Render.create({
element: document.body,
engine: engine,
options: {
	width: 1600,
	height: 700,
	wireFrames: false
}
});
Engine.run(engine);
Render.run(render);
}


function draw() {
rectMode(CENTER);

background(230);



paperObject.display();
groundObject.display();
dustbinObj.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});	
	}
};


