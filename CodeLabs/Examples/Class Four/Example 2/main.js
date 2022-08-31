const myArray = [true, true, false, true];

function countTrue(array) {
    let count = 0;
    const arrayLength = array.length;
    
    for(let i = 0; i < arrayLength; i++){
        if(array[i] === true)
            ++count;
    }
    return count;
}
