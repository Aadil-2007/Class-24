const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground,pig1;

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,500,50,50);
    box2 = new Box(900,500,50,50);
    ground = new Ground(500,height,1000,20)
    pig1 = new Pig(800,500);
    log1= new Logs(800,450,250,PI/2);
    bird1= new Bird(100,400);
    box3 = new Box(700,400,50,50);
    box4 = new Box(900,400,50,50);
    pig2 = new Pig(800,400);
    log2 = new Logs(800,350,250,PI/2);
    box5 = new Box(800,300,50,50);
    log3 = new Logs(730,250,200,PI/7);
    log4 = new Logs(870,250,200,-PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    bird1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}