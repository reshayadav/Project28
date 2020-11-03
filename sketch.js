
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;
var mConstraint;
var ground;
var tree;
var stone;
var boy;
var slingshot;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;

function preload()
{
   boy = loadImage("Pluckingmangoes/boy.png");
}

function setup() {
	var canvas= createCanvas(850, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(425,490,850,20);
	tree = new Tree(650,260,10,19);
	stone = new Stone(160,335,30);
	mango1 = new Mango(700,80,20);
	mango2 = new Mango(620,125,20);
	mango3 = new Mango(530,185,20);
	mango4 = new Mango(590,230,20);
	mango5 = new Mango(760,135,20);
	mango6 = new Mango(780,216,20);
	mango7 = new Mango(660,170,20);

    slingshot  = new Slingshot(stone.body,{x:160,y:335});

	var canvasMouse = Mouse.create(canvas.elt);
    var options={
        mouse: canvasMouse
    }
    mConstraint= MouseConstraint.create(engine,options);
	World.add(world,mConstraint);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  slingshot.display();
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  image (boy,240,405,250,300); 
  stone.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
 detectCollision(stone,mango5);
 detectCollision(stone,mango6);
 detectCollision(stone,mango7);

}

//  function mouseDbodragged(){
//  	Body.setPosition(stone.y,{x: mouseX, y:mouseY});
// }

function mouseReleased(){
	setTimeout(function(){
	slingshot.fly();
	},100);
}

function keyPressed(){
	if(keyCode === 32){
		Body.setPosition(stone.body, {x:160, y:335});
	    slingshot.attach(stone.body);
	}
}

function detectCollision(lstone,lmango){
  
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;
	
	var distance =dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

