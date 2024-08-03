// Arrow Functions  (Fat Arrow Functions)



// Can be Called using Variable name itself.
// No need to write Return, for single line function using Arrow function
// Object comes under {}


// 1. One Parameter and a single return statement
const square = (x) => x*x;

// 2. Multiple Parameter and a single return statement
const sumOfNumbers = (x,y) => x+y;

// 3. Multiple Statements in the expression.
const sum = (a,b) => {
    console.log('Adding $(a) and $(b)');
    return a+b;
}

// 4. Returning an Object
const sumAndDifference = (c,d) => ({sum : c+d , difference : c-d});


// Calling the Function
let output1 = square(3);
let output2 = sumOfNumbers(10,34);
let output3 = sum(4,-5);
let output4 = sumAndDifference(22,20);

console.log(output1);
console.log(output2);
console.log(output3);
console.log(output4);




