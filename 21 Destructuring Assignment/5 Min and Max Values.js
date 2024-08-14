let arr = [5, 2, 7, 1, 9];


function maxMinNumbers(array){

    // let spreadedArray = new Array(...array);
    
   let max = Math.max(...array);
   let min = Math.min(...array);

   let maxMin = {max, min};
   return maxMin;

}

let result = maxMinNumbers(arr);
console.log(result);
