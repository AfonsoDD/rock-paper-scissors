console.log ('Hello world!')

// Logic for the computer choice

function getComputerChoice () {

    let computerRandomizedPlay = Math.random(); // Returns a random number ]0,1]
    let computerActualPlay;// Setting the variable that will hold the computer's play

    if (computerRandomizedPlay <= 1/3) {
        computerActualPlay = "Rock";
    }
    else if (computerRandomizedPlay > 1/3 && computerRandomizedPlay <= 2/3) {
        computerActualPlay = "Paper";
    }
    else {
        computerActualPlay = "Scissors";
    }
    return console.log(computerRandomizedPlay, computerActualPlay)
}