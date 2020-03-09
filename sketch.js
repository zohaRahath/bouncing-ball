

const World=Matter.World
const Bodies=Matter.Bodies
const Engine=Matter.Engine

var engine,bodies,world,ground


function setup() {
  createCanvas(400,400);
  // createSprite(200, 200, 100,100);

  engine=Engine.create()
  world=engine.world
  var szm={
isStatic:true
  }
  var mzs={
restitution:2.5,
density:0.25,
friction:1

  }
  bodies=Bodies.circle(100,100,50,mzs);
  ground=Bodies.rectangle(0,390,400,10,szm);
  World.add(world,bodies)
  World.add(world,ground)
  console.log(bodies.position.x);
}

function draw() {
  background(0,0,255); 
Engine.update(engine)
  ellipseMode(CENTER)
  ellipse(bodies.position.x,bodies.position.y,150,100);
rect(ground.position.x,ground.position.y,400,10);














  // drawSprites();














}