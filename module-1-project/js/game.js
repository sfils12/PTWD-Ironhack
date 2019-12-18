//this js file holds all images and image loops, set interval, and obstacle speeds
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Changes: switch to classes to optimize code

// let isOver = false; //what is this?
const myCanvas = document.getElementById("canvas");
const ctx = myCanvas.getContext("2d");

myCanvas.width = 1260;
myCanvas.height = 600;


//monkey image
const mainCharMonkey = new Image();
mainCharMonkey.src = "./images/Walking/Walking_000.png";
let mainCharMonkeyX = 525;
let mainCharMonkeyY = 0;


//image of little boy sprites
const mainChar = new Image();
mainChar.src = "./images/mainCharactercopy.png"; // add animation
let mainCharX = 700;
let mainCharY = 520;


//barrel hurts player by half 
const obstacleImgBarrel = new Image();
obstacleImgBarrel.src = './images/barrel.webp';
let obstacleBarrelX = 600; 
let obstacleBarrelY = 0;


// Fireball obstacle. instantly kills player.
const obstacleImgFireball = new Image();
obstacleImgFireball.src = './images/fireball.png';
let obstacleFireballX = 300;
let obstacleFireballY = 0;


// animal control truck obstacle. Collect these to strike Harambe.
const obstacleImgTruck = new Image();
obstacleImgTruck.src = './images/animalcontrol.png';
let obstacleTruckX = 400;
let obstacleTruckY = 0;


//power-up obstacle
const obstacleImgFirstaid = new Image();
obstacleImgFirstaid.src = './images/4loco.png';
let obstacleFirstaidX = 300;
let obstacleFirstaidY = 0;


//Harambe's animal control truck
const animalControl = new Image();
animalControl.src = "./images/animalcontrol.png"
let animalControlX = 0;
let animalControlY = 30;


//this function renders each image
function drawImg(name, pathToImg, x, y, w, h) {
  name = new Image();
  name.src = pathToImg;
  // name.onload = () => {
      ctx.drawImage(name, x, y, w, h);
  // };
}



//this function renders the placement of each mimage
function drawEverything() {
    drawImg(mainCharMonkey, "./images/Walking/Walking_000.png", mainCharMonkeyX, mainCharMonkeyY, 250, 150);
    drawImg(mainChar, "./images/mainCharactercopy.png", mainCharX, mainCharY,50, 70);
    drawImg(obstacleImgBarrel, "./images/barrel.webp", obstacleBarrelX, obstacleBarrelY, 50, 70);
    drawImg(obstacleImgFireball, "./images/fireball.png", obstacleFireballX, obstacleFireballY, 50, 100);
    drawImg(obstacleImgTruck, "./images/animalcontrol.png", obstacleTruckX, obstacleTruckY, 75, 50);
    drawImg(obstacleImgFirstaid, "./images/4loco.png", obstacleFirstaidX, obstacleFirstaidY, 35,75);
    
    // not working
    // setTimeout(() => {
    //   drawEverything(drawImg(obstacleImgFirstaid))
    // }, 3000);

    //only show animal control truck if main character collects truck obstacle. Add 1 point when truck collides with Harambe.
    // if (animalcontrolCollision) {
      // drawImg(animalControl, "./images/animalcontrol.png", animalControlX, animalControlY, 130, 100)
    // }
  }

//This function loops each obstacle
function drawingLoop() { 
    ctx.clearRect(0, 0, 1300, 600);
    // drawBackground();
    obstacleBarrelY += 6;
    obstacleFireballY += 3.5;
    obstacleTruckY += 2.2;
    obstacleFirstaidY += 2;

 
    if (obstacleBarrelY > 600) {
        obstacleBarrelY = 0;
        obstacleBarrelX = Math.floor(Math.random() * 1300);
    }

    if (obstacleFireballY > 600) {
      obstacleFireballY = 0;
      obstacleFireballX = Math.floor(Math.random() * 1300);
    }
   
    if (obstacleFireballY > 600) {
      obstacleFireballY = 0;
      obstacleFireballX = Math.floor(Math.random() * 1300);
    }

    // use setInterval to delay power-up and animal control truck appearance 
    if (obstacleFirstaidY > 600) {
      obstacleFirstaidY  = 0;
      obstacleFirstaidX = Math.floor(Math.random() * 1300);
    }

    if (obstacleTruckY > 600) {
      obstacleTruckY = 0;
      obstacleTruckX = Math.floor(Math.random() * 1300);
    }

    
    drawEverything();
    // requestAnimationFrame(() => drawingLoop());
    // if (isOver === false) {
        requestAnimationFrame(() => drawingLoop());
    // }
};

// function checkCollision(mainCharY, obstacleBottom, mainCharX, obstacleLeft){
//   // mainCharY + mainChar-height >= obstacleY
// return mainCharY <= obstacleBottom + 70
// // // mainCharY <= obstacleY + obstacle-height
// && mainCharX >= obstacleLeft + 50
// // // mainCharX + mainChar-width >= obstacleX
// && mainCharX + 50 <= obstacleLeft + 50
// // // mainCharX <= obstacleX + obstacle-width
// // && obj1y + 65 >= obj2y;
// };

let player = {
  x: mainCharX,
  y: mainCharY,
  width: mainCharX + 50,
  height: mainCharY + 70
};

let barrel = {
  x: obstacleBarrelX,
  y: obstacleBarrelY,
  width: obstacleBarrelX + 50,
  height: obstacleBarrelY + 70
};

let fireball = {
  x: obstacleFireballX,
  y: obstacleFireballY,
  width: obstacleFireballX + 50,
  height: obstacleFireballY + 100
};

// if (rect1.x < rect2.x + rect2.width &&
//   rect1.x + rect1.width > rect2.x &&
//   rect1.y < rect2.y + rect2.height &&
//   rect1.y + rect1.height > rect2.y) {
//    // collision detected!
// }

if (player.x <= barrel.x + barrel.width && 
  player.x + player.width > barrel.x &&
  player.y < barrel.y + barrel.height &&
  player.y + player.height > barrel.y) {
    alert("Ouch! You lose.");
  }

drawingLoop();

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
let score = 0;


// document.onkeydown = function (event) {
//   // console.log(event);

//   // use keycode.info to determine keystroke values
//   switch(event.keyCode){
//       case 37: // left
//       mainCharX -= 20;
//       // this gves character the ability to disappear at far left of screen and appear on right side
//       if(mainCharX < -25) {
//         mainCharX = 1305
//       }
//       break;

//       case 39: // right
//       mainCharX += 20;
//       // this gves character the ability to disappear at far right of screen and appear on left side
//       if(mainCharX > 1305) { 
//         mainCharX = -25
//       }
//       break;


//     // I don't need these cases because I don't want my character moving up or down yet
//       // case 38: // up 
//       // mainCharY -= 20;
//       // break;

//       // case 40: // down
//       // mainCharY += 20;
//       // break;

//       default:
//       console.log("I'm not sure what you're doing!");
//   }
// };

// let health = document.getElementById("health")
// // health.value -= 50; only on collision 
