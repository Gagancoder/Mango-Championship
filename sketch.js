
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint  = Matter.Constraint;

var tree, treeImg, boy, boyImg;
var BGimg;

function preload()
{
 treeImg = loadImage("tree.png");
 boyImg = loadImage("boy.png");
 BGimg = loadImage("Background.jpg")
}

function setup()
 {
	createCanvas(1540, 760);

	engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
    tree = createSprite(750,530,20,20);
	tree.addImage(treeImg);
	tree.scale = 0.4;

    boy = createSprite(200,690,20,20);
	boy.addImage(boyImg);
	boy.scale = 0.1;
	
	ground = new Ground(500,765,2100,20);
  stone = new Stone(200,360,70);
	string = new Slingshot(stone.body,{x:145, y:630});
	mango1 = new Mango(700,400,40);
	mango2 = new Mango(760,460,40);
	mango3 = new Mango(800,520,40);
	mango4 = new Mango(675,530,40);
	mango5 = new Mango(900,510,40);
	mango6 = new Mango(870,450,40);
	mango7 = new Mango(550,500,40);
	mango8 = new Mango(800,350,40);
	mango9 = new Mango(730,410,40);
	mango10 = new Mango(720,360,40);
	mango32 = new Mango(830,460,40);
	mango43 = new Mango(645,480,40);
	mango54 = new Mango(950,470,40);
	mango65 = new Mango(870,450,40);
	mango76 = new Mango(550,500,40);
	mango87 = new Mango(800,350,40);
	
	
	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(BGimg);

  drawSprites();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango32.display();
  mango43.display();
  mango54.display();
  mango65.display();
  mango76.display();
  mango87.display();
  string.display();
 //ground.display();
  stone.display();  

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango10);
  detectCollision(stone,mango9);
  detectCollision(stone,mango32);
  detectCollision(stone,mango43);
  detectCollision(stone,mango54);
  detectCollision(stone,mango65);
  detectCollision(stone,mango76);
  detectCollision(stone,mango87);

textSize(18);
textFont("Georgia");
textStyle(BOLD);
text("Press space to get a one more chance to play!!",10,20);

}


function mouseDragged()
{
 Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased()
{
 string.fly();
}

function detectCollision(lstone, lmango)
{
 mangoBodyPosition = lmango.body.position
 stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y)
  
  if(distance<=lmango.r+lstone.r)
  {
	  Matter.Body.setStatic(lmango.body, false);
  }

}

function keyPressed(){
	if(keyCode === 32)
	{
		Matter.Body.setPosition(stone.body,{x:235, y:420})
		string.attach(stone.body);
  }
  
  if(keyCode === space){
    stone.x=200;
    stone.y=200;
  }
}
