
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject;
var redGround1, redGround2, redGround3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject = new Paper(100, 600, 10);
	
	redGround1 = createSprite(width/2, 660, 200, 20);
	redGround1.shapeColor = color(rgb(255,0,0));

	redGround2 = createSprite(500, 620, 20, 100);
	redGround2.shapeColor = color(rgb(255,0,0));

	redGround3 = createSprite(300,620,20,100);
	redGround3.shapeColor = color(rgb(255,0,0));

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(rgb(150, 53, 39))

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  
  drawSprites();

  paperObject.display();
//   ground.display();
// keyPressed();
 
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:185, y:200}, 50);

}
}



