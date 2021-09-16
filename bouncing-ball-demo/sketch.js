let xPos = 40;

function setup() {
  createCanvas(400, 500)
}

function draw() {
  background(220);
  
  circle(xPos, 200, 50)
  
  // xPos = xPos + 1
  xPos  += 1
}
