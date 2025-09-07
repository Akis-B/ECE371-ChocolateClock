// setup() is called once at page-load
function setup() {
  createCanvas(700, 600); 
}

// draw() is called 60 times per second
function draw() {
  let hr = hour();
  min = minute();
  let sec = second();
  
  strokeWeight(1);
  background('#F0A2F7');
  
  /* //Lines
  for (let x = 1; x <= hr; x++) { // hours at height 10
    stroke("rgb(131,212,255)");
    fill("rgb(131,212,255)");
    if (x % 5 == 0) {
      strokeWeight(5);
      line(9 * (x - 1) - 30, 17, 42 + 9 * (x - 1) - 35, 53);
      strokeWeight(1);
    } else {
      rect(9 * x, 10, 4, 50, 30);
    }
  }

  for (let x = 1; x <= min; x++) {  // minutes at height 70
    stroke("rgb(131,255,186)");
    fill("rgb(131,255,186)");
    if (x % 5 == 0) {
      strokeWeight(5);
      line(9 * (x - 1) - 30, 77, 42 + 9 * (x - 1) - 35, 113);

      strokeWeight(1);
    } else {
      rect(9 * x, 70, 4, 50, 30);
    }
  }

  for (let x = 1; x <= sec; x++) { // seconds at height 130
    stroke("rgb(254,255,131)");
    fill("rgb(254,255,131)");
    if (x % 5 == 0) {
      strokeWeight(5);
      line(9 * (x - 1) - 30, 137, 42 + 9 * (x - 1) - 35, 173);

      strokeWeight(1);
    } else {
      rect(9 * x, 130, 4, 50, 30);
    }
  }*/
  
  /*cursor location
  strokeWeight(0);
  fill('rgb(48,32,0)');                
  textSize(16);
  textAlign(LEFT, TOP);
  text(`(${mouseX}, ${mouseY})`, 10, 10);*/
  
  // Hour Chocolate
  rect(20, 308, 102,270);
  fill('rgb(82,54,0)');
  for (let i=0; i<= 2; i++){
    for (let k=0; k<=7; k++){
      rect(26 + 32*i, 314 + 33*k, 26, 26);
    }
  }
  
  // Min Chocolate
  fill('rgb(150,97,39)');
  rect(190, 244, 198, 336);
  fill('rgb(179,118,52)');
  for (let i=0; i<= 5; i++){
    for (let k=0; k<=9; k++){
      rect(196 + 32*i, 250 + 33*k, 26, 26);
    }
  }
  
  // Sec Chocolate
  fill('rgb(255,246,104)');
  rect(190+270, 244, 198, 336);
  fill('#FDFDFB77');
  for (let i=0; i<= 5; i++){
    for (let k=0; k<=9; k++){
      rect(196+270+ 32*i, 250 + 33*k, 26, 26);
    }
  }
  
  //Eating sec Chocolate
  let colS=Math.floor(sec / 6);
  let rowS=sec%6;
  fill ('gray');
  if (colS!=0)
    rect(190+270,244,198,33*colS);
  if (rowS!=0);
    rect(190+270,244,33*rowS, 33 *(colS+1));
  if (colS==9)
    rect(190+270,244,33*rowS, 33 *(colS+1)+6);

  //Eating min Chocolate
  let colM=Math.floor(min / 6);
  let rowM=min%6;
  fill ('gray');
  if (colM!=0)
    rect(190,244,198,33*colM);
  if (rowM!=0);
    rect(190,244,33*rowM, 33 *(colM+1));
  if (colM==9)
    rect(190,244,33*rowM, 33 *(colM+1)+6);
  
  //Eating hour Chocolate
  let colH=Math.floor(hr / 3);
  let rowH=hr%3;
  fill ('gray');
  if (colH!=0)
    rect(20,308,102, 33*colH);
  if (rowH!=0);
    rect(20,308,33*rowH, 33 *(colH+1));
  if (colH==7)
    rect(20,308,33*rowH, 33 *(colH+1)+6);
}

