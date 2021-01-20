const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render=Matter.render;

 var engine, world;

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var ground1,ground2,ground3;


function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(100,800,1700,15);
ground2=new Ground(480,650,15,800);
ground3=new Ground(15,480,15,800);
  
  for(var j=40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75))
  }
  for(var i=15; i<=width-10;i=i+50){
    plinkos.push(new Plinko(i,125))
  }
  for(var j=40; j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175))
  }
  for(var i=15; i<=width-10;i=i+50){
    plinkos.push(new Plinko(i,225))
  }
  for(var j=40; j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,275))
  }
  for(var i=15; i<=width-10;i=i+50){
    plinkos.push(new Plinko(i,325))
  }
  for(var j=40; j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,375))
  }
  for(var i=15; i<=width-10;i=i+50){
    plinkos.push(new Plinko(i,425))
  }
  
  for(var k =5;k<=width;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }
}

function draw() {
Engine.update(engine);

if(frameCount%90===0){
  particles.push(new Particle(random(100,350),10,10))
}

background("black"); 
rectMode(CENTER)
ground1.display(); 
ground2.display();
ground3.display();

for(var h=0; h < particles.length; h++){
particles[h].display();
}
for(var k=0; k < divisions.length; k++){
  divisions[k].display();
}
for(var j=0; j < plinkos.length; j++){
  plinkos[j].display();
}
for(var i=0; i < plinkos.length; i++){
  plinkos[i].display();
}
drawSprites();
}