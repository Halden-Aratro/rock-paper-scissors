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
        alert("Tie")
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        alert("the computer wins")
    } else {
        alert ("you win")
    }; 
}

//create a game of 5 rounds
function game ()