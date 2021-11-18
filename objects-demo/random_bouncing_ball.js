class RandomBouncingBall extends BouncingBall {
  constructor(p){
    super(p)
    this.fillColor =  color(random(255),random(255),random(255))
    this.lineColor =  color(random(255),random(255),random(255))
    this.lineWidth = random(2, 10)
  }

  render(){
    push()
    stroke(this.lineColor)
    strokeWeight(this.lineWidth)
    fill(this.fillColor)
    super.render()
    pop()
  }
}