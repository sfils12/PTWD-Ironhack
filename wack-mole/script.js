    console.log('hello');

window.onload = function(){


    let mole = document.createElement('div');
    mole.classList.add('mole');

    //Code below is what Stevan helped me with in class. One line version of what Nick created below. 
    //    document.getElementsByClassName('col')[Math.floor(Math.random() * document.getElementsByClassName('col').length)].appendChild(mole)


    function sendTheMole(){
        let randomInt = Math.floor(Math.random() * 2000);
        setInterval(()=>{
            // In iteration 1, the mole simply appears in a different box once every second
            // instead, let's make it so the mole sometimes stays for longer than a second
            // sometimes for less
            // and sometimes, dissappears and there is no mole for one or two seconds

            //In iteration 2, the mole sometimes stays for longer than a second
            // sometimes for less
            // and sometimes, dissappears and there is no mole for one or two seconds

            console.log(randomInt)
            let boxes = document.getElementsByClassName('col');
            let randomBox = boxes[Math.floor(Math.random() * boxes.length)];
            
            randomBox.append(mole);
            
        }, randomInt)
    }
    



    sendTheMole();


    
    
 
    console.log(document.getElementById('game-board'))















}// end window onload