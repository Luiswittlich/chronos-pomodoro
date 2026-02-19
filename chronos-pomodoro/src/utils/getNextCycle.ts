export function getNextCicle(currentCycle:number){
    return currentCycle === 0 || currentCycle === 8 ? 1: currentCycle + 1
}