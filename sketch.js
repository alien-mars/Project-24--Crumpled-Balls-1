
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var log1, log2, log3;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,690,800,20);

	paper = new Paper(50,680,40);

	log1 = new Dustbin(550,630,15,100);
	log2 = new Dustbin(700,630,15,100);
	log3 = new Dustbin(625,673,165,15);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  textSize(20);
  fill("lightgreen");
  text("Press Up-Arrow and try to throw the Ball in the Dustbin!",150,200);

  ground.display();
  paper.display();
  log1.display();
  log2.display();
  log3.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if(keyDown("UP_ARROW")){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:-20});
	}
}



