// UI for Rock-Paper-Scissors

// Step 1 - Set a Play Button!;

const startBtn = document.createElement("button");
startBtn.textContent = "Start a game";
document.body.appendChild(startBtn);


// Step 2 - Set up the playing buttons;

const btnContainer = document.querySelector("#button-container");

const rock = document.createElement("button");
rock.textContent = "ROCK";

const paper = document.createElement("button");
paper.textContent = "PAPER";

const scissors = document.createElement("button");
scissors.textContent = "SCISSORS"

// Use the Start button to intialize the variables, display the buttons and change it to a reset game button;
startBtn.addEventListener("click", () => {

    // initilizing / resetting global variables;
    humanScore = 0;
    computerScore = 0;
    round = 0; 

    if (!document.body.contains(btnContainer)) { // adds the button container if you reset a game
        document.body.append(btnContainer)
     } 

    btnContainer.append(rock, paper, scissors) // inserts buttons to play

    startBtn.textContent = "New Game" // updates the button text

    if (document.body.contains(results)) { // removes the messages from previous game, if it exists
        document.body.removeChild(results)
     } 
});

// Results and winner divs to display text;

const results = document.createElement("div"); // the container for results
results.className = "results-container";

const winnerMessage = document.createElement("div");
winnerMessage.className = "winner-message";

// Generate Computer's play (same as before);

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

// Set the functionality of the buttons for the player

function btnHumanChoice (button) {
    let humanSelection = button.textContent;
    let computerSelection = getComputerChoice();
    return playRound(computerSelection, humanSelection)
}

rock.addEventListener("click", () => btnHumanChoice(rock));
paper.addEventListener("click", () => btnHumanChoice(paper));
scissors.addEventListener("click", () => btnHumanChoice(scissors));

// The same playRound function as before;

function playRound (computerSelection, humanSelection) {

    let roundMessage = "";

    document.body.appendChild(results);

    while (round < 5) {

        if (computerSelection == humanSelection) { // Draw validation
            roundMessage = `We have a draw! You played - ${humanSelection}, Computer played - ${computerSelection}`
            round += 1
        } 
        else if ( // Player won
            (computerSelection == "ROCK" && humanSelection == "PAPER") || 
            (computerSelection == "PAPER" && humanSelection == "SCISSOR") ||
            (computerSelection == "SCISSOR" && humanSelection == "ROCK")) {       
            roundMessage = `You win! You played - ${humanSelection}, Computer played - ${computerSelection}`;
            humanScore += 1;
            round += 1;   
        } else { // Player lost
            roundMessage = `You lose! You played - ${humanSelection}, Computer played - ${computerSelection}`;
            computerScore += 1;
            round += 1
        }

        if (round < 5) { // Display results for every round but the last one
            return results.textContent =
            `${roundMessage}
            The current score is:
            Player - ${humanScore}
            Computer - ${computerScore}
            This was round ${round}/5`;

        } else { // Display results for the last round

            btnContainer.remove(rock, paper, scissors)

            if (humanScore > computerScore) { // log the victory screen
                return results.textContent = `Player wins - Human Supremacy! Final score was ${humanScore} to ${computerScore}.`
            } else if (humanScore < computerScore) {
                return results.textContent = `Computer wins - We are fuck*d. Final score was ${humanScore} to ${computerScore}.`
            } else {
                return results.textContent = `A draw... boring. Final score was ${humanScore} to ${computerScore}.`
            }
        }
    }
}