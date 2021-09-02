let cx = 44;

function setup(){
  createCanvas(400,500)
}


function draw() {
  background(220);
  let speed = (mouseX -200) / 10;
  const r = 50;
  
  // dette er en kommentar
  let cy = mouseY;
  cx = mouseX
  
  fill(mouseX, mouseY, 20)
  circle(cx, cy,r)
  line(cx, cy, cx, cy + 200)
  
  // cx = cx + speed
  // console.log(speed)
}
