const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5
var roof;
var bobDiameter = 65;

function preload()
{
	
}

function setup() {
	createCanvas(900, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	// Creating Bobs
	bobObject1 = new Bob(width/2-180, height/2+220, bobDiameter);
	bobObject2 = new Bob(width/2-95, height/2+220, bobDiameter);
	bobObject3 = new Bob(width/2-10, height/2+220, bobDiameter);
	bobObject4 = new Bob(width/2+75, height/2+220, bobDiameter);
	bobObject5 = new Bob(width/2+160, height/2+220, bobDiameter);
	
	// Creating Ground
	roof = new Roof(width/2, height/2-250, 650, 20);

	// Creating rope
	rope1 = new Chain(bobObject1.body, roof.body, -bobDiameter*2, 0)
	rope2 = new Chain(bobObject2.body, roof.body, -bobDiameter*1, 0)
	rope3 = new Chain(bobObject3.body, roof.body, -bobDiameter*0, 0)
	rope4 = new Chain(bobObject4.body, roof.body, -bobDiameter*-1, 0)
	rope5 = new Chain(bobObject5.body, roof.body, -bobDiameter*-2, 0)

	// Slingshot = new SlingShot(bobObject1.body,{x:200, y:50});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.debug=true;
  
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW)
  {
	  Matter.Body.applyForce(bobObject1.body, bobObject1.body.position,{x:-50*7/3,y:-45*7/3})
  }
}

// DONE
