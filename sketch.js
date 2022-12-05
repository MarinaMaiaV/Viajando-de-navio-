var sea , ship;
var seaImg , shipImg1;
function preload(){

  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite (400,200);
  sea.addImage(seaImg);
  sea.scale = 0.3;
  sea.velocityX = -5;
  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("ship" , shipImg1);
  ship.scale = 0.25;
  

  
}

function draw() {
  background(0);
  sea.velocityX = -3;  
  if(sea.x< 0){
     sea.x = 200;
  }
  
  drawSprites();

}
