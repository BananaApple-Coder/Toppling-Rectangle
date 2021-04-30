class box {

  constructor(x, y, width, height) {

  const boxOptions = {
    "restitution":1
  }

    this.body = Bodies.rectangle(x, y, width, height, boxOptions)
    World.add(world, this.body)
    this.width = width
    this.height = height
  }

  display() {
    var pos = this.body.position
    var angle = this.body.angle
    push()
    angleMode(RADIANS)
    translate(pos.x, pos.y)
    rotate(angle)
    rectMode(CENTER)
    fill(255)
    rect(0, 0, this.width, this.height)
    pop()
  }
}