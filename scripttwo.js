let computerScore = 0;
let playerScore = 0;
let result = '';

let playerSelection = "paper";
const computerSelection = computerPlay();

console.log("playerSelection: " + playerSelection);

function computerPlay() {
    let randomNum = Math.floor(Math.random() *3);
    switch(randomNum) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

console.log("computerPlay: " + computerSelection);



function playRound(playerSelection, computerSelection) {
    const TIE_MSG = "Tie";
    const WIN_MSG = "You win";
    const LOSE_MSG = "You lose";
/*     let playerSelection = playerSelection.toLowerCase();
 */    if ((playerSelection === "rock" && computerSelection === "rock") ||
           (playerSelection === "paper" && computerSelection === "paper") ||
           (playerSelection === "scissors" && computerSelection === "scissors")) {
        console.log(WIN_MSG);
        playerScore += 1;
    } else if ((playerSelection === "rock" && computerSelection === "paper") ||
               (playerSelection === "paper" && computerSelection === "scissors") ||
               (playerSelection === "scissors" && computerSelection === "rock")) {
        console.log(LOSE_MSG);
        computerScore += 1;
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
               (playerSelection === "paper" && computerSelection === "rock") ||
               (playerSelection === "scissors" && computerSelection === "paper")) {
        console.log(TIE_MSG);
    }
}

console.log("playRound: " + playRound(playerSelection, computerSelection));

function resetScores() {
    playerScore = 0;
    computerScore = 0;
}
 
function game() {
    resetScores();

    for (let i = 0; i < 5; i++) {   
        console.log(`round ${i + 1}:`);
        playRound(playerSelection, computerSelection);
    } 

    console.log("Final score: ");

      
}

console.log(game());



function declareWinner() {
    const SCORES = `player score: ${playerScore} | computer score: ${computerScore}`;

    if (playerScore > computerScore) {
        console.log("You won!" + SCORES);
    } else if (playerScore < computerScore) {
        console.log("You lost!" + SCORES);
    } else {
        console.log("This is not possible" + SCORES);
    }

}
