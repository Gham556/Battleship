const spaces = document.querySelectorAll('.space');

export const Squares = () => {
    

    const hitOrMiss = () => {
        this.style.backgroundcolor = '#FFF';
    };
    
    for (let i of spaces) {
        i.addEventListener('click', hitOrMiss())
        console.log(i)
    };


    return {hitOrMiss}
}