img="";
function preload() {
img = loadImage("tv.jpg");
}


function setup(){
canvas=createCanvas(640,420);
canvas.center();
}

function draw() {
    image(img,0,0,640,420);
    fill("#FF0000");
   stroke("#FF0000") ;
   text("Television",145,270);
   noFill();
   rect(100,230,230,150);

   text("AC",145,70);
   noFill();
   rect(100,30,230,150);

}