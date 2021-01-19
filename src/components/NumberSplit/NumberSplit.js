let array =[];
let num1, num2
const splitNum = (num) =>{
    if(num%2==0){
        num1 = num2 = num/2;
    }
    else if(num%2 !=0) {
        num1 = Math.floor(num/2);;      
        num2 = num1 +1;
    }
    array.push(num1, num2);
}
splitNum(4);
console.log(array);
array =[];
splitNum(10);
console.log(array);
array =[];
splitNum(11);
console.log(array);
array =[];
splitNum(9);
console.log(array);

