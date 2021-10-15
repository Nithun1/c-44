var canvas
var pacman
var ghost1
var ghost1_image
var ghost2
var ghost2_image

function preload(){
  
  ghost1_image=loadImage("redGhost.png") 
  ghost2_image=loadImage("pinkGhost.png")


}


function setup(){
canvas=createCanvas(800,400)



 carboard1=createSprite(10,70,100,20);
carboard1.shapeColor="darkBlue";

 carboard2=createSprite(121,22,20,200);
carboard2.shapeColor="darkBlue";

 carboard3=createSprite(95,122,100,20);
carboard3.shapeColor="darkBlue";

 carboard4=createSprite(50,250,20,100);
carboard4.shapeColor="darkBlue";

 carboard5=createSprite(32,309,100,20);
carboard5.shapeColor="darkBlue";

carboard6=createSprite(196,120,20,166);
carboard6.shapeColor="darkBlue";

 carboard7=createSprite(249,192,100,20);
carboard7.shapeColor="darkBlue";

 carboard8=createSprite(306,239,20,125);
carboard8.shapeColor="darkBlue";

 carboard9=createSprite(320,293,150,20);
carboard9.shapeColor="darkBlue";

 carboard10=createSprite(61,391,145,20);
carboard10.shapeColor="darkBlue";

 carboard11=createSprite(130,220,20,100);
carboard11.shapeColor="darkBlue";

 carboard12=createSprite(126,373,20,100);
carboard12.shapeColor="darkBlue"

 carboard13=createSprite(292,78,20,91);
carboard13.shapeColor="darkBlue";

carboard14=createSprite(337,122,125,20);
carboard14.shapeColor="darkBlue";

 carboard15=createSprite(390,217,20,170);
carboard15.shapeColor="darkBlue";

 carboard16=createSprite(222,240,100,20);
carboard16.shapeColor="darkBlue";

carboard17=createSprite(222,353,95,20);
carboard17.shapeColor="darkBlue";

carboard18=createSprite(330,350,20,30);
carboard18.shapeColor="darkBlue";

carboard19=createSprite(405,364,26,43);
carboard19.shapeColor="darkBlue";

carboard20=createSprite(460,120,20,120);
carboard20.shapeColor="darkBlue";





pacman=createSprite(10,10,25,25)
ghost1=createSprite(random(20,350),random(20,350),50,25)
ghost2=createSprite(random(20,350),random(20,350),50,25)

ghost1.addImage(ghost1_image)
ghost1.scale=0.05

ghost2.addImage(ghost2_image)
ghost2.scale=0.05

}
function draw(){
background("black");



if (keyDown("w")){
    pacman.velocityY=-2
}
if (keyDown("a")){
    pacman.velocityX=-2
}
if (keyDown("s")){
    pacman.velocityY=2
}
if (keyDown("d")){
    pacman.velocityX=2
}

ghost1.velocityX=2
ghost1.velocityY=-2

ghost2.velocityX=2
ghost2.velocityY=-2


ghost1.bounceOff(carboard1)

ghost1.bounceOff(carboard2)

ghost1.bounceOff(carboard3)

ghost1.bounceOff(carboard4)

ghost1.bounceOff(carboard5)

ghost1.bounceOff(carboard6)

ghost1.bounceOff(carboard7)

ghost1.bounceOff(carboard8)

ghost1.bounceOff(carboard9)

ghost1.bounceOff(carboard10)

ghost1.bounceOff(carboard11)

ghost1.bounceOff(carboard12)

ghost1.bounceOff(carboard13)

ghost1.bounceOff(carboard14)

ghost1.bounceOff(carboard15)

ghost1.bounceOff(carboard16)

ghost1.bounceOff(carboard17)

ghost1.bounceOff(carboard18)

ghost1.bounceOff(carboard19)

ghost1.bounceOff(carboard20)

ghost2.bounceOff(carboard1)

ghost2.bounceOff(carboard2)

ghost2.bounceOff(carboard3)

ghost2.bounceOff(carboard4)

ghost2.bounceOff(carboard5)

ghost2.bounceOff(carboard6)

ghost2.bounceOff(carboard7)

ghost2.bounceOff(carboard8)

ghost2.bounceOff(carboard9)

ghost2.bounceOff(carboard10)

ghost2.bounceOff(carboard11)

ghost2.bounceOff(carboard12)

ghost2.bounceOff(carboard13)

ghost2.bounceOff(carboard14)

ghost2.bounceOff(carboard15)

ghost2.bounceOff(carboard16)

ghost2.bounceOff(carboard17)

ghost2.bounceOff(carboard18)

ghost2.bounceOff(carboard19)

ghost2.bounceOff(carboard20)












 drawSprites();   
}