//Create variables here
var dog,varhappydog
var database,varfoodS,varfoodStock
function preload(){
    dog=loadImage(dog.png)
    happydog=loadImage(happydog.png)
}

function setup() {
	createCanvas(500, 500);
  
}


function draw() {  

if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
}






  drawSprites();
  

}



