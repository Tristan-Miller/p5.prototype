var screen = 1;
var canvasWidth = 960;
var canvasHeight = 540;
var cameratext = 0
var cameraflash = 0
var flash = 1
var clickeddance = 0
var dancetimer = 0
function preload() {
    dress = loadImage('assets/627249.png');
    museum = loadImage('assets/museum.png');
    QRCODE = loadImage('assets/scan.jpg');
    dance = loadImage('assets/dance.png');
    music = loadSound('assets/music.mp3');
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
         fill(255, 121, 18);
        rect(0, 0, canvasWidth, canvasHeight);
        
        image(museum, canvasWidth/2, canvasHeight/2, canvasWidth, canvasHeight);
        if (mouseX > 300){
            screen = 2;
            cameratext = 0;
            cameraflash = 0;
            flash = 1;
            music.play();
    } 
        
    }else if (screen == 2){
        if (mouseX < 300){
            screen = 1;
             music.stop();
    } 
        textAlign(CENTER);
        
        fill(255, 121, 18);
        rect(0, 0, canvasWidth, canvasHeight);
        if (clickeddance == 0){
        image(dress, mouseX+100, mouseY, 564/2, 564/2);
        } else if(clickeddance == 1){
            image(dance, mouseX+100, mouseY, 564/2, 564/2);
        }
        if (clickeddance == 1){
            if (dancetimer < 30){
                dancetimer++;
            } else if (dancetimer = 30){
                clickeddance = 0
                dancetimer = 0
                
            }
        }
        
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
             if (clickeddance == 0){
        image(dress, mouseX+100, mouseY, 564/2, 564/2);
        } else if(clickeddance == 1){
            image(dance, mouseX+100, mouseY, 564/2, 564/2);
        }
            image(museum, canvasWidth/2, canvasHeight/2, canvasWidth, canvasHeight);
            flash++;
            }else if (flash  >= 100 && flash < 140){
            fill(255, 255, 255);
            rect(0, 0, canvasWidth, canvasHeight);
            flash++;
            } else if (flash >= 140 && flash < 200){
            fill(255, 121, 18);
            rect(0, 0, canvasWidth, canvasHeight);
             if (clickeddance == 0){
        image(dress, mouseX+100, mouseY, 564/2, 564/2);
        } else if(clickeddance == 1){
            image(dance, mouseX+100, mouseY, 564/2, 564/2);
        }
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
        fill(255, 255, 255);
        text("Click to dance.", canvasWidth/2,canvasHeight-20);
         
     }
}
function mousePressed () {
      
     clickeddance = 1;

}