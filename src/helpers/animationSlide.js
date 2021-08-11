
export const animationSlide = (link) => {
    const divSolid = document.getElementById("solid");
    const divLine = document.getElementById("line");
    const query = document.querySelector(link);

    setTimeout(() => {
        divLine.classList.add('lineAction');
    },0);
    
    setTimeout(() => {

        divSolid.classList.add('solidAction');

    }, 500);
    
    setTimeout(() => {
        query.click();
    }, 800);

    setTimeout(() => {
        divSolid.classList.remove('solidAction');
    }, 1000);

    setTimeout(() => {
        divLine.classList.remove('lineAction');
    }, 1500);

}
