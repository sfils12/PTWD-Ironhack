const myCanvas = document.getElementById("canvas");
const ctx = myCanvas.getContext("2d");

// let isOver = false; //what is this?

myCanvas.width = 1260;
myCanvas.height = 600;


//This function creates the collision
// function checkCollision(obj1x, obj1y, obj2x, obj2y){
//   mainCharY + 75 >= obstacleBarrelY // 75 represents mainChar_height
// // return obj1y + 65  >= obj2y
//   mainCharY <= obstacleBarrelY + 70 // 70 represents obstacleBarrel_height
//   // && obj1y <= obj2y + 60
//   mainCharX + mainChar-width >= obstacleX
//   // && obj1x + 65 - 10 >= obj2x
//   mainCharX <= obstacleX + obstacle-width
//   // && obj1x <= obj2x + 60;
// };




//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// class Component {
//     constructor(game, x, y, w, h) {
//       this.game = game;
//       this.x = x;
//       this.y = y;
//       this.width = w;
//       this.height = h;
//       this.img = new Image();
//     }
//     drawComponent(imgSource) {
//       let daCtx = this.game.ctx;
//       this.img.src = imgSource;
//       // this.img.addEventListener("load", () => {
//       daCtx.drawImage(this.img, this.x, this.y, this.width, this.height);
//       // });
//     }
  
//     getLeft() {
//       return this.x;
//     }
//     getRight() {
//       return this.x + this.width - 30;
//     }
  
//     getTop() {
//       return this.y + 30;
//     }
//     getBottom() {
//       return this.y + this.height - 50;
//     }
  
//     didCollide(otherComp) {
//       const crossLeft =
//         otherComp.x <= this.getRight() && otherComp.x >= this.getLeft();
  
//       const crossRight =
//         otherComp.x + otherComp.width >= this.getLeft() &&
//         otherComp.x + otherComp.width <= this.getRight();
  
//       const crossTop =
//         otherComp.y <= this.getBottom() && otherComp.y >= this.getTop();
  
//       const crossBottom =
//         otherComp.y + otherComp.height >= this.getTop() &&
//         otherComp.y + otherComp.height <= this.getBottom();
        
//       if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
//         return true;
//       }
//       return false;
//     }
//   }
  