import { playerBoard, computerBoard, shipsArray, computerPlayer } from './script.js';


const spacesNull = document.getElementsByClassName('spaceNull')

const Squares = () => {
    
    const spaces = document.querySelectorAll('.space');
    
    for (let i of spaces) {
        i.addEventListener('click', function () {
            
            if (computerBoard.recieveAttack(this.id) === true) {
                this.style.backgroundColor = '#FFF'
            }
            else {
                this.style.backgroundColor = '#000'
            }
            computerTurn();
        })
    };
    return { spaces }    
    };

const computerTurn = () => {
        const thisAttack = computerPlayer.randomProperty(playerBoard.board);
        if(playerBoard.recieveAttack(thisAttack) === true) {
            for (let i of spacesNull) {
                if (i.id === `A${thisAttack}`) {
                i.style.backgroundColor = '#FFF';
                delete playerBoard.board[thisAttack]
                console.log(playerBoard.board)
                }
            }
        }
        else {
            for (let i of spacesNull) {
                if (i.id === `A${thisAttack}`) {
                i.style.backgroundColor = '#000';
                delete playerBoard.board[thisAttack]
                console.log(playerBoard.board)
                }
            }
        }
        };
    

   

const selectShips = () => {
    const destroyerElement = document.querySelector('#Destroyer');
    const carrierElement = document.querySelector('#Carrier');
    const battleshipElement = document.querySelector('#Battleship');
    const submarineElement = document.querySelector('#Subamarine');
    const uBoatElement = document.querySelector('#Uboat');

    destroyerElement.addEventListener('click', queDestroyer);
    carrierElement.addEventListener('click', queCarrier);
    battleshipElement.addEventListener('click', queBattleship);
    submarineElement.addEventListener('click', queSubmarine);
    uBoatElement.addEventListener('click', queUBoat);
};

const queDestroyer = () => {
    const playerSpaces = document.querySelectorAll('#spacesNull')
    for (let i of playerSpaces) {
        i.addEventListener('click', function () {

        });
    };
};

const queCarrier = () => {

};

const queBattleship = () => {

};

const queSubmarine = () => {

};

const queUBoat = () => {

};

Squares();