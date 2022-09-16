export const ship =  (length, hits, sunk) => {
    hits = length;
    sunk = false; 
    const isHit = (target) => hits.splice(hits.indexOf(target), 1);
    const isSunk = () =>  {
        if (hits.length === 0) {
            return true;
        }
        return false
    } 
    return {length, hits, sunk, isHit, isSunk}
    
}

export function isSunk () {
    if (this.length === 0) {
        return true;
    }
    return false
}

export const patrolBoat = ship(['[1:1]', '[2:2]'],);