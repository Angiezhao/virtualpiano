function Description() {
  this.display = function() {
    //TEXT
    s = "   CLICK YOUR KEYBOARD";
    fill(255);
    text(s, 55, 660, 200, 200); // Text wraps within text box
    s = "A    S    D    F      H    J    K    L";
    fill(255);
    text(s, 55, 680, 200, 200); // Text wraps within text box
    
    s = "VOLUME";
    fill(255);
    text(s, 305, 660, 200, 200); // Text wraps within text box

    fill(255);
    rect(50, 700, 20, 20);
    fill(255);
    rect(70, 700, 20, 20);
    fill(255);
    rect(90, 700, 20, 20);
    fill(255);
    rect(110, 700, 20, 20);

    fill(255);
    rect(140, 700, 20, 20);
    fill(255);
    rect(160, 700, 20, 20);
    fill(255);
    rect(180, 700, 20, 20);
    fill(255);
    rect(200, 700, 20, 20);
  }
}