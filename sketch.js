
  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var destiny
var wizard1,wizard2
var fire
var thunder

function preload(){
 destinyImage=loadImage("shadow fighter.jpg")
backgroundImage=loadImage("background1.jpg")
wizard1Image=loadImage("fire wizard.jpg")
wizard2Image=loadImage("thunder wizard.jpg")
fireImage=loadImage("fire.png")
thunder=loadImage("thunder.jpg")
}
function setup() {
  createCanvas(800,400);
 
  engine = Engine.create();
  world = engine.world;
  
  destiny=createSprite(60,200,50,50);
  destiny.addImage("shadow fighter",destinyImage)
  destiny.scale=0.59
  wizard1=createSprite(660,200,45,45)
  wizard1.addImage("firewizard",wizard1Image)
  wizard1.scale=0.1
wizard2=createSprite(350,200,45,45)
wizard2.addImage("thunderwizard",wizard2Image)
wizard2.scale=0.18

}

function draw() {
  background(backgroundImage)  
  Engine.update(engine);
// moving destiny with arrow keys
if(keyDown("right")){
  destiny.x=destiny.x+4
}
if(keyDown("left")){
  destiny.x=destiny.x-4
}
if(keyDown("up")){
  destiny.y=destiny.y-4
}
if(keyDown("down")){
  destiny.y=destiny.y+4
}
if(destiny.isTouching(wizard1)){
 fireAttack()
}

  drawSprites();
}

function fireAttack(){
  if(frameCount % 60 === 0) {
    fire=createSprite(700,180,25,25)
    fire.addImage(fireImage)
    fire.scale=0.05
    fire.velocityX=-3
  }


   
 }
 


