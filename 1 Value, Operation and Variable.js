// Hello World

// Print Function
console.log("Hii My Name is Surya"); //SemiColon optional



// Values and DataTypes


// Primitive DataTypes

// Number: 2, 3, 4.5, 24
// String: "PW Skills" or 'PW Skills'
// Boolean: true, false
// null (means nothing) (eg: Temperature)
// undefined  (let a;)


// Non-Primitive DataTypes

// Array []
// Object {}



// Keywords

// Let (Variable)  (Changable)
// Const (Constant - Unchangable)  (More Reliable)
// var (least used)




// Operators


// Assignment Operator (=)
let highScore = 300;
console.log(highScore);  //log + tab

let pwSkilsCoursePrice = 7000;
console.log(pwSkilsCoursePrice); //good to have long, but descriptive Variable names
pwSkilsCoursePrice = 3500;
console.log(pwSkilsCoursePrice);

let username = "Surya";

// Arithmetic Operators

let pwCoursePrice = 200;
let gstOnCourse = 36;
let finalPurchaseAmount = pwCoursePrice + gstOnCourse;  //More Memory Used
console.log("Final Amount to be paid" , finalPurchaseAmount);

let pwDsaCourse = 500;
console.log("Final Amount of DSA Course" , pwDsaCourse + gstOnCourse); //Less Memory Used

console.log("Division :- " , 5/2); //Quotient
console.log("Modulus :- " , 5%2); //Remainder
console.log("Power :-" , 3**2); //Power


// Comparison Operators

let suryaScore = 300;
let shivaniScore = "300"; //Automatically Converts into Number

console.log(suryaScore == shivaniScore);
console.log(suryaScore === shivaniScore);  //No Type Converting
console.log(suryaScore > shivaniScore);
console.log(suryaScore != shivaniScore); //Not Equal
console.log(suryaScore <= shivaniScore);



let value1 = true;
let value2 = false;
let value3 = true;
let value4 = false;

console.log(value1 && value2); //AND Operator

// AND Operator (Both Required)
let isLoggedIn = true;
let cardDetails = false;
console.log(isLoggedIn && cardDetails);

// OR Operator (Either One Required)
let gmailAcount = true;
let emailAcount = false;
let githubLogin = false;
console.log(gmailAcount || emailAcount || githubLogin)
