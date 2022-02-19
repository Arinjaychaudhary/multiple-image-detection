img="";
function preload() {
img = loadImage("fruits.jpg");
}


function setup(){
canvas=createCanvas(640,420);
canvas.center();
}

function draw() {
    image(img,0,0,640,420);
    fill("#FF0000");
   stroke("#FF0000") ;
   text("Apples",115,70);
   noFill();
   rect(100,30,230,350);

   text("Grapes",355,70);
   noFill();
   rect(350,30,230,350);


}