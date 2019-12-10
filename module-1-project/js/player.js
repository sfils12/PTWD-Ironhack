document.onkeydown = function (event) {
  // console.log(event);

  // use keycode.info to determine keystroke values
  switch(event.keyCode){
      case 37: // left
      mainCharMarioX -= 15;
      break;

      case 39: // right
      mainCharMarioX += 15;
      break;

      case 38: // up 
      mainCharMarioY -= 15;
      break;

      case 40: // down
      mainCharMarioY += 15;
      break;

      default:
      console.log("I'm not sure what you're doing!");
  }
};