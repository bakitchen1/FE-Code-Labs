function arrayOfMultiples(num, length) {
    let arrayInstance = [];
    

    //loops through based on length
    for (let i = 0; i<length; i++) {
        arrayInstance.push(num * (i+1));
    }
    return arrayInstance;
}