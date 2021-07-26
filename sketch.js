var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score = 0;

function setup() 
{
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2, height, width, 20);

  //creates the Divisions
  for (var k = 0; k <= 800; k = k + 80) 
  {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //creates the 1st row of Plinkos
  for (var j = 75; j <= width; j = j+50)
  { 
    plinkos.push(new Plinko(j, 75));
  }

  //creates the 2nd row of Plinkos
  for (var j = 50; j <= width-10; j = j+50) 
  {
    plinkos.push(new Plinko(j, 175));
  }

  //creates the 3rd row of Plinkos
  for(var j = 75; j <= width; j = j+50)
  {
    plinkos.push(new Plinko(j, 275));
  }
  
  //creates the 4th row of Plinkos
  for(var j = 50; j <= width-10; j = j+50)
  {
    plinkos.push(new Plinko(j, 375));
  }    
}

function draw()
{
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();

  //creates the Particles
  if(frameCount%40 === 0)
  {
    particles.push(new Particle(random(0, 800), 0, 9));
  }
  
  //displays the Plinkos 
  for (var i = 0; i < plinkos.length; i++) 
  {
    plinkos[i].display();   
  }
   
  //displays the Divisions
  for (var k = 0; k < divisions.length; k++) 
  {
    divisions[k].display();
  }

  //displays the Paricles 
  for( var k = 0; k < particles.length; k++)
  {
    particles[k].display();
  }
}