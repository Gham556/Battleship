const Ship =  (health, name, sunk) => {
    let hits = 0; 
    sunk = false; 
    const isHit = () => hits += 1;
    const isSunk = () =>  {
        if (hits === health) {
            return true;
        }
        return false
    } 
    return {health, name, sunk, isHit, isSunk}
    
}




const Gameboard = () => {
    const squares = ['[1:1]','[1:2]', '[1:3]', '[1:4]', '[1:5]', '[1:6]', '[1:7]', '[1:8]', '[1:9]', '[1:10]', '[2:1]', "[2:2]", '[2:3]', '[2:4]', '[2:5]', '[2:6]', '[2:7]', '[2:8]', '[2:9]', '[2:10]', '[3:1]', '[3:2]', '[3:3]', '[3:4]', '[3:5]', '[3:6]', '[3:7]', '[3:8]', '[3:9]', '[3:10]', '[4:1]', '[4:2]', '[4:3]', '[4:4]', '[4:5]', '[4:6]', '[4:7]', '[4:8]', '[4:9]', '[4:10]', '[5:1]', '[5:2]', '[5:3]', '[5:4]', '[5:5]', '[5:6]', '[5:7]', '[5:8]', '[5:9]', '[5:10]', '[6:1]', '[6:2]', '[6:3]', '[6:4]', '[6:5]', '[6:6]', '[6:7]', '[6:8]', '[6:9]', '[6:10]', '[7:1]', '[7:2]', '[7:3]', '[7:4]', '[7:5]', '[7:6]', '[7:7]', '[7:8]', '[7:9]', '[7:10]', '[8:1]', '[8:2]', '[8:3]', '[8:4]', '[8:5]', '[8:6]', '[8:7]', '[8:8]', '[8:9]', '[8:10]', '[9:1]', '[9:2]', '[9:3]', '[9:4]', '[9:5]', '[9:6]', '[9:7]', '[9:8]', '[9:9]', '[9:10]', '[10:1]', '[10:2]', '[10:3]', '[10:4]', '[10:5]', '[10:6]', '[10:7]', '[10:8]', '[10:9]', '[10:10]' ] 
    const board =  squares.reduce((accumulator, value) => {
        return {...accumulator, [value]: ''};
      }, {});
      
    const placeShip = (type, coOrdinates) => {
        for (let i of coOrdinates) {
            board[i] = type;
        }
        return board
    };

    const recieveAttack = (coOrdinates) => {
        if (board[coOrdinates] !== '') {
           return board[`${coOrdinates}`].isHit()
        }
        return false //will become missed attack in Dom elements

        /*let counter = 0;  
        for (let i of shipArray) {
            if (i.isSunk === true)
            counter ++; 
        }
        
        if (counter === shipArray.length) {
        //all ships sunk other player wins
        }*/
    }
    
    return {board, placeShip, recieveAttack}
}; 

const Player = () => {

    
    const randomProperty = function (board) {
      
         const keys = Object.keys(board);
        return board[keys[ keys.length * Math.random() << 0]];
    }

    return {randomProperty}
};

const gameLoop = () => {
    const newGame = () => {
        const player1 = Player();
        const player2 = Player();
        
        const player1Board = Gameboard();
        const player2Board = Gameboard();

        const carrier = Ship(5, 'carrier');
        const battleship = Ship(4, 'battleship');
        const destroyer = Ship(3, 'destroyer');
        const submarine = Ship(3, 'submarine')
        const uBoat = Ship(2, 'uBoat');

        const shipsArray = [carrier, battleship, destroyer, submarine, uBoat];
        
       player1Board.placeShip(carrier, ['[1:1]', '[2:2]', '[3:3]', '[4:4]', '[5:5]']);
       player1Board.placeShip(battleship, ['[2:1]', '[2:2]', '[2:3]', '[2:4]']);
       player1Board.placeShip(destroyer, ['[3:1]', '[3:2]', '[3:3]']);
       player1Board.placeShip
    }
    
}

export const patrolBoat = Ship(2, 'Patrol Boat');
export const board1 = Gameboard();
export const computerPlayer = Player();
board1.placeShip(patrolBoat, ['[1:1]','[2:2]'])

