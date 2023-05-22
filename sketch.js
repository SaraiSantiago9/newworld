var penelope=0;

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(173,216,230); //an RGB color for the canvas' background
  //circle
  stroke(102,11,147) // an RGB color for the circle's border
  strokeWeight(3)
  fill(177, 9, 71, ellipse); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,25,25); // center of canvas, 20px dia
  ellipse(250,300,160, penelope);
  fill(126,229,235,penelope);
  stroke(129,251,5);
  strokeWeight(5)
}

function mousePressed(){
  penelope= penelope+5
}
