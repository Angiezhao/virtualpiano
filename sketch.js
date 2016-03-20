var spaceOfLines = 20;
var beginningOfLines = 100;
var description;
var slider;

var notes = [
  [65, '#72d0f4', 210, 'assets/C.wav'], //0th place
  [83, '#6effe5', 190, 'assets/D.wav'], //1st place
  [68, '#fcbc57', 180, 'assets/E.wav'],
  [70, '#f076ff', 170, 'assets/F.wav'],
  [72, '#ababee', 160, 'assets/G.wav'],
  [74, '#f295fd', 150, 'assets/A.wav'],
  [75, '#95e3fd', 140, 'assets/B.wav'],
  [76, '#f6ff6e', 130, 'assets/C+.wav']
];

function preload() {
  for (var i = 0; i < notes.length; i++) {
    var note = loadSound(notes[i][3]); //load sounds, 1 by 1
    notes[i][3] = note;
  }
}

var keyboard = []; //empty array waiting to be filled

function setup() {
  createCanvas(1000, 800);

  slider = createSlider(0, 255, 100);
  slider.position(280, 700);
  slider.style('width', '120px');
  
  
  description = new Description();
  //notes[0][3].loop();
  for (var i = 0; i < notes.length; i++) { //fill that array
    keyboard[i] = new Key(170 + i * 80, 250, 80, notes[i]); //draw keys to screen
  }
}

function draw() {
  var val = slider.value();
  background(150);
  
  //background(0);
  description.display();
  strokeWeight(3);

  for (var i = 0; i < keyboard.length; i++) {
    keyboard[i].display();
    keyboard[i].ifPressed();
  }


  //lines
  stroke(255);
  strokeWeight(1);
  for (var i = 0; i < 5; i++) {
    line(0, spaceOfLines * i + beginningOfLines,
      width, spaceOfLines * i + beginningOfLines);
  }
}

  
  

  function Circle(x, y, letter, color_) {

  this.xPos = x;
  this.yPos = y;
  this.c = color_;

  this.display = function() {
    noStroke();
    fill(this.c);
    ellipse(this.xPos + 40, this.yPos, 20, 20);
    this.xPos = this.xPos - 2;
  }
}

function Key(x, y, size_, note) {

  this.xPos = x;
  this.yPos = y;
  this.size = size_;
  this.letter = note[0];
  this.c = 255;
  this.c_active = note[1]; //active color
  // this.circle = new Circle(this.xPos, this.yPos - 100,  note[0]);
  this.circles = [];
  this.circle_y = note[2];
  this.sound = note[3];
  this.sound.loop();

  this.ifPressed = function() {
    //make the key the right color
    if (keyIsDown(this.letter)) {
      this.c = this.c_active;
      append(this.circles, new Circle(this.xPos, this.circle_y, this.letter, this.c_active));
      this.sound.setVolume(10);
    } else {
      this.c = 255;
      this.sound.setVolume(0);
    }
  }


  this.display = function() {
    for (var i = 0; i < this.circles.length; i++) {
      this.circles[i].display();
    }
    fill(this.c);
    stroke(0);
    rect(this.xPos, this.yPos, this.size, 180);


  }
}