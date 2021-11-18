class Ball {
  constructor(position) {
    this.r = random(5, 40)
    this.pos = position.copy()
    this.speed = createVector(random(-10, 10), random(-10, 10))
  }

  update() {
    this.pos.add(this.speed)
  }

  render() {
    circle(this.pos.x, this.pos.y, this.r * 2)
  }
}
