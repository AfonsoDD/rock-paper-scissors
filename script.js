// console.log ('Hello world!')

// Step 2 - Logic for the computer choice 

function getComputerChoice () {

    let computerRandomizedPlay = Math.random(); // Returns a random number ]0,1]
    let computerChoice = "";// Setting the variable that will hold the computer's play (locally stored)

    if (computerRandomizedPlay <= 1/3) { // A third of the time its "Rock"
        computerChoice = "ROCK";
    }
    else if (computerRandomizedPlay > 1/3 && computerRandomizedPlay <= 2/3) { // Another third is "Paper"
        computerChoice = "PAPER";
    }
    else { // The rest is "Scissors"
        computerChoice = "SCISSOR";
    }
    return computerChoice // Need to save this in a global variable
}

// Step 3 - Logic for the human choice

function getHumanChoice () {
    let humanChoice = prompt("What is your choice ? -").toUpperCase(); // Asking the user for his play
    return humanChoice; // Need to save this in a global variable;
}

// Step 4 - Declare players variables;

let humanScore = 0;
let computerScore = 0; // I think there is no need to define this globally; We could do it in playGame()

// Step 5 - Logic for a single round;

function playRound (computerSelection, humanSelection) {

    let roundMessage = "";

    if (computerSelection == humanSelection) { // Draw validation
        roundMessage = "We have a draw!"
    } 
    
    else if ( // Player won
        (computerSelection == "ROCK" && humanSelection == "PAPER") || 
        (computerSelection == "PAPER" && humanSelection == "SCISSOR") ||
        (computerSelection == "SCISSOR" && humanSelection == "ROCK")) {

        roundMessage = "You win!";
        humanScore += 1;

    } else { // Player lost
        roundMessage = "You lose!";
        computerScore += 1;
    }

    return console.log(roundMessage)
}

function playGame () {

    let round = 0;

    while (round < 5) {
        computerSelection = getComputerChoice(); // define the play for computer
        humanSelection = getHumanChoice(); // define the play for player
        playRound(computerSelection, humanSelection); // play the round
        round += 1; // update round counter
        console.log(`Player - ${humanSelection}. Computer - ${computerSelection}.\nPlayer has ${humanScore} points. Computer has ${computerScore} points.\nThis was round ${round}/5.`)
    }

    if (humanScore > computerScore) { // log the victory screen
        return console.log("Player wins - Human Supremacy")
    } else if (humanScore < computerScore) {
        return console.log("Computer wins - We are fuck*d")
    } else {
        return console.log("A draw... boring")
    }
}

playGame()
