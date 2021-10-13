var ship;
var sea;
function preload(){
shipAnim = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaBg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,50,50);
  sea.addImage(seaBg)
  sea.scale=0.3;
  ship = createSprite(100,220,15,15);
  ship.addAnimation("shipAnimat",shipAnim);
  ship.scale=0.2;
  
}

function draw() {
  background(180);
  drawSprites();
  sea.velocityX=-5
  if (sea.x <-220) {
    sea.x=600;
  }
}