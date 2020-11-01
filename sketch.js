

var car,wall;


var speed, weight; 

function preload(){
	car1=loadImage("car1.png");
	car2=loadImage("car2.png");
	car3=loadImage("car3.PNG");
	car4=loadImage("car4.PNG");
}
function setup() {
  createCanvas(1200, 400);


	speed=random(55,90)
	weight=random(400,1500)


	car=createSprite(50, 200, 50,50);  
	car.addImage(car2); 
	car.scale=0.5
	

	car.velocityX = speed;

	car.shapeColor="blue";

	car.setCollider("circle",0,0,50);
	car.debug=true

  	wall=createSprite(1100,200, 40, height)
	  wall.shapeColor="red"
	  wall.debug=true
}


function draw() {
  background("white");
  console.log(wall.x-car.x)

  if(wall.x-car.x < car.width/2+wall.width/2
  && car.x-wall.x< car.width/2+wall.width/2)
  {
  	car.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22500;
	if(deformation>180)
	{
		car.addImage(car1);
		//car.shapeColor="blue";
	}

	if(deformation<180 && deformation>100)
	{
		car.addImage(car3);
		//car.shapeColor=color(230,230,0);
	}

	if(deformation<100)
	{
		car.addImage(car4);
		//car.shapeColor=color(0,255,0);
	}
  }  
  
  drawSprites();
 
}


