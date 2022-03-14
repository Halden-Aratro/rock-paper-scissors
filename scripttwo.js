let computerScore = 0;
let playerScore = 0;

let computerSelection;

//Get computer choice
function computerPlay() {
    let randomNum = Math.floor(Math.random() *3); //get random number from 0 to 2
    switch(randomNum) {
        case 0:
            return computerSelection = "rock";
            break;
        case 1:
            return computerSelection = "paper";
            break;
        case 2:
            return computerSelection = "scissors";
            break;
    }
}

//Get player's choice 
function playerPlay() {
    let playerSelection = prompt("chose rock, paper or scissors");
    playerSelection = playerSelection.toLowerCase();

    return playerSelection;
}

//For beginners, dealing with strings is easier than dealing with int in arrays
function playRound(playerSelection, computerSelection) {
    const SHOW_CHOICES = `(Player chose ${playerSelection} and Computer chose ${computerSelection})`
    const TIE_MSG = "Tie";
    const WIN_MSG = "You win";
    const LOSE_MSG = "You lose";

    if ((playerSelection === "rock" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "paper") ||
        (playerSelection === "scissors" && computerSelection === "scissors")) {
        console.log(TIE_MSG);
        console.log(SHOW_CHOICES);
        showScores();
    } else if ((playerSelection === "rock" && computerSelection === "paper") ||
               (playerSelection === "paper" && computerSelection === "scissors") ||
               (playerSelection === "scissors" && computerSelection === "rock")) {
        console.log(LOSE_MSG);
        console.log(SHOW_CHOICES);
        computerScore += 1;
        showScores();
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
               (playerSelection === "paper" && computerSelection === "rock") ||
               (playerSelection === "scissors" && computerSelection === "paper")) {
        console.log(WIN_MSG);
        console.log(SHOW_CHOICES);
        playerScore += 1;
        showScores();
    }
}

//Start the game over
function resetScores() {
    playerScore = 0;
    computerScore = 0;
}

function game() {
    resetScores();

    for (let i = 0; i < 5; i++) {   
        console.log(`ROUND ${i + 1}:`);
        playRound(playerPlay(), computerPlay());
    } 

    console.log("FINAL SCORE: ");
    declareWinner();

    window.addEventListener("")
}


function showScores() {
    const SCORES = `player score: ${playerScore} | computer score: ${computerScore}`;
    console.log(SCORES);
}

function declareWinner() {
    const SCORES = `player score: ${playerScore} | computer score: ${computerScore}`;

    if (playerScore > computerScore) {
        console.log("You won the game!\n" + SCORES);
    } else if (playerScore < computerScore) {
        console.log("You lost the game! Really?!\n" + SCORES);
    } else {
        console.log("This is a final tie " + SCORES);
    }
}


game(); 