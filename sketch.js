var plant, grassColor, seedColor, sproutColor, bloomColor;

function setup () {
  createCanvas(400, 400);

  plant = {
    size: 0,
    growSpeed: 1,
    maxSize: 150,
    bloomSize: 0,
    bloomSpeed: 3,
    maxBloomSize: 100,
  }

  grassColor = color(122, 229, 80);
  seedColor = color(160, 104, 30);
  sproutColor = color(20, 102, 32);
  bloomColor = color(149, 73, 216);

  textSize(25);
}

function draw () {
  background(grassColor);

  print(plant.size);

growOrReset(mouseX);
  
  drawPlant(width/2 - 25, 3 * height/4);
  drawPlant(width/2 + 25, 3 * height/4);

  text(plantLabel(), 10, 20);


}

function growOrReset(){
 if(mouseX >= 200){
    plantGrow();
} else if(mouseX < 200){
  plantReset();


}


}

function plantLabel(){
  var x = 150
  if(plant.size <= 1){ 
     return 'seed';
  } else if(plant.size > 1 && plant.size < x){
    return 'growing';
  } else if(plant.size >= x){
      return 'blooming';

  }
  

  






}

function plantReset() {
  plant.size = 0;
  plant.bloomSize = 0;
}

function plantGrow() {
  if (plant.size == plant.maxSize) {
   plantBloom();
  } else {
    var newSize = plant.size + plant.growSpeed;
    plant.size = min(newSize, plant.maxSize);
  }
}

function plantBloom() {
  var bloom = plant.bloomSize + plant.bloomSpeed;
  plant.bloomSize = min(bloom, plant.maxBloomSize);
}

function drawSeed(x, y) {
  fill(seedColor);
  ellipse(x, y, 12, 7);
}

function drawSprout(x, y) {
  fill(sproutColor);
  rect(x, y, 5, -plant.size);
}

function drawBloom(x, y) {
  fill(bloomColor);
  ellipse(x, y - plant.size, plant.bloomSize, plant.bloomSize);
}

function drawPlant(x,y){
  if(plant.size == 0){
    drawSeed(x,y);
    plant.size = plant.size + 1;
  }else{
    drawSprout(x, y);
    drawBloom(x, y);
  }
}
