var boat, boatImg;
var sea, seaImg;
var keyIsPressed;
var keyReleased;
var boatAnimation;

function preload(){
boatImg = loadImage("ship1.png");
seaImg = loadImage("sea.png");
boatAnimation = loadAnimation("ship1.png", "ship2.png");
}

function setup(){
  createCanvas(400,400);
  boat = createSprite(100,300,30,30);
  boat.addAnimation("boatAnimation",boatAnimation);
  boat.scale = 0.2;
  
}

function draw() {
  background(seaImg);
  
  



  move()






  drawSprites()
}
function move () {

  if (keyIsPressed){
    if (keyCode === RIGHT_ARROW){
      boat.x = boat.x +1;
    }
   }
  else if (keyReleased){
    if (keyCode === RIGHT_ARROW) {
      boat.x = boat.x +0; 
    }
  }
}

