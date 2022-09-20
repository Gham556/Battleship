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
return { spaces }    
    };

    Squares();

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
