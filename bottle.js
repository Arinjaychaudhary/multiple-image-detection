img="";
function preload() {
img = loadImage("bottle.jpg");
}


function setup(){
canvas=createCanvas(640,420);
canvas.center();
}

function draw() {
    image(img,0,0,640,420);
    fill("#FF0000");
   stroke("#FF0000") ;
   text("bottle",205,110);
   noFill();
   rect(200,100,100,250);

 
  text("bottle",275,110);
  noFill();
  rect(270,100,100,260);

}