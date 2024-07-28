// Function  :- Block of Code that performs a specific task and can be reused throughout the program.
// Remove Code Redunancy
// First Class Citizens
// inbuilt and user-defined

function greet(){
    console.log("Hi there!");
    console.log("How are you?");
}

// Parameter
function sqr(x){    // x --> Parameter
    // console.log(x+x);
    return x+x;   //Throwing Output    //To Use outside the Function
    // if only "return" = undefined  
    // Function terminates after 'return' statement
}

// Calling the Function
greet();

// Argument
let a = sqr(8);   
console.log(a);




