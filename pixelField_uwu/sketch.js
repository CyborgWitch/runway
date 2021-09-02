let b;
let clickArrayX = [];
let clickArrayY = [];
let polySynth;
let monoSynth;

let clear = false;
//variable based on mouse speed
let v;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(random(150,255), random(150,255), random(150,255));

  polySynth = new p5.PolySynth();
  monoSynth = new p5.MonoSynth();
}

function draw() {
  //background(0, 255, 0);
  //fill(0);
  strokeWeight(0.25);
  speed = dist(pmouseX, pmouseY, mouseX, mouseY);
  v = map(speed, 0, width, 0, 20);

  push();
  strokeWeight(1);
  noFill();
  rect(0.5, 0.5, width - 1, height - 1);
  pop();

  for (let i = 0; i <= width; i = i + 10) {
    for (let j = 0; j <= height; j = j + 10) {
      line(i, 0, i, height);
      line(0, j, width, j);
    }
  }

  push();
  fill(203, 194, 184);
  //fill(0);
  strokeWeight(1);
  rect(width - 80, 0.5, 79.5, 29.5);
  rect(width - 80, height - 30, 79.5, 29.5);
  rect(0.5, 0.5, 270, 50);

  push();
  fill(0);
  //fill(203, 194, 184);
  textSize(22);
  textLeading(22);
  text("*clear*", width - 72, 22);
  text("*dwnld*", width - 77, height - 7);
  text("thanks for visiting \ndraw yourself a picture <*3", 5, 20);
  pop();

  pop();

  if (
    mouseX > width - 80 &&
    mouseX < width &&
    mouseY > 0 &&
    mouseY < 30 &&
    mouseIsPressed
  ) {
    console.log("clear");
    clear = true;
    push();
    frameRate(5);
    background(random(150, 255), random(150, 255), random(150, 255));
    pop();

    playSynth();

    for (let i = 0; i <= width; i = i + 10) {
      for (let j = 0; j <= height; j = j + 10) {
        line(i, 0, i, height);
        line(0, j, width, j);
      }
    }

    push();
    fill(203, 194, 184);
    //fill(0);
    strokeWeight(1);
    rect(width - 80, 0, 80, 30);
    rect(width - 80, height - 30, 80, 30);
    rect(0, 0, 270, 50);

    push();
    fill(0);
    //fill(203, 194, 184);
    textSize(22);
    textLeading(22);
    text("*clear*", width - 72, 22);
    text("*dwnld*", width - 77, height - 7);
    text("thanks for visiting \ndraw yourself a picture <*3", 5, 20);
    pop();
    pop();

    push();
    strokeWeight(1);
    noFill();
    rect(0.5, 0.5, width - 1, height - 1);
    pop();
  } else if (
    mouseX > width - 80 &&
    mouseX < width &&
    mouseY > height - 30 &&
    mouseY < height &&
    mouseIsPressed
  ) {
    saveCanvas("myPixelField", "png");
  } else {
    clear = false;
  }

}

function playSynth() {
  userStartAudio();
  let mapNote = int(map(mouseX, 0, width, 0, 5));
  let noteSelect = ["C4", "D4", "E4", "F4", "G4"];
  monoSynth.play(noteSelect[mapNote], 0.1, 0, 0.5);

  if (clear) {
    monoSynth.play("A4", 0.1, 0, 0.5);
  }
}
function mouseDragged() {
  clickArrayX.push(mouseX);
  clickArrayY.push(mouseY);
  playSynth();
  for (let i = 0; i <= width; i = i + 20) {
    for (let j = 0; j <= height; j = j + 20) {
      if (mouseX > i && mouseX < i + 20 && mouseY > j && mouseY < j + 20) {
        fill(0);
        rect(i, j, 20, 20);
      }
    }
  }
  push();
  fill(203, 194, 184);
  //fill(0);
  strokeWeight(1);
  rect(width - 80, 0.5, 79.5, 29.5);
  rect(width - 80, height - 30, 79.5, 29.5);
  rect(0.5, 0.5, 270, 50);

  push();
  fill(0);
  //fill(203, 194, 184);
  textSize(22);
  textLeading(22);
  text("*clear*", width - 72, 22);
  text("*dwnld*", width - 77, height - 7);
  text("thanks for visiting \ndraw yourself a picture <*3", 5, 20);
  pop();
  pop();
}

class Boop {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    //ellipse(this.x+random(10), this.y+random(10), this.width);
    //rect(this.x+random(10), this.y+random(10), 5, 5);
    rect(this.x + v, this.y + v, 10, 10);
  }
  move() {
    this.x++;
    this.y++;
  }
}
