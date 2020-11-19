var obj1,obj2;


function setup() {

  createCanvas(800,400);
  obj1=createSprite(200,100,50,50);
  obj1.shapeColor=("green");
  obj1.velocityX=2;
  obj2=createSprite(600,100,50,50);
  obj2.shapeColor="green";
  obj2.velocityX=-2;

}

function draw() {
  background(255,255,255);  

  //obj2.x=World.mouseX;
  //obj2.y=World.mouseY;
  if(obj1.x-obj2.x<=obj1.width/2+obj2.width/2 &&
    obj2.x-obj1.x<=obj1.width/2+obj2.width/2 && 
    obj1.y-obj2.y<=obj1.height/2+obj2.height/2 &&
    obj2.y-obj1.y<+obj1.height/2+obj2.height/2){
      //obj1.shapeColor="red"
      //obj2.shapeColor=("red");
      obj1.velocityX=obj1.velocityX*-1;
      obj2.velocityX=obj2.velocityX*-1;

    }
    else{
     // obj1.shapeColor="green";
      //obj2.shapeColor=("green");
      obj1.velocityX=obj1.velocityX*1;
      obj2.velocityX=obj2.velocityX*1;
    }

  drawSprites();
}