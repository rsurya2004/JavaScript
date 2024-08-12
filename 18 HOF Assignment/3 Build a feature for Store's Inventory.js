let itemsInUSD = {
    "item1" : 4,
    "item2" : 8,
    "item3" : 7,
    "item4" : 5
}

let exchangeRate = 80;


// Object.fromEntries()  =  It is a JavaScript method used to convert an array of key-value pairs back into an object
let itemsInINR = Object.fromEntries(
    Object.entries(itemsInUSD).map(([item, price]) => [item, price*exchangeRate])
)

console.log(itemsInINR);
