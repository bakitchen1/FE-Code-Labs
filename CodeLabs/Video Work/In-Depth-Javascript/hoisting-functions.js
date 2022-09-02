logNumberToConsole(10);

function logNumberToConsole(num){
    console.log(num);
}

function addRandomNumber(num){
    let randomNumber = Math.random() + 100;
    logNumberToConsole(randomNumber + num);
}