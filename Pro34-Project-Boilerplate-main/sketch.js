
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wollon,wollonImg
var mew,mewImg,mewFalling
var backgroundImg

function preload() {
  backgroundImg=loadImage("New folder(2)/beach.png")
}

function setup() {
  createCanvas(400,400);
   
  engine = Engine.create();
  world = engine.world;
  


}


function draw() 
{
  background(51);
  image(backgroundImg,0,0,400,400);
  Engine.update(engine);
  
}

