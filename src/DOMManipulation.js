import { playerBoard, computerBoard, computerPlayer, Ship } from './script.js';


const spacesNull = document.getElementsByClassName('spaceNull');


const Squares = () => {
    
    const spaces = document.querySelectorAll('.space');
    
    for (let i of spaces) {
        i.addEventListener('click', function () {
            
            if (computerBoard.recieveAttack(this.id, computerBoard) === true) {
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
        console.log(playerBoard)
        if(playerBoard.recieveAttack(thisAttack, playerBoard) === true) {
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
    event.dataTransfer.setData("ship", 'Destroyer')
        };

const dragCarrier = (event) => {
    event.dataTransfer.setData("text", 5);
    event.dataTransfer.setData('ship', 'Carrier')
    
};

const dragBattleship = (event) => {
    event.dataTransfer.setData('text', 4)
    event.dataTransfer.setData('ship', 'Battleship')
};

const dragSubmarine = (event) => {
    event.dataTransfer.setData('text', 3)
    event.dataTransfer.setData('ship', 'Submarine')
};

const dragUBoat = (event) => {
    event.dataTransfer.setData('text', 2)
    event.dataTransfer.setData('ship', 'uBoat')
};

const droppableElements = (() => {
  const boardDroppable = document.querySelector('#playerBoard');
  
  const checkValidSpace = (event, size, name) => {
    const toPlaceArray = [];
    const newToPlaceArray = [];
    const sizeTarget = event.id.split('');
    console.log(size)
        if(Number(size) + Number(sizeTarget[4]) > 11 || sizeTarget[5] === '0') {
            
        } 
        else {

            event.style.background = 'rgb(122, 118, 118)';
            let x = event.nextElementSibling;
            x.style.background = "rgb(122, 118, 118)";
            toPlaceArray.push(event.id, x.id);
            for (let i = 2; i < Number(size); i++) {
            x.nextElementSibling.style.background = "rgb(122, 118, 118)";
            
            x = x.nextElementSibling;
            toPlaceArray.push(x.id);
            };
        for (let y of toPlaceArray) {
           newToPlaceArray.push(y.substring(1))
           
        }
        const newShip = Ship(Number(size), name);
        playerBoard.shipsArray.push(newShip);
        playerBoard.placeShip(newShip, newToPlaceArray);
        console.log(playerBoard)
  } 
};
  
  boardDroppable.addEventListener('drop', function (event) {
    event.preventDefault();
    const shipLength = event.dataTransfer.getData("text");
    const shipName = event.dataTransfer.getData("ship");
    return checkValidSpace(event.target, shipLength, shipName);
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