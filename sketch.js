var screen = 1;
var canvasWidth = 960;
var canvasHeight = 540;
var cameratext = 0
var cameraflash = 0
var flash = 1
function preload() {
    dress = loadImage('627249.png');
    museum = loadImage('museum.png');
    QRCODE = loadImage('QRcode.jpg');
    music = loadSound('music.mp3');
}
function setup() {
  // put setup code here
  var canv = createCanvas(960,540);
  // make div#canvas-container the parent of the created canvas
  canv.parent("canvas-container");
  background(255, 121, 18);
  imageMode(CENTER);
}

function  draw() {
    print(screen);
    print(cameratext);
    print(cameraflash);
    print(flash);
  // put drawing code here
    
    if (screen==1) {
        textAlign(CENTER);
        text("Click the Mouse to imitate a person walking up to the display.", canvasWidth/2+ 100,canvasHeight/2-100);
        image(museum, canvasWidth/2, canvasHeight/2, canvasWidth, canvasHeight);
        
    }else if (screen == 2){
        textAlign(CENTER);
        fill(255, 121, 18);
        rect(0, 0, canvasWidth, canvasHeight);
        image(dress, mouseX, mouseY, 564/2, 564/2);
       
        image(museum, canvasWidth/2, canvasHeight/2, canvasWidth, canvasHeight);
        if(cameratext < 255){
            cameratext++;
          }else if (cameratext == 255){
            fill(0, 0, 0);
            text("Get ready for the camera! strike a pose!", canvasWidth/2+ 100,canvasHeight/2-100);
          }
        if(cameraflash < 600){
            cameraflash++;
          }else if (cameraflash == 600){
            if (flash < 40){
            fill(255, 255, 255);
            rect(0, 0, canvasWidth, canvasHeight);
            flash++;
            }else if(flash >= 40 && flash < 100 ){
            fill(255, 121, 18);
            rect(0, 0, canvasWidth, canvasHeight);
            image(dress, mouseX, mouseY, 564/2, 564/2);
            image(museum, canvasWidth/2, canvasHeight/2, canvasWidth, canvasHeight);
            flash++;
            }else if (flash  >= 100 && flash < 140){
            fill(255, 255, 255);
            rect(0, 0, canvasWidth, canvasHeight);
            flash++;
            } else if (flash >= 140 && flash < 200){
            fill(255, 121, 18);
            rect(0, 0, canvasWidth, canvasHeight);
            image(dress, mouseX, mouseY, 564/2, 564/2);
            image(museum, canvasWidth/2, canvasHeight/2, canvasWidth, canvasHeight);
            flash++;
            } else if (flash  >= 200 && flash < 240){
            fill(255, 255, 255);
            rect(0, 0, canvasWidth, canvasHeight);
            flash++;
          } else if (flash == 240){
               fill(255, 121, 18);
            rect(0, 0, canvasWidth, canvasHeight);
            image(museum, canvasWidth/2, canvasHeight/2, canvasWidth, canvasHeight);
            image(QRCODE, canvasWidth/2+100, canvasHeight/2, 100, 100)
              fill(0, 0, 0);
              text("Scan the QR code to access your photos and thanks for coming!", canvasWidth/2+ 100,canvasHeight/2-100);
            
           }
       }
     }
}
function mousePressed () {
      
     if (screen==1){
       screen = 2;  
       music.play();
      }
}