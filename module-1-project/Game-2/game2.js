class Game {
    constructor () {
        this.canvas = undefined;
        this.ctx = undefined;
        this.player = new Player (this, 700, 520, 50, 70);
        this.fireball = new Obstacle (this, 300, 0, 50, 100);
        this.barrel = new Obstacle (this, 600, 0, 50, 70)
        this.background = undefined;
        this.score = 0;
    }
}

function init() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.start();
}

function start() {
    this.drawBackground();
    this.drawMainCharacters();
    const interval = setInterval(() => {
       this.clear(); 
       this.drawBackground();
       this.drawMainCharacters();
       this.player.move();
       if (this.player.didcollide(this.obstacle)) {
           clearInterval(interval);
           this.gameOver();
           // console.log("collision");
           //alert("Ouch!!");
       }
       this.obstacle.x -= 5;
       if (this.obstacle.x <= -70) {
           this.obstacle.x = 1000;
           this.obstacle.y = Math.floor(Math.random() * 600)
       }
    }, interval);
}

function drawBackground() {
    this.background.src = "../images/b1dac0470bdf2f7cc0c559599fba19f9.jpg";
    this.ctx.drawImage(
        this.backgroundImg,
        this.x,
        this.y,
        this.width,
        this.height
    );
}

function clear() {
    this.ctx.clearRect(0,0,canvas.width,this.canvas.height);
}

function drawMainCharacters() {
    this.player.drawComponent("../images/mainCharactercopy.png");
}
