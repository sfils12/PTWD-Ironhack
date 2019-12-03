window.addEventListener("load", () => {
  // const myGame = new Game();

  // myGame.init();
  const myCanvas = document.getElementById("canvas");
  const ctx = myCanvas.getContext("2d");

  myCanvas.width = 800;
  myCanvas.height = 600;

  const background = new Image();
  background.src = "images/Wiki-background.jpg"
  // Make sure the image is loaded first otherwise nothing will draw.
  background.onload = function(){
    ctx.drawImage(background,0,0)
  }

})