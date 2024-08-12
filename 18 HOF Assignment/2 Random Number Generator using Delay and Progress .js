let randomNumber = Math.floor(Math.random() * 100);

let delay = 3000;  // To Change Easily


// Function to start the countdown and display time remaining
function startCountDown(){

    let timeLeft = delay/1000; // in seconds

    let interval = setInterval(() => {
        if(timeLeft > 0){
            console.log("Time Remaining :- " + timeLeft);
            timeLeft-- ;
        }
        else{
            clearInterval(interval);
        }

    }, 900);
}

startCountDown(delay);


setTimeout(() => {
    console.log(randomNumber);
}, delay);

