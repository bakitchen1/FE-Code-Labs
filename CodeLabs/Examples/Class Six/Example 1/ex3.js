function product(arr) {
    let result = 0;
    for([key,value] of arr) {
        result = result + (key*value);
    }
    return result;
}

const testArr = [[2,2],[3,3],[5,5]];

product(testArr);