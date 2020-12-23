const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground1= new Ground(600,580,1200,20)
    

   
}

function draw(){
    background(0);
    Engine.update(engine);


    ground1.display();
   
}