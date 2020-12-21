const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine , world;
var holder,ball,ground;
var stand1,stand2,slingshot;
var polyI;

function preload(){
    polyI = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(900,400);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground();

    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,200,10);

    box1 = new Box(300,275,30,40);
    box2= new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40);

    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
    box12 = new Box(450,235,30,40);

    box13 = new Box(360,195,30,40);
    box14 = new Box(390,195,30,40);
    box15 = new Box(420,195,30,40);

    box16 = new Box(390,155,30,40);

    block1 = new Box(640,175,30,40);
    block2 = new Box(670,175,30,40);
    block3 = new Box(700,175,30,40);
    block4 = new Box(730,175,30,40);
    block5 = new Box(760,175,30,40);

    block6 = new Box(670,135,30,40);
    block7 = new Box(700,135,30,40);
    block8 = new Box(730,135,30,40);

    block9 = new Box(700,95,30,40);

    ball = Bodies.circle(50,200,20);
    World.add(world,ball);

    slingshot = new Slingshot(this.ball , {x:100 , y:200});

    Engine.run(engine);

}

function draw(){
    background(0);

    Engine.update(engine);

    textSize(20);
    fill("lightyellow");
    text("DRAG THE HEXAGONAL STONE AND RELEASE IT TO LAUNCH TOWARDS THE BLOCKS" , 40,30);

    ground.display();

    stand1.display();
    stand2.display();

    strokeWeight(2);
    stroke(15);
    fill("skyblue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    fill("pink");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    fill("turquoise");
    box13.display();
    box14.display();
    box15.display();
   
    fill("grey");
    box16.display();
    
    fill("skyblue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();

    fill("turquoise")
    block6.display();
    block7.display();
    block8.display();

    fill("pink");
    block9.display();

    fill("gold");
    imageMode(CENTER);
    image(polyI , ball.position.x , ball.position.y , 40 , 40);

    slingshot.display();
}

function mouseDragged(){
	Matter.Body.setPosition(this.ball , {x:mouseX, y:mouseY}) 
}

function mouseReleased(){
	slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.ball);
    }
}