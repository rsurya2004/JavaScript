// Array


let a = [1, 2, 3, 4, "Surya", false];
console.log(a);
console.log(a[4]);

// Index :- [0,1,2,3,4,....]
// Last Element Index :- arr.length - 1
console.log(a.length - 1);

// Update
a[4] = "Shivani";
console.log(a);


let b = new Array(5);   // 5 = Length of Array
console.log(b);

let c = new Array("abc", "def", "ghi");
console.log(c);







// Array Methods


let arr = [1,2,3,4,5]


// Adding Elements (To End)
arr.push(6,7);
console.log(arr);


// Removing Elements (From End)
let x = arr.pop();
console.log(arr);
console.log(x);    // Returns the removed element


// Removing Elements (From Start)
let y = arr.shift();
console.log(arr);
console.log(y);    // Returns the removed element


// Adding Elements (To Start)
arr.unshift(0,9);
console.log(arr);


// Concat (Merging) of Arrays
let a1 = [1,2,3,4];
let a2 = [5,6,7];
let a3 = a1.concat(a2);
console.log(a1, a2, a3);


// Convert Array Elements into String
let a4 = a3.join("-");
console.log(a4);


// Reversing the Array  (String can't be Reversed)
a3.reverse();
console.log(a3);


// Finding Index of Element
let a5 = a3.indexOf(3);    // -1 = if element, not present
console.log(a5);


// Slicing (Geting no. of elements) {Start,End}
a6 = a3.slice(2,5);     // End not included
console.log(a6);


// Splice (Adding Element at any position)      {No Return of Element}
a3.splice(2, 0, 10);       // (Position, Deletion(0 = No , 1 = Yes) , Addition)
console.log(a3);



