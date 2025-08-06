const negativeCount = (array) =>{
    let count = 0;
    for(let i =0; i<array.length;i++){
        if(array[i]<0){
            count++;

        }
    }
    console.log(count)
}
let num = [-1,-3,-4,2,3]
negativeCount(num)