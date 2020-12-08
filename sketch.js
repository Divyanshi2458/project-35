var dog,dogimg, happyDog, database, foodS, foodStock
var  database

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  dogimg=loadImage("images/doglmg.png")
  happyDog=loadImage("images/doglmg1.png")
}

function setup() {

	createCanvas(500, 500);
  database = firebase.database();
dog=createSprite(200, 100, 20,20);
dog.addImage(dogimg)
dog.scale=0.2

  foodStock=database.ref('Food')
  foodStock.on("value")
	

	


	Engine.run(engine);
  
}


function draw() {

  background(46,139,87);
 if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(happyDog)
 }
  
  
  drawSprites();
  
  
 
}

