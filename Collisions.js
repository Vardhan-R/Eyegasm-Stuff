let n, u1, u2, v1, v2, sx1, s2x, l, collisions
function setup() {
  createCanvas(800, 600);
  n = 2
  l = 20
  u1 = 0
  u2 = -1
  s1x = 200
  s2x  = 225
  collisions = 0
}

function draw() {
  background(0);
  s1x = s1x + u1
  s2x = s2x + u2
  stroke(255)
  line(40, 0, 40, height - 50)
  line(40, height - 50, width, height - 50)
  noStroke()
  fill(255, 0, 0)
  square(s1x, height - l - 50, l)
  fill(0, 250, 250)
  square(s2x, height - l - 50, l)
  if (s1x <= 40) {
    u1 = u1 - 2 * u1
    collisions = collisions + 1
    console.log("Collisions:", collisions)
  }
  if (s2x <= (s1x + l)) {
    v1 = (2 * (100 ** n) * u2 - u1 * ((100 ** n) - 1)) / ((100 ** n) + 1)
    v2 = (2 * u1 + u2 * ((100 ** n) - 1)) / ((100 ** n) + 1)
    u1 = v1
    u2 = v2
    collisions = collisions + 1
    console.log("Collisions:", collisions)
  }
  if (s2x >= (width - l)) {
    console.log("π is approximately equal to " + str(collisions / (10 ** n)) + ".")
    noLoop()
  }
}
