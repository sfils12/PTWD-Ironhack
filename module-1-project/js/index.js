const myCanvas = document.getElementById("canvas");
const ctx = myCanvas.getContext("2d");

let isOver = false; //what is this?

myCanvas.width = 1300;
myCanvas.height = 675;

const mainCharKong = new Image();
mainCharKong.src = './images/kong.png';
let mainCharKongX = 600;
let mainCharKongY = 10;

const mainCharMario = new Image();
mainCharMario.src = "./images/Super-Mario-Run-Characters-2.png"; // add mario image
let mainCharMarioX = 700;
let mainCharMarioY = 590;

const obstacleImgBarrel = new Image();
obstacleImgBarrel.src = './images/barrel.webp';
let obstacleBarrelX = 600; // why must w x h be set if they randomly generate?
let obstacleBarrelY = 500;

const obstacleImgFireball = new Image();
obstacleImgFireball.src = './images/fireball.png';
let obstacleFireballX = 300;
let obstacleFireballY = 200;

function drawImg(name, pathToImg, x, y, w, h) {
  name = new Image();
  name.src = pathToImg;
  // name.onload = () => {
      ctx.drawImage(name, x, y, w, h);
  // };
}

function drawEverything() {
    drawImg(mainCharKong, "./images/kong.png", mainCharKongX, mainCharKongY, 100, 100);
    drawImg(mainCharMario, "./images/Super-Mario-Run-Characters-2.png", mainCharMarioX, mainCharMarioY, 50, 75);
    drawImg(obstacleImgBarrel, "./images/barrel.webp", obstacleBarrelX, obstacleBarrelY, 50, 70);
    drawImg(obstacleImgFireball, "./images/fireball.png", obstacleFireballX, obstacleFireballY, 50, 100);
    
    // if (checkCollision(mainCharMarioX, mainCharMarioY, obstacleBarrelX, obstacleBarrelY, obstacleFireballX, obstacleFireballY)) {
    //     console.log('You lose!');
    //     gameOver();
    // }
    // if (obstacleX === 0) { // create point ystem to win game
    //     score++;
    // }
}



function drawingLoop() {
    ctx.clearRect(0, 0, 1300, 675);
    // // drawBackground();
    // obstacleBarrelX -= 5;
    // // why are the steps below required if we already established the const above?
    // drawImg("mainCharKong", "../images/63b0dbdcdc45a0b.png", 0, 525, 65, 65) 
    // drawImg("mainCharMario", "../images/Barrel_%28furniture%29.PNG.webp",0, 525, 65, 65) // add mario image
    // drawImg("obstacleImgBarrel", "../images/fireball-sprite-png-7.png", 1000, 545, 50, 100)
    // drawImg("obstacleImgFireball", "../images/fireball-sprite-png-7.png", 1000, 545, 50, 100)
    // if (obstacleBarrelX < -70) {
    //     obstacleBarrelX = 1000;
    //     obstacleBarrelY = Math.floor(Math.random() * 430);
    // }
    drawEverything();
    // requestAnimationFrame(() => drawingLoop());
    // if (isOver === false) {
        requestAnimationFrame(() => drawingLoop());
    // }
};
drawingLoop();