
const playerSelection = "rock";
const computerSelection = computerPlay();

console.log("playerSelection: " + playerSelection)

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
/*     playerSelection = playerSelection.toLowerCase(); */
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "tie";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "you lose";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "you win";
    }
}

console.log("playRound: " + playRound(playerSelection, computerSelection));