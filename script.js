let computerScore = 0;
let playerScore = 0;
let roundWinner = '';

//player chooses paper, rock or scissors
let choice = prompt('Please, make your choice by writing "rock", "paper" or "scissors"');
const playerSelection = choice;
     
//computer randomly selects 1 of the 3 choices
const computerSelection = computerPlay();
function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    switch(randomNum) {
    case 0:
        return "rock";
        break;
    case 1:
        return "paper";
        break;
    case 2: 
        return "scissors";
    }
}

//a round is played (need to just play and not display any result to screen)
function playRound (playerSelection, computerSelection) {
    playerSelection = choice.toLowerCase();
    computerSelection = computerPlay().toLowerCase();
    if (playerSelection === computerSelection) {
        roundWinner = ("Tie")
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        computerScore++;
        roundWinner = 'computer';
        return roundWinner;
    } else {
        playerScore++;
        roundWinner = 'player';
        return roundWinner;
    }; 
}

//create a game of 5 rounds
function game () {
    for(i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
        return roundWinner;
    }
}

console.log(game());

function updateScore () {
    if (roundWinner === "Tie") {
        console.log("tie")
    }

    console.log(roundWinner)
}