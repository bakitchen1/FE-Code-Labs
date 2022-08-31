// TEST OBJECTS //
const object1 = {a:1, b:2, c:3};
const object2 = {a: "Apple", c: "Microsoft", b: "Google"};
const object3 = {key3: true, key2: false, key1: undefined}; 

//FUNCTION with object as argument//
function keysAndValues(obj){

    // 
    const initial = Object.entries(obj);
    const iterable = initial.sort();
    let keys = [""];
    let values = [];

    for (const [key, value] of iterable) {
        keys.push(key);
        values.push(value);
    }

    return `[${keys}], [${values}]`;
      
            
            
            

        }

        
             
        

        
       


        

        











    

