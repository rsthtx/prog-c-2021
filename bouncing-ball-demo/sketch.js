let xPos;
let yPos = 250
let xSpeed
let ySpeed


// https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/DVD_logo.svg/2560px-DVD_logo.svg.png
let img;
function preload() {
  let imgageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/DVD_logo.svg/2560px-DVD_logo.svg.png"
  img = loadImage(imgageUrl);
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  xSpeed = 7
  ySpeed = 5
  xPos = width / 2
  background(220);
}

function draw() {

  let radius = 100
  let diameter = 2 * radius

  let redValue = map(xPos, 0, width, 0, 255)
  let greenValue = map(xPos, 0, width, 0, 255)
  fill(redValue, greenValue, 100)
  square(xPos - radius, yPos - radius, diameter)
  image(img, xPos - radius, yPos - radius, diameter, diameter)

  xPos += xSpeed
  yPos += ySpeed

  let isPastRightSide = width < xPos + radius
  let isPastLeftSide = 0 > xPos - radius
  if (isPastLeftSide || isPastRightSide) {
    xSpeed = -xSpeed;
  }

  let isBelowBottom = height < yPos + radius
  let isAboveTop = 0 > yPos - radius
  if (isBelowBottom || isAboveTop) {
    ySpeed = -ySpeed
  }

}
