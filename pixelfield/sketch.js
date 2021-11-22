
let polySynth;
let monoSynth;

let clear = false;
let dwnld = false;

//variable based on mouse speed
let v;

function setup() {
  // createCanvas(window.innerWidth, window.innerHeight);
  createCanvas(500, 500);
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

  //canvas perimenter border
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

  //interface boxes
  push();
  fill(203, 194, 184);
  //fill(0);
  strokeWeight(1);
  rect(width - 80, 0.5, 79.5, 29.5);
  rect(width - 80, height - 29.5, 79.5, 29);
  rect(0.5, 0.5, 269.5, 49.5);

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
    //clear is true
    console.log("clear");
    clear = true;
    dwnld = false;
    playSynth();
    push();
    frameRate(5);
    background(random(150, 255), random(150, 255), random(150, 255));
    pop();

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
    rect(width - 80, 0, 80, 30);
    rect(width - 80, height - 29.5, 79.5, 29);
    rect(0.5, 0.5, 269.5, 49.5);

      push();
      fill(0, 50);
      rect(width - 80, 0, 80, 30);
      pop();

    push();
    fill(0);
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
    dwnld = true;
    clear = false;
    console.log("dwnld");
    playSynth();
    saveCanvas("myPixelField", "png");

      push();
      fill(0, 50);
      rect(width - 80, height-29.5, 79.5, 29);
      pop();

  } else {
    clear = false;
    dwnld = false;
  }

}

function playSynth() {
  //userStartAudio();
  if (clear && !dwnld) {
    polySynth.play("G4",  0.1, 0, 0.3)
    polySynth.play("C4",  0.1, 0.35, 0.2)
  } else if (dwnld && !clear) {
    //polySynth.play win sound but in synth form/time. 
    polySynth.play("F4",  0.1, 0, 0.3);
    polySynth.play("A5",  0.1, 0.8, 0.4);
    polySynth.play("B5",  0.1, 0.13, 0.2);
    polySynth.play("C5",  0.1, 0.16, 0.4);
    
    //monoSynth.play("F4",  0.1, 0, 0.4);
    //monoSynth.play("A5",  0.1, 0.7, 0.4);
    //monoSynth.play("B5",  0.1, 0.10, 0.2);
    //monoSynth.play("C5",  0.1, 0.13, 0.4);
    
    // polySynth.play("F4",  0.1, 0, 0.5)
    // polySynth.play("A5",  0.1, 0.3, 0.5)
    // polySynth.play("B5",  0.1, 0.4, 0.5)
    // polySynth.play("C5",  0.1, 0.5, 0.5)

    // mapped monosynth for pixelField
  } else {
    let mapNote = int(map(mouseX, 0, width, 0, 5));
    let noteSelect = ["C4", "D4", "E4", "F4", "G4"];
    monoSynth.play(noteSelect[mapNote], 0.1, 0, 0.5);
  }

}
function mouseDragged() {
  userStartAudio();
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
  rect(width - 80, height - 29.5, 79.5, 29);
  rect(0.5, 0.5, 269.5, 49.5);

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
