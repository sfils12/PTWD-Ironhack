//this js file holds the character movements 
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

document.onkeydown = function (event) {
  // console.log(event);

  // use keycode.info to determine keystroke values
  switch(event.keyCode){
      case 37: // left
      mainCharX -= 20;
      break;

      case 39: // right
      mainCharX += 20;
      break;

      case 38: // up 
      mainCharY -= 20;
      break;

      case 40: // down
      mainCharY += 20;
      break;

      default:
      console.log("I'm not sure what you're doing!");
  }
};