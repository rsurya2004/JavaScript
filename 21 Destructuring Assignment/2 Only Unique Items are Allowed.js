arr = [1, 2, 3, 4, 2, 3];


function removeDuplicates(arr){

    const uniqueSet = new Set(arr);

    return Array.from(uniqueSet);
}

let uniqueNumbers = removeDuplicates(arr);
console.log(uniqueNumbers);
