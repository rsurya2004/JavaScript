// Conditions (Decisions)


// if else
let age =  20;
if(age >= 18){
    console.log("Eligible To Vote");
}
else{
    console.log("Not Eligible To Vote");
}


// if , else if , else
let signal = "Red";
if(signal == "Red"){
    console.log("Stop");
}
else if(signal == "Yellow"){
    console.log("Go Slow");
}
else if(signal == "Green"){
    console.log("Go");
}
else{
    console.log("Invalid");
}


// Switch Case (least Used)
let user = "Surya";
switch(user){
    case "Shivani":
        console.log("Not Allowed");
        break;  //if condition true, then break
    
    case "Surya":
        console.log("Allowed");
        break;

    default:  //works like 'else'
        console.log("Default Value");
        break;
}





// Loops


// For Loop  (Inialisation; Condition; Upgradation)
for(let i=0; i<=5; i++){
    console.log(i);
}


// While Loop (Inialisation; Condition; Upgradation)
let i=1;
while(i<=6){
    console.log(i);
    i++;
}


// Do While (Run Atleast Once)
let j=2;
do{
    console.log("Hello World");
    j++;
}while(j<=4);


// Ternary Operator  (condition ? true : false)
let isLoggedIn = true;
isLoggedIn ? console.log("Home Page") : console.log("Login First");


