class Component {
    constructor(game, x, y, w, h) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.img = new Image();
    }
    drawComponent(imgSource) {
        let daCtx = this.game.ctx;
        this.img.src = imgSource;
        
        daCtx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
} 

// getLeft() {
//     return this.x;
// }

// getRight() {
//     return this.x + this.width - 30;
// }

// getTop() {
//     return this.y + 30;
// }

// getBottom() {
//     return this.y + this.height - 50;
// }

// didCollide(otherComponent) {
//     const crossLeft
// }