            //game begins
            //round 1 players choose their moves
            playRound (playerSelection, computerSelection) {

            }

                //human chooses paper, rock or scissors
            let choice = prompt('Please, make your choice by writing "rock", "paper" or "scissors"');
            const playerSelection = choice;
            
                //computer randomly returns paper, rock or scissors
            const computerSelection = computerPlay();

            computerPlay() {
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

                //the winner is declared


