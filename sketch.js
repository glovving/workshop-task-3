let bg1, bg2, bg3;
let bgarray;

let st1, st2, st3, st4, st5
let starray;

let collage_generated = false;


function preload(){

  bg1 = loadImage('images/flowers.jpg');
  bg2 = loadImage('images/cigaretteteeth.jpg');
  bg3 = loadImage('images/eyes.jpg');

  bgarray = [bg1, bg2, bg3];

  st1 = loadImage('images/bear_sticker.png');
  st2 = loadImage('images/elephant_sticker.png');
  st3 = loadImage('images/fish_sticker.png');
  st4 = loadImage('images/gorillaface_sticker.png');
  st5 = loadImage('images/scaryface_sticker.png');

  starray = [st1, st2, st3, st4, st5];
  
  
}


function setup() {
  createCanvas(400, 400);
  frameRate(1)
  
  for(let p = 0; p<3; p++){
    bgarray[p].resize(width, height/3);
  }

  for(let p2 = 0; p2 < 5; p2++){
    starray[p2].resize(50, 50);
  }
}

//bg
function default_bg(){
  tint(200);

  image(bgarray[floor(random(3))], width/2, (height/3)/2);
  image(bgarray[floor(random(3))], width/2, (height/3)+(height/3)/2);
  image(bgarray[floor(random(3))], width/2, (height/3) + (height/3) + (height/3)/2);}

function unique_bg(){
    let rand_effect = floor(random(1, 6));

    let bg_img = random(bgarray);
    let bg_copy = createImage(bg_img.width, bg_img.height);
    bg_copy.copy(bg_img, 0, 0, bg_img.width, bg_img.height, 0, 0, bg_copy.width, bg_copy.height);
  
    //effect based on random number
    if(rand_effect === 1){
      bg_copy.filter(INVERT);
    }
    if(rand_effect === 2){
      bg_copy.filter(POSTERIZE);
    }
    if(rand_effect === 3){
      bg_copy.filter(BLUR, random(3,10));
    }
    if (rand_effect === 4){
      bg_copy.filter(DILATE);
    }
    if (rand_effect === 5){
      bg_copy.filter(ERODE);
    }
   
    image(bg_copy, random(width), random(height));}

  
//text shown at start
  function default_text(){
  textSize(20);
  fill('yellow');
  stroke('blue');
  strokeWeight(8);
  text("click to see a unique collage \n:)     :D     <3", 50, 50);}


  //stickers
  function unique_stickers(){
    let num_images = random(1, 25);
    
    for(let m = 0; m<num_images; m++){
      let rand_effect = floor(random(1, 6));

      let st_img = random(starray);
      let st_copy = createImage(st_img.width, st_img.height);
      st_copy.copy(st_img, 0, 0, st_img.width, st_img.height, 0, 0, st_copy.width, st_copy.height);

      let randx = random(10, width);
      let randy = random(10, height);

      if(rand_effect === 1){
        st_copy.filter(INVERT);
      }
      if(rand_effect === 2){
        st_copy.filter(POSTERIZE);
      }
      if(rand_effect === 3){
        st_copy.filter(BLUR, random(3,10));
      }
      if (rand_effect === 4){
        st_copy.filter(DILATE);
      }
      if (rand_effect === 5){
        st_copy.filter(ERODE);
      }

      image(st_copy, randx, randy);
    }}



function draw() {
  background(floor(random(0, 256)));
  imageMode(CENTER);

  if(!collage_generated){
    default_bg();
    default_text();}

  else{
    unique_bg();
    unique_stickers();
    noLoop();
  }  
  
  }


function mousePressed(){
 if(collage_generated === false){ 
collage_generated = true;}
else{collage_generated = false;
  loop();
}
}

