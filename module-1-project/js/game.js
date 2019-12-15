//this js file holds all images and image loops, set interval, and obstacle speeds
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// let isOver = false; //what is this?

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
    drawImg(animalControl, "./images/animalcontrol.png", animalControlX, animalControlY, 130, 100)

  //   if (mainChar collides with animalControl){
  //     score ++;
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

    // use setInterval to delay power-up and animal control truck appearance 
  //   setInterval(() => {
    
  // }, interval);

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
drawingLoop();