var ship;
var sea;
function preload(){
ship_running = loadImage("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(1200,800)

 // sea = createSprite(200,200)
//sea.addImage(seaImage)
  ship = createSprite(60,265,20,200); 
  ship .addImage(ship_running)
  ship.scale=0.3;
  ship.x=200

}


function draw() {
  background(seaImage);
 drawSprites();
}