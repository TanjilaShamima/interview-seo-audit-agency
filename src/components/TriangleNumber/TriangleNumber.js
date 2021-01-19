let sum = 0;


const triangleSeries = (num) =>{
    sum = 0;
    for(let i=1; i<=num; i++){
        sum = sum + i;
        
    }
    
     return sum;

}

 const result = triangleSeries(215);
 console.log(result);

 const result2 = triangleSeries(6);
 console.log(result2);

 const result3 = triangleSeries(1);
 console.log(result3);