function setup() {
  createCanvas(1080, 1080);
  background(0)

  for (let i = 0; i < 256; i++) {
    stroke(i)
    line(i, 0, i, 255)
  }

  for (let i = 0; i < 256; i++) {
    stroke(i, 0, 0)
    line(i + 256, 0, i + 256, 255)
  }

  for (let i = 0; i < 256; i++) {
    stroke(0, i, 0)
    line(i + 512, 0, i + 512, 255)
  }

  for (let i = 0; i < 256; i++) {
    stroke(0, 0, i)
    line(i + 768, 0, i + 768, 255)
  }

  for (let i = 0; i < 256; i++) {
    for (let j = 0; j < 256; j++) {
      stroke(i, j, 0)
      point(i, j + 256)
    }
  }

  for (let i = 0; i < 256; i++) {
    for (let j = 0; j < 256; j++) {
      stroke(i, 0, j)
      point(i + 256, j + 256)
    }
  }

  for (let i = 0; i < 256; i++) {
    for (let j = 0; j < 256; j++) {
      stroke(0, i, j)
      point(i + 512, j + 256)
    }
  }
}
