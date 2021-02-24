var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  //fixedRect = createSprite(600, 400, 50, 80);
  //fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  //movingRect = createSprite(400,200,80,30);
  //movingRect.shapeColor = "green";
  //movingRect.debug = true;
  gO1 = createSprite(100,100,50,50);
  gO1.shapeColor = "blue";
  gO2 = createSprite(200.100,50,50);
  gO2.shapeColor = "blue";
}

function draw() {
  background(0,0,0);  
  gO1.x = World.mouseX;
  //movingRect.y = World.mouseY;

  if (isTouching(gO1,gO2)){
    gO1.shapeColor = "green";
    gO2.shapeColor = "green";
  }
  else{
    gO1.shapeColor = "red";
    gO2.shapeColor = "red";
  }
  drawSprites();
}


