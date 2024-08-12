// Reverse String using SetTimeout after 2sec

let input = "Hello World !";

function reverseString(str){
    // Split string and Join the string again
    return str.split(" ").reverse().join(" ");
}

setTimeout(() => {
    let reversed = reverseString(input);
    console.log(reversed);
}, 2000);
