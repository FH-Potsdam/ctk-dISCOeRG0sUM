let canvas = undefined;
let leading;
let y = 0;
let ballD = 10;

function setup() {
  canvas = createCanvas(300, 300);
  canvas.parent("sketch");
  textFont("monospace");
  textAlign(LEFT, CENTER);
  textSize(17);
  leading = textLeading();
  y = height - ballD;
}

function draw() {
  background(255);

  if (keyIsPressed && keyCode === UP_ARROW) {
    y--;
  } else {
    y++;
  }
  y = constrain(y, 0 + ballD, height - ballD);
  fill(0);
  text(
    `Key: "${key}"\nKeyCode: "${keyCode}"`,
    width / 4,
    height / 2 - leading / 2,
  );
  showBall(y);
  // text(, width / 2, height / 2 + leading / 2);
}

function showBall(y) {
  this.y = y;
  fill(255, 0, 0, 125);
  push();
  translate(width / 2, this.y);
  ellipseMode(CENTER);
  ellipse(0, 0, ballD);
  pop();
}

function keyPressed() {
  console.log("key", key);
  console.log("keyCode", keyCode);

  // if (key === "s" || key === "S") {
  //   if (canvas === undefined) {
  //     throw new Error("Could not find your canvas");
  //   }
  //   saveCanvas(canvas, "sketch", "png");
  // }
}
