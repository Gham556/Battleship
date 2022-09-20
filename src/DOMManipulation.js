import { playerBoard } from './script.js';

const Squares = () => {
    
    const spaces = document.querySelectorAll('.space');
    console.log(spaces)

   
    
    for (let i of spaces) {
        i.addEventListener('click', function () {
            console.log('runs')
            if (playerBoard.recieveAttack(this.id) === true) {
                console.log('runsn')
                this.style.backgroundColor = '#FFF'
            }
            else {
                this.style.backgroundColor = '#000'
            }
        })
    };
    };

    Squares();
