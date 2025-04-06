console.log ('Hello world!')

// Step 2 - Logic for the computer choice 

function getComputerChoice () {

    let computerRandomizedPlay = Math.random(); // Returns a random number ]0,1]
    let computerPlay;// Setting the variable that will hold the computer's play

    if (computerRandomizedPlay <= 1/3) { // A third of the time its "Rock"
        computerPlay = "Rock";
    }
    else if (computerRandomizedPlay > 1/3 && computerRandomizedPlay <= 2/3) { // Another third is "Paper"
        computerPlay = "Paper";
    }
    else { // The rest is "Scissors"
        computerPlay = "Scissors";
    }
    return console.log(computerRandomizedPlay, computerPlay)
}

// Step 3 - Logic for the human choice

function getHumanChoice () {
    humanPlay = prompt("What is your play ? -");
    return humanPlay;
}

