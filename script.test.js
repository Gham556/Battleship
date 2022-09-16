import { patrolBoat, board1 }from './script.js';

test('expext isHit(), to return incremented value', () => {
    expect(patrolBoat.isHit()).toEqual(1)
}) 

test('expect isSunk(), to return false on multi health ship', () => {
    expect(patrolBoat.isSunk()).toBe(false)
})

test('expect receive attack to increment hits if board square matches', () => {
    expect(board1.recieveAttack(["[2:2]"])).toBe(2)
})

