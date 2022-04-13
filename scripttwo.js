let computerScore = 0;
let playerScore = 0;

let computerSelection;
let playerSelection;



function computerPlay() {
    let randomNum = Math.floor(Math.random() *3);
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

/* function playerPlay() {
    playerSelection = this.dataset.btn;
} */


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
    declareWinner();
}



function showScores() {
    const SCORES = `player score: ${playerScore} | computer score: ${computerScore}`;

    roundScores.textContent(`${SCORES}`);
}



function declareWinner() {
    const SCORES = `player score: ${playerScore} | computer score: ${computerScore}`;

    if (playerScore > computerScore) {
        finalMsg.textContent = "You won the game!\n";
        finalScore.textContent = SCORES;
    } else if (playerScore < computerScore) {
        finalMsg.textContent = "You lost the game! Really?!\n";
        finalScore.textContent = SCORES;
    } else {
        finalMsg.textContent = "This is a tie\n ";
        finalScore.textContent = SCORES;
    }
}


game(); 



const rockBtn = document.querySelector('#rockBtn');   
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');

const roundPlay = document.querySelector('#roundPlay');
const roundScores = document.querySelector('#roundScores');
const finalScore = document.querySelector('#finalScore');
const finalMsg = document.querySelector('#finalMsg');



rockBtn.addEventListener('click', () => {
    playRound('rock', computerSelection)})
paperBtn.addEventListener('click', (e) => {console.log(e)});
scissorsBtn.addEventListener('click', (e) => {console.log(e)});