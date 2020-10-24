const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var ground1,trees;
var mango1,mango2,mango3,mango4,mango5;
var stones,man;
var world;
var launchingforce = 100;

function preload (){
man = loadImage("boy.png");
}

function setup() {
createCanvas(1300, 600);

engine = Engine.create();
world = engine.world;

//Create the Bodies Here.
stones = new stone(235,420,30); 
trees = new tree(1050,580); 
ground1 = new ground(width/2,600,width,20); 
mango1 = new mango(1100,100,30); 
mango2 = new mango(1170,130,30); 
mango3 = new mango(1010,140,30); 
mango4 = new mango(1000,70,30); 
mango5 = new mango(1100,70,30); 
launcherObject=new launcher(stones.body,{x:235,y:420})
var render = Render.create({ 
    element: document.body, 
    engine: engine, 
    options: { 
    width: 1300, 
    height: 600, 
    wireframes: false 
    } 
}
);


Engine.run(engine);
}

function draw() {
background(230);
image(man, 200,340,200,300);
stones.display();
trees.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
ground1.display();
launcherObject.display();
detectcollision(stones,mango1);
detectcollision(stones,mango2);
detectcollision(stones,mango3);
detectcollision(stones,mango4);
detectcollision(stones,mango5);
 
}
function mouseDragged(){
Matter.Body.setPosition(stones.body, {x:mouseX , y:mouseY});
    
}
    
function mouseReleased(){
launcherObject.fly();
    
}

function keypressed() {
    if (keyCode === 32){
    Matter.Body.setPosition(stones.body,{x:235, y:420})
    launcherObject.attach(stones.body);
    }
    }

function detectcollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position
    
var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r){
Matter.Body.setStatic(lmango.body,false);
}

}
    