const btn = document.getElementById("button");
console.log(btn);

const randomColor = () => {
    
    // For Color, using Hex code (Any 6 out of 16 used to get color, # being constant)
    let val = "0123456789ABCDEF";
    let constantValue = "#";

    for (let i=0; i<6; i++){
        //Concatinating values with # (using +)
        constantValue = constantValue + val[Math.floor(Math.random() * 16)];   
        // floor = round-off Function
        // To get proper index
        // Highest Value = 0.99 (Math.random)
        // val[i] = Always Fixed, from 0 to 5
    }

    return constantValue;
}

console.log(randomColor());  // clg

function changeRandomColor(){
    document.body.style.backgroundColor = randomColor();
}

btn.addEventListener("click", changeRandomColor);

// Inspect -> Console -> Source -> Debugger (Click on line and reload)

