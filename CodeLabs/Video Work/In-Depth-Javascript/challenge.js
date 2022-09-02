// Return a Boolean if a number is divisible by 10
// Here, you'll create a function that will gibe you a "true" or "false"
// Boolean as its output. The inputted number should only return a "true"
// if it's divisible by 10. Otherwise your program should return a "false" answer.

let x = 10;
let y = 550;

function isDivisibleByTen() {
    let result = null;
    if((x % 10) === 0) {
        result = true;
    } else {
        result = false;
    }

    return result
}