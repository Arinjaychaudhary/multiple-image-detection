img="";
status="";
function preload() {
img = loadImage("depositphotos_39844179-stock-photo-modern-interior-bedroom.jpg");
}


function setup(){
canvas=createCanvas(640,420);
canvas.center();

objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="Status:Objects Detected";
}

function draw() {
    image(img,0,0,640,420);
    fill("#FF0000");
   stroke("#FF0000") ;
   text("lamp",145,170);
   noFill();
   rect(140,170,30,50);

   text("lamp",500,170);
   noFill();
   rect(500,170,30,50);

   text("bed",245,180);
   noFill();
   rect(140,170,430,250);



   text("big-lamp",245,80);
   noFill();
   rect(240,70,130,50);
}

function modelLoaded () {
console.log("Model Loaded Successfully");
}