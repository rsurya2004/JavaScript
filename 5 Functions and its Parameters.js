// Function Without a Parameter and Return.



// Function Declaration (Increases code reusibility)
function sayMessage(){
    console.log('I am happy to learn Full Stack Devlopment from PW SKILLS');
} 

function passMessage(){
    return "I am very happy to learn FSD";
}

// Calling the Function (used to call at different places)
sayMessage();
sayMessage();
sayMessage();
sayMessage();

let message = passMessage();  // return value has to be stored in a Variable, to get printed
console.log(message);

let newMessage = message + "  Enroll Today !"
console.log(newMessage);





// Function With a Parameter



// Function Declaration  (With a Parameter)
function displayMessage(messageToBeDisplayed){
    console.log(messageToBeDisplayed);
}

// Calling the Function (Passing Arguments)
displayMessage("I am happy")
displayMessage("to learn JavaScript") 


// Function with Default Parameter
function displayMessage1(
    messageToBeDisplayed1 = "I am a Proud Student of PW SKILLS"
)
{
    console.log(messageToBeDisplayed1);
}

// Passing No Arguments
displayMessage1();

// Argument Allocation = Left to Right
function add(x , y = 10){   // if value assigned to x , then continuity breaks, argument don't know where to assign itself
    return x+y;
}
console.log(add(2));


// Function with Two Parameters
function sum(num1 , num2){
    return num1 + num2;
}

// Calling Functions (with arguments)
console.log(sum(34,45));

let result = sum(45,45);
console.log(result);


// Array as Argument
function sumOfNumbers([num3,num4]){
    return num3+num4;
}
let numbers = sumOfNumbers([4,5])
console.log(numbers);




// Function with Unlimited number of Parameters  (Arguments Keyword = to access all parameters)


// Function Declaration
function sumOfAllParameters(){
    var sum = 0;
    for(var i = 0; i < arguments.length; i++)  // Not used usually, it can be done by using an array
        sum += arguments[i];
    return sum;
}

// Function Calling 
let result1 = sumOfAllParameters(1,2,3,4,5,5,5);
console.log(result1);


