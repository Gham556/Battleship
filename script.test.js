import { patrolBoat }from './script.js';

test('expext isHit(), to return targeted element of array', () => {
    expect(patrolBoat.isHit("[1:1]")).toEqual(["[1:1]"])
}) 

test('expect isSunk(), to return true on multi element array', () => {
    expect(patrolBoat.isSunk()).toBe(false)
})