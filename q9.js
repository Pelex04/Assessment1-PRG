function average (array){
    let result = 0;
    let sum = 0
    for(let i =0;i<array.length;i++){
         sum += array[i];
        
         

    }
    
    result = sum/array.length;
    console.log(result);

}
const num = [5,5,5,5,5,5,6];
average(num);