let computerScore = 0;
let playerScore = 0;
let roundWinner = '';

//player chooses paper, rock or scissors
function playerPlay() {
    let selection = prompt("rock, paper, scissors?");
    return selection.toLowerCase();
}
let playerSelection = playerPlay();

console.log(playerSelection);

//function playerChooses() {
    //choice = prompt('rock paper scissors');
    //playerSelection = choice;
    //return playSelection;
//}

//computer randomly selects 1 of the 3 choices
let computerSelection = computerPlay();
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
    computerSelection = computerPlay().toLowerCase(); console.log(computerSelection);

    if (playerSelection === computerSelection) {
        roundWinner = ("Tie")
    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    )   {
        computerScore++;
        roundWinner = 'computer';
        return roundWinner;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    )   {
        playerScore++;
        roundWinner = 'player';
        return roundWinner;
    }; 
}

//create a game of 5 rounds
function game () {
    for(i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
        //return roundWinner;
        /* if (roundWinner === "Tie") {
            console.log("Tie");
        } else if (computerScore > playerScore) {
            console.log("You lose");
        } else {
            console.log("You win!");
        } */
    }
}

/* console.log(game()); */

/* function updateScore () {
    if (roundWinner === "Tie") {
        console.log("tie")
    }

    console.log(roundWinner)
}  */