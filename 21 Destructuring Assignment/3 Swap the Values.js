function swapValues(x, y){

    // Destructuring Assignments
    [x,y] = [y,x];
    return [x,y];

}

let x = 5;
let y = 10;
let swappedValues = swapValues(x,y);
console.log(swappedValues);

