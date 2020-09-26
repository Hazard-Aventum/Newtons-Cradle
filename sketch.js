const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Constraint = Matter.Constraint;

var roof;

var bobObject1, rope1;
var bobObject2, rope2;
var bobObject3, rope3;
var bobObject4, rope4;
var bobObject5, rope5;

var ball;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);
  rectMode(CENTER);
	engine = Engine.create();
  world = engine.world;
  var bobDiameter = 40;
  
  roof = new Roof(475,50,1000,50);

	//Create the Bodies Here.
  bobObject1 = new Ball(200,350,97);
  bobObject2 = new Ball(300,350,97);
  bobObject3 = new Ball(400,350,97);  
  bobObject4 = new Ball(500,350,97);
  bobObject5 = new Ball(600,350,97);

  rope1 = new Rope(bobObject1.body,roof.body,-bobDiameter*6.8,0);
  rope2 = new Rope(bobObject2.body,roof.body,-bobDiameter*4.3,0);
  rope3 = new Rope(bobObject3.body,roof.body,-bobDiameter*1.8,0);
  rope4 = new Rope(bobObject4.body,roof.body,bobDiameter*0.7,0);
  rope5 = new Rope(bobObject5.body,roof.body,bobDiameter*3.1,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === 37){
    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-200,y:-100});
  }
}