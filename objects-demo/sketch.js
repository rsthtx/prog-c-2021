let balls = []
let spawnPosition

function setup() {
  createCanvas(windowWidth, windowHeight)
  fill('hotpink')
  stroke('red')

  spawnPosition = createVector(width / 2, height / 2)
  createBalls()
}

function draw() {
  background('pink')

  for (const ball of balls) {
    ball.update()
    ball.render()
  }
}

function createBalls() {
  for (let i = 0; i < 50; i++) {
    balls.push(new Ball(spawnPosition))
  }

  for (let i = 0; i < 20; i++) {
    balls.push(new BouncingBall(spawnPosition))
  }

  for (let i = 0; i < 10; i++) {
    balls.push(new RandomBouncingBall(spawnPosition))
  }
}

function reset(){
  balls = []
}

function keyPressed() {
  if('e' == key){
    reset()
  }
}

function mousePressed() {
  spawnPosition.x = mouseX
  spawnPosition.y = mouseY
  createBalls()
}