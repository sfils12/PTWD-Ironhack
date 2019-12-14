// add score, timer, and health bar
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// let isOver = false; //what is this?

// const mainCharMonkey = new Image();
// mainCharMonkey.src = './images/kong.png';
// let mainCharMonkeyX = 600;
// let mainCharMonkeyY = 10;

// const mainChar = new Image();
// mainChar.src = "./images/Super-Mario-Run-Characters-2.png"; // add mario image
// let mainCharX = 700;
// let mainCharY = 520;

// const obstacleImgBarrel = new Image();
// obstacleImgBarrel.src = './images/barrel.webp';
// let obstacleBarrelX = 600; // why must w x h be set if they randomly generate?
// let obstacleBarrelY = 0;
// //barrel hurts player by half 


// const obstacleImgFireball = new Image();
// obstacleImgFireball.src = './images/fireball.png';
// let obstacleFireballX = 300;
// let obstacleFireballY = 0;
// //fireball immediately kills player 

// const obstacleImgTruck = new Image();
// obstacleImgTruck.src = './images/animalcontrol.png';
// let obstacleTruckX = 400;
// let obstacleTruckY = 0;

// const obstacleImgFirstaid = new Image();
// obstacleImgFirstaid.src = './images/firstaidkit.png';
// let obstacleFirstaidX = 300;
// let obstacleFirstaidY = 0;

// function drawImg(name, pathToImg, x, y, w, h) {
//   name = new Image();
//   name.src = pathToImg;
//   // name.onload = () => {
//       ctx.drawImage(name, x, y, w, h);
//   // };
// }

// function drawEverything() {
//     drawImg(mainCharMonkey, "./images/kong.png", mainCharMonkeyX, mainCharMonkeyY, 100, 100);
//     drawImg(mainChar, "./images/Super-Mario-Run-Characters-2.png", mainCharX, mainCharY, 50, 75);
//     drawImg(obstacleImgBarrel, "./images/barrel.webp", obstacleBarrelX, obstacleBarrelY, 50, 70);
//     drawImg(obstacleImgFireball, "./images/fireball.png", obstacleFireballX, obstacleFireballY, 50, 100);
//     drawImg(obstacleImgTruck, "./images/animalcontrol.png", obstacleTruckX, obstacleTruckY, 75, 50);
//     drawImg(obstacleImgFirstaid, "./images/firstaidkit.png", obstacleFirstaidX, obstacleFirstaidY, 50, 50);
//     // drawImg(obstacleImgHammer, "../images/hammer.gif", obstacleHammerX, obstacleHammerY, 60, 60)
  

// //code to loop obstacles 
// function drawingLoop() { 
//     ctx.clearRect(0, 0, 1300, 600);
//     // drawBackground();
//     obstacleBarrelY += 6;
//     obstacleFireballY += 5;
//     obstacleTruckY += 2.2;
//     obstacleFirstaidY += 2;
 
//     if (obstacleBarrelY > 600) {
//         obstacleBarrelY = 0;
//         obstacleBarrelX = Math.floor(Math.random() * 1300);
//     }

//     if (obstacleFireballY > 600) {
//       obstacleFireballY = 0;
//       obstacleFireballX = Math.floor(Math.random() * 1300);
//     }
//     // setInterval(() => {
//     // }, interval);
//     // use setInterval to delay power drill and power up appearance 
    
//     if (obstacleFirstaidY > 600) {
//       obstacleFirstaidY  = 0;
//       obstacleFirstaidX = Math.floor(Math.random() * 1300);
//     }

//     if (obstacleTruckY > 600) {
//       obstacleTruckY = 0;
//       obstacleTruckX = Math.floor(Math.random() * 1300);
//     }

    
//     drawEverything();
//     // requestAnimationFrame(() => drawingLoop());
//     // if (isOver === false) {
//         requestAnimationFrame(() => drawingLoop());
//     // }
// };
// drawingLoop();