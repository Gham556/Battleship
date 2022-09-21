import { playerBoard, computerBoard, shipsArray, computerPlayer } from './script.js';


const spacesNull = document.getElementsByClassName('spaceNull');


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
    

   

const dragDestroyer = (event) => {      
    event.dataTransfer.setData("text", 3);
        };

const dragCarrier = (event) => {
    console.log('works')
    event.dataTransfer.setData("text", 5);
    
};

const dragBattleship = (event) => {
    event.dataTransfer.setData('text', 4)

};

const dragSubmarine = (event) => {
    event.dataTransfer.setData('text', 3)

};

const dragUBoat = (event) => {
    event.dataTransfer.setData('text', 2)

};

const droppableElements = (() => {
  const boardDroppable = document.querySelector('#playerBoard');
  
  const checkValidSpace = (event, size) => {
    const sizeTarget = event.id.split('');
    console.log(size)
        if(Number(size) + Number(sizeTarget[4]) > 11 || sizeTarget[5] === '0') {
            console.log('doesnt fit')
            return 
        } 
        else {
            console.log('fits')
        }
  } 
  
  boardDroppable.addEventListener('drop', function (event) {
    event.preventDefault();
    const shipLength = event.dataTransfer.getData("text");
    return checkValidSpace(event.target, shipLength);
  });
  boardDroppable.addEventListener('dragover', function (event) {
    event.preventDefault();
  });
})();

const selectShips = (() => {
    const destroyerElement = document.querySelector('#Destroyer');
    const carrierElement = document.querySelector('#Carrier');
    const battleshipElement = document.querySelector('#Battleship');
    const submarineElement = document.querySelector('#Submarine');
    const uBoatElement = document.querySelector('#Uboat');

    destroyerElement.addEventListener('dragstart', dragDestroyer);
    carrierElement.addEventListener('dragstart', dragCarrier);
    battleshipElement.addEventListener('dragstart', dragBattleship);
    submarineElement.addEventListener('dragstart', dragSubmarine);
    uBoatElement.addEventListener('dragstart', dragUBoat);

})();

Squares();