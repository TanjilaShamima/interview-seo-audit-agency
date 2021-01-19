let finalArray = [];
let max = 0;
let min = 9999999;


const smallValue = (array) =>{
    for(let i=0; i<array.length; i++){
        if(array[i]<min) min = array[i];
        else min = min;

    }
    return min;
}

const largeValue = (array)=>{

   
    for(let i=0; i<array.length; i++){
        if(array[i]>max) max = array[i];
        else max = max;

    }
    return max;
}

// [2334454,5]
// [1,1]
const array1 = [1,2,3,4,5];
const a = smallValue(array1);
const b = largeValue(array1);

finalArray.push(a)
finalArray.push(b)
console.log(finalArray);




