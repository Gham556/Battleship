import { playerBoard } from './script.js';

const Squares = () => {
    
    const spaces = document.querySelectorAll('.space');
    console.log(spaces)

   
    
    for (let i of spaces) {
        i.addEventListener('click', function () {
            if (playerBoard.recieveAttack('[1:1]') === true) {
                console.log(this.id)
                this.style.backgroundColor = '#FFF'
            }
        
        })
    };
    
   

    };

    Squares();
