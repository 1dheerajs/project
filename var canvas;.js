var canvas,ob,score;
var backgroundImage,plr_1,plr_2, plr1_img, plr2_img, track;

function preload(){
ob = loadImage('obstacle.png')
bg = loadImage('backgroundimg.png')

}
function setup(){
createCanvas(200,200);
plr_1 = createSprite(10,85,10,10);
plr_2 = createSprite(10,185,10,10);

obstaclesGroup = new Group();




}
function draw(){
backgroundImage = bg
spawnObstacles();
drawSprites();





}


function spawnObstacles(){
    if (frameCount % 60 === 0){
      var obstacle = createSprite(400,165,10,40);
       obstacle.velocityX = -6;
      if(score%100===0){
        obstacle.velocityX=obstacle.velocityX-1;
        
         }
       //generate random obstacles
         obstacle = loadImage(ob)
      
       //assign scale and lifetime to the obstacle           
       obstacle.scale = 0.5;
       obstacle.lifetime = 300;
      
      //add each obstacle to the group
       obstaclesGroup.add(obstacle);
    }
   }