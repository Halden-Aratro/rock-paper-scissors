let computerScore = 0;
let playerScore = 0;

let computerSelection;
let playerSelection;

//computer plays
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


//player plays
const rockBtn = document.querySelector('#rockBtn');   
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');


rockBtn.addEventListener('click', () => {
    playRound("rock");
    playerSelection = "rock";
})
paperBtn.addEventListener('click', () => {
    playRound("paper");
    playerSelection = "paper";
})
scissorsBtn.addEventListener('click', () => {
    playRound("scissors");
    playerSelection = "scissors";
})


//round is played
function playRound(playerSelection) {
    computerSelection = computerPlay();
    const rScore = document.querySelector("#roundScore");

    showMoves(playerSelection, computerSelection);

    if ((playerSelection === "rock" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "paper") ||
        (playerSelection === "scissors" && computerSelection === "scissors")) {
            rScore.textContent = "no winner for this round, try again"
    } else if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")) {
            rScore.textContent = "computer won this one"
            computerScore += 1;
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
            rScore.textContent = "player won this round"
            playerScore += 1;

        }
    updateScore(playerScore, computerScore);
}

function updateScore (playerScore,computerScore) {
    const pScore = document.querySelector("#pScore");
    const cScore = document.querySelector("#cScore");

    pScore.textContent = `${playerScore}`;
    cScore.textContent = `${computerScore}`;

    if(computerScore === 5 || playerScore === 5) {
        setTimeout(() => endOfGame(playerScore, computerScore), 2000);
    }
}

function endOfGame () {
    const gContainer = document.querySelector("#globalContainer");
    const ppContainer = document.querySelector("#popupContainer");
    const restartBtn = document.querySelector("#restartBtn");
    const endMsg = document.querySelector("#endMsg");

    gContainer.classList.add("hidden");
    ppContainer.classList.remove("hidden");
    endMsg.classList.remove("hidden");
    restartBtn.classList.remove("hidden");

    if (computerScore > playerScore) {
        endMsg.textContent = "OH NO! You lost against such a bad player?!";
        endMsg.classList.add("red");
    }
    else if (computerScore < playerScore) {
        endMsg.textContent = "Yeah! You did it right!";
        endMsg.classList.add("green");
    }

    restartBtn.addEventListener('click', () => location.reload());
}

function showMoves (playerSelection, computerSelection) {
    const playerMove = document.querySelector("#playerPlay");
    const computerMove = document.querySelector("#computerPlay");
    playerMove.className = "";
    computerMove.className = "";
    playerMove.classList.add(playerSelection);
    computerMove.classList.add(computerSelection);
}