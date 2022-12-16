const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
let engine;
let world;
var ground;
var left
var right
var thing, thing2
var ball;
var player, player1, player2

function preload() {
	player1 = loadImage("assets/messi1.png")
	player2 = loadImage("assets/messi2.png")
}

function setup() {
	createCanvas(400,400);
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(200,390,400,20);
    left = new Ground(210, 350, 20, 150)
    right = new Ground(350, 350, 20, 150)
	thing = new Ground(390, 100, 20, 290)
	thing2 = new Ground(250, 30, 20, 50)

	//Create the Bodies Here.
	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.5
	}
	player = createSprite(1, 329, 100);
	player.addAnimation(player1, player2);
	player.scale = 1

	ball = Bodies.circle(70, 355, 20, ball_options);
	World.add(world,ball);
	ellipseMode(RADIUS);

}


function draw () {
	rectMode(CENTER);
	background("#282a36");
	ellipse(ball.position.x,ball.position.y,20);
	fill("#bd93f9")
	ground.show();
	left.show()
	right.show()
	thing.show()
	thing2.show()
	drawSprites();
	Engine.update(engine);
	
}

function keyPressed () {
	if (keyCode === 32) {
		Matter.Body.applyForce(ball, {x:0,y:0}, {x:100,y:-120})
	}
}
