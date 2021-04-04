var fixSprite1, fixSprite2, fixSprite3, fixSprite4;
var movingSprite;
var music;

function preload(){
music=loadSound("music.mp3");
}

function setup(){
    
    createCanvas(800,600);

    

    movingSprite=createSprite(random(10,750),300,20,20);
    movingSprite.shapeColor="white";
    movingSprite.velocityX=6;
    movingSprite.velocityY=6;

   
    fixSprite1=createSprite(100,590,180,20);
    fixSprite1.shapeColor="red";

    fixSprite2=createSprite(300,590,180,20);
    fixSprite2.shapeColor="green";

    fixSprite3=createSprite(500,590,180,20);
    fixSprite3.shapeColor="blue";

    fixSprite4=createSprite(700,590,180,20);
    fixSprite4.shapeColor="yellow";

    

}

function draw() {
  background(rgb(10,10,10));
   
   
    if(movingSprite.x<0){
      music.stop()
        movingSprite.velocityX=6
    }
     if(movingSprite.x>800){
      music.stop()
        movingSprite.velocityX=-6
    }
   
  if(movingSprite.isTouching(fixSprite4)){
    music.play()
    movingSprite.shapeColor="yellow";
    movingSprite.bounceOff(fixSprite4)
    
  }
  
   if(movingSprite.isTouching(fixSprite3)){
    music.stop()
    movingSprite.shapeColor="blue";
    movingSprite.bounceOff(fixSprite3)
   
  }
    
   if(movingSprite.isTouching(fixSprite2)){
    music.stop()
    movingSprite.shapeColor="green";
    movingSprite.bounceOff(fixSprite2)
    movingSprite.velocityX=0;
    movingSprite.velocityY=0;
  }
  
   if(movingSprite.isTouching(fixSprite1)){
    music.stop()
    movingSprite.shapeColor="red";
    movingSprite.bounceOff(fixSprite1)
  }

  if (movingSprite.y<0){
    music.stop()
    movingSprite.velocityY=6
  }

  
    drawSprites()
}