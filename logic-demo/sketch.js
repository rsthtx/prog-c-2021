function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background(220);
  let y = mouseY
  let x = mouseX
  let diameter = 80

  let halfWidth = width / 2
  let halfHeight = height / 2

  let isLeft = x < halfWidth
  let isBelow = y > halfHeight

  if ((isLeft && isBelow) || ((!isLeft) && (!isBelow))) {
    fill("red");
  } else {
    fill("white")
  }
  circle(x, y, diameter)

}
