//who
const changeButton = document.querySelector(".btn");




//what
function randomBGT() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
    changeButton.color = Math.floor(Math.random()*16777215).toString(16);
            

    
}



//when
changeButton.addEventListener('click', randomBGT)