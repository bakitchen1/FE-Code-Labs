function reversibleInclusiveList(first, last){
    let i = first
    let resultArray = [];

    if(first < last) {
        for(i; i<=last; i++ ) {
            resultArray.push(i);
        }
        return resultArray;    
    } else {
        for(i; i>=last; i--) {
            resultArray.push(i)
        }
        }
        return resultArray;
    }


    console.log(reversibleInclusiveList(33,7));
    console.log(reversibleInclusiveList(10,33));
    console.log(reversibleInclusiveList(100,0));
