var asteroid, asteroidImage, asteroidGroup
var asteroid22, asteroid22Group
var earth, earthImage
var heart, heartImage
var laser, laserImage, laserGroup
var spaceship, shipImage
var spaceImage  
var score



function preload (){
    spaceImage = loadImage("images/space.jpeg")
    shipImage = loadImage("images/spaceship.png")
    laserImage = loadImage("images/laser.png")
    heartImage = loadImage("images/heart1.png")
    earthImage = loadImage("images/earth.png")
    asteroidImage = loadImage("images/asteroid1.png")
    explosion = loadImage("images/burst 1.png")

}
function setup (){
 createCanvas(1500,700);
   earth=createSprite(750, 600)
   earth.scale=2
   earth.addImage(earthImage) 
   spaceship=createSprite(750,550)
   spaceship.addImage(shipImage)
   spaceship.scale=0.2

   laserGroup = new Group();
   asteroidGroup = new Group();
   asteroid22Group = new Group();
   

}
function draw(){
    background (spaceImage)
    if(keyDown("A")){
     spaceship.x=spaceship.x-15
    }
    if(keyDown("D")){
        spaceship.x=spaceship.x+15

    }

    if(keyWentDown("SPACE")){
        spawnLaser();
        
    }
    
    if(asteroidGroup.isTouching(laserGroup)){
      asteroidGroup.destroyEach()

    }
    if(asteroid22Group.isTouching(laserGroup)){
        asteroid22Group.destroyEach()
  
      }

      if(spaceship.isTouching(asteroid22Group)||spaceship.isTouching(asteroidGroup)){
            //spaceship.destroy()
            spaceship.addImage(explosion)

      }

    spawnAsteroid();
    spawnAsteroid2();
        drawSprites();
}


function spawnLaser(){
    laser=createSprite(spaceship.x,spaceship.y-20)
    laser.velocityY=-30
    laser.addImage(laserImage)
    laser.scale=0.2

    laser.lifetime=17
    laserGroup.add(laser)
    

}
function spawnAsteroid(){
   if(frameCount%175===0){
       asteroid=createSprite(Math.round(random(100,1400)),50);
       asteroid.addImage(asteroidImage)
       asteroid.scale=0.2
       asteroid.velocityY=+2
       asteroidGroup.add(asteroid)


   }

}

function spawnAsteroid2(){

  if(frameCount%100==0){
    asteroid22=createSprite(Math.round(random(100,1400)),50);
       asteroid22.addImage(asteroidImage)
       asteroid22.scale=0.2
       asteroid22.velocityY=+2
       asteroid22Group.add(asteroid22)

  }

}