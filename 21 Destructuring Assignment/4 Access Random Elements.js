let arr = [1, 2, 3, 4, 5];


function accessRandomElements(array){

    let firstElement = array[0];
    let secondElement = array[1];
    let lastElement = array[array.length - 1];

    return [firstElement, secondElement, lastElement];
}

let result = accessRandomElements(arr);
console.log(result);
