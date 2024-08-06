// Objects - real life entities (properties and methods)

// These are User-Defined Variables. (not to accessed like variables at every line, these are same for whole code)
// Represented using Key:Value pair in JS.  (Key = Properties)

// Need --> Can initialize more number of variables



// Creating Objects

let obj = {id: 101, name: "Surya", salary: 58500}
console.log(obj);

let emp = new Object();  //Keyword
emp.id = 102;
emp.name = "Sam"
console.log(emp);

function Emp(i, n, s) { // using Function Constructor
    this.id = i;
    this.name = n;   // keyword
    this.salary = s;
}
const e = new Emp(103, 'Rocky', 50000);
console.log(e);



// Manipulating Object  (Dot Opertor and Square Bracket with Parathesis)

// Value Fetch
console.log(emp.id);
console.log(emp['name']);

// Assign New Key Value Pair or Update previous Value
emp.salary = 15000;
emp['id'] = 1;
emp.name = 'Shiva'
console.log(emp);

// Delete
delete emp.id;
console.log(emp);




// Methods of Objects

let emp1 = {
    id: 105,
    name: "abc",
    age: 24
};

let keys = Object.keys(emp1);  // Object keyword --> returns an array   
// keys function for key
console.log(keys);

let values = Object.values(emp1);
console.log(values);    // returns in form of Array

let entries = Object.entries(emp1);   // For entries in an array
console.log(entries);

Object.seal(emp1);   // To provide Update only, no new addition or deletion
emp1.id = 777;
emp1.address = 'xyz';
delete emp1.name;
console.log(emp1);

Object.freeze(emp1);    // To not update or add new properties(key:value pair)
emp1.id = 100;
emp1.address = 'xyz';
console.log(emp1);

let o = Object.assign({x: 15, name: 'ria'} , emp1);      // To Copy data
console.log(o);


