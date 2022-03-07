//game begins
//round 1 players choose their moves


//human chooses paper, rock or scissors
let choice = prompt('Please, make your choice by writing "rock", "paper" or "scissors"');
const playerSelection = choice;
            
                //computer randomly returns paper, rock or scissors
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

console.log(playRound(playerSelection, computerSelection));

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
    console.log(playerSelection);
    console.log(computerSelection);
}


