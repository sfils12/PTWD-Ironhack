// Rover Object Goes Here
// ======================

const rover = {
  direction: "N",
  x: 0,
  y: 0,
},

// ======================
// Iteration 2:

function turnLeft(rover.direction){
switch(rover.direction) {
case "N" : 
return rover.direction = "W";
break;
case "W" : 
  return rover.direction = "S";
  break;
case "S" : 
  return = rover.direction = "E";
  break;
case "E" :
  return rover.direction = "N";  
  }
console.log("Rover facing:" + rover.direction);
};

turnLeft(rover.direction)


function turnRight(rover.direction){
  switch(rover.direction) {
  case "N" : 
    return rover.direction = "E";
    break;
  case "E" : 
    return rover.direction = "S";
    break;
  case "S" : 
    return = rover.direction = "W";
    break;
  case "W" :
    return rover.direction = "N";  
  }
console.log("Rover facing:" + rover.direction);
};


function moveForward(rover.direction){
  console.log("moveForward was called")
};

//Iteration 3:


