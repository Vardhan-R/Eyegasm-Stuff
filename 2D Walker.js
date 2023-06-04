let c, ptU, ptD, ptL, ptR

function setup() {
  createCanvas(400, 400);
  x = width / 2
  fill(255, 0, 0)
  strokeWeight(1)
  ptU = height / 2
  ptD = height / 2
  ptL = width / 2
  ptR = width / 2
  pos = createVector(width / 2, height / 2)
}

function draw() {
  background(0, 25);
  stroke(0, 0, 255)
  line(width / 2, 0, width / 2, height)
  line(0, height / 2, width, height / 2)
  noStroke()
  circle(pos.x, pos.y, 10)
  stroke(0, 255, 0)
  line(ptL, ptU, ptR, ptU)
  line(ptL, ptD, ptR, ptD)
  line(ptL, ptU, ptL, ptD)
  line(ptR, ptU, ptR, ptD)
  for (let i = 0; i < 50; i++) {
    c = floor(random(-1, 1))
    if (c == 0) {
      pos.x += 2 * floor(random(-1, 1)) + 1
      if (pos.x < ptL) {
        ptL = pos.x
      } else if (pos.x > ptR) {
        ptR = pos.x
      }
    } else {
      pos.y += 2 * floor(random(-1, 1)) + 1
      if (pos.y < ptD) {
        ptD = pos.y
      } else if (pos.y > ptU) {
        ptU = pos.y
      }
    }
  }
  // line(0, 0, 0, height)
  // line(0, 0, width / 3, height)
  // line(width / 3, 0, 2 * width / 3, height)
  // line(width / 3, 0, width, height)
  // line(2 * width / 3, 0, 0, height)
  // line(2 * width / 3, 0, 2 * width / 3, height)
  // line(width, 0, width / 3, height)
  // line(width, 0, width, height)
}
