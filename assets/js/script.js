/**
 * Declare constants for DOM elements
 * and choices for game, also declared
 * starting scores
 */
let playerScore = 0;
let computerScore = 0;
const buttons = document.getElementsByClassName("control");
const playerScore_Update = document.getElementById("score");
const computerScore_Update = document.getElementById("incorrect");
const playerImage = document.getElementById("playerimage");
const computerImage = document.getElementById("computerimage");
const outcome = document.querySelector(".result > p");
const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

/**
 * Add event listeners for buttons
 */
for (let button of buttons) {
    button.addEventListener ("click", function() {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

/**
 * Main function to run game
 */
function playGame (playerChoice) {

    playerImage.src = `assets/images/${choices[playerChoice]}.jpg`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 5);

    computerImage.src = `assets/images/${choices[computerChoice]}.jpg`;
    computerImage.alt = choices[computerChoice];

    let result = checkWinner (choices[playerChoice], choices[computerChoice]);

    updateScore(result);

}

/**
 * Check winner depending on the choices made by
 * the user and computer, which then returns a result
 * and outcome.
 */
function checkWinner (playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        result = "tie";
        return outcome.innerHTML = `Tie`;
    }

    if (playerChoice === "Rock") {
        if (computerChoice === "Scissors") {
            result = "win";
            return outcome.innerHTML = `Rock blunts Scissors`;
        } else if (computerChoice === "Lizard") {
            result = "win";
            return outcome.innerHTML = `Rock crushes Lizard`;
        } else if (computerChoice === "Paper") {
            result = "lose";
            return outcome.innerHTML = `Paper covers Rock`;
        } else if (computerChoice === "Spock") {
            result = "lose";
            return outcome.innerHTML = `Spock vaporises Rock`;
        }
    }

    if (playerChoice === "Paper") {
        if (computerChoice === "Rock") {
            result = "win";
            return outcome.innerHTML = `Paper covers Rock`;
        } else if (computerChoice === "Spock") {
            result = "win";
            return outcome.innerHTML = `Paper disproves Spock`;
        } else if (computerChoice === "Scissors") {
            result = "lose";
            return outcome.innerHTML = `Scissors cuts Paper`;
        } else if (computerChoice === "Lizard") {
            result = "lose";
            return outcome.innerHTML = `Lizard eats Paper`;
        }
    }

    if (playerChoice === "Scissors") {
        if (computerChoice === "Paper") {
            result = "win";
            return outcome.innerHTML = `Scissors cuts Paper`;
        } else if (computerChoice === "Lizard") {
            result = "win";
            return outcome.innerHTML = `Scissors decapitates Lizard`;
        } else if (computerChoice === "Rock") {
            result = "lose";
            return outcome.innerHTML = `Rock blunts Scissors`;
        } else if (computerChoice === "Spock") {
            result = "lose";
            return outcome.innerHTML = `Spock smashes Scissors`;
        }
    }

    if (playerChoice === "Lizard") {
        if (computerChoice === "Paper") {
            result = "win";
            return outcome.innerHTML = `Lizard eats Paper`;
        } else if (computerChoice === "Spock") {
            result = "win";
            return outcome.innerHTML = `Lizard poisons Spock`;
        } else if (computerChoice === "Rock") {
            result = "lose";
            return outcome.innerHTML = `Rock smashes Lizard`;
        } else if (computerChoice === "Scissors") {
            result = "lose";
            return outcome.innerHTML = `Scissors decapitates Lizard`;
        }
    }

    if (playerChoice === "Spock") {
        if (computerChoice === "Rock") {
            result = "win";
            return outcome.innerHTML = `Spock vaporises Rock`;
        } else if (computerChoice === "Scissors") {
            result = "win";
            return outcome.innerHTML = `Spock smashes Scissors`;
        } else if (computerChoice === "Paper") {
            result = "lose";
            return outcome.innerHTML = `Paper disproves Spock`;
        } else if (computerChoice === "Lizard") {
            result = "lose";
            return outcome.innerHTML = `Lizard poisons Spock`;
        }
    }
}

/**
 * Increments score depending on outcome of the 
 * result from checkWinner function
 */
function updateScore () {

    if (result === "win") {
        playerScore++;
        playerScore_Update.innerHTML = playerScore;
        computerScore_Update.innerHTML = computerScore;
        
        if (playerScore === 10) {
            return outcome.innerHTML = `Player Wins!`
        }

    } else if (result === "lose") {
        computerScore++;
        playerScore_Update.innerHTML = playerScore;
        computerScore_Update.innerHTML = computerScore;

        if (computerScore === 10) {
            return outcome.innerHTML = `Computer Wins!`
        }
        
    } else if (result === "tie") {
        playerScore_Update.innerHTML = playerScore;
        computerScore_Update.innerHTML = computerScore;
    }
}