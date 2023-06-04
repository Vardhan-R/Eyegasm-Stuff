let n, spd
let bubbles = []

function setup() {
  n = 1
  spd = 2
  createCanvas(400, 400);
  for (i = 0; i < n; i++) {
    bubbles[i] = new Bubble(round(random(width)), round(random(height)), round(random(5, 50)))
  }
}

function draw() {
  background(220);
  for (i = 0; i < n; i++) {
    bubbles[i].move()
    bubbles[i].checkEdges()
    bubbles[i].show()
  }
}

class Bubble {
  constructor(x, y, r) {
    this.p = createVector(x, y)
    this.r = r
    this.noise = createVector(round(random(10000)), round(random(10000)))
    this.off = 0.005
  }

  move() {
    this.v = createVector(map(noise(this.noise.x), 0, 1, -spd, spd), map(noise(this.noise.y), 0, 1, -spd, spd))
    this.noise.add(this.off, this.off)
    this.p.add(this.v)
  }

  checkEdges() {
    if (this.p.x - this.r < 0) {
      this.p.x = this.r
    }
    if (this.p.x + this.r > width) {
      this.p.x = width - this.r
    }
    if (this.p.y - this.r < 0) {
      this.p.y = this.r
    }
    if (this.p.y + this.r > height) {
      this.p.y = height - this.r
    }
  }

  show() {
    stroke(0)
    fill(175, 175, 255, 175)
    circle(this.p.x, this.p.y, 2 * this.r)
  }
}
