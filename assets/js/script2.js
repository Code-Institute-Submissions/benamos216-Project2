const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("score");
const computerScore = document.getElementById("incorrect");
const playerImage = document.getElementById("playerimage");
const computerImage = document.getElementById("computerimage");
const outcome = document.querySelector(".result > p");
const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

for (let button of buttons) {
    button.addEventListener ("click", function() {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

function playGame (playerChoice) {

    playerImage.src = `assets/images/${choices[playerChoice]}.jpg`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 5);

    computerImage.src = `assets/images/${choices[computerChoice]}.jpg`;
    computerImage.alt = choices[computerChoice];

    let result = checkWinner (choices[playerChoice], choices[computerChoice]);

    updateScores(result);

}

function checkWinner (playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        return outcome.innerHTML = `Tie`;
    }

    if (playerChoice === "Rock") {
        if (computerChoice === "Scissors") {
            outcome = "win";
            return outcome.innerHTML = `Rock blunts Scissors`;
        } else if (computerChoice === "Lizard") {
            outcome = "win";
            return outcome.innerHTML = `Rock crushes Lizard`;
        } else if (computerChoice === "Paper") {
            outcome = "lose"
            return outcome.innerHTML = `Paper covers Rock`;
        } else if (computerChoice === "Spock") {
            outcome = "lose"
            return outcome.innerHTML = `Spock vaporises Rock`;
        }
    }

    if (playerChoice === "Paper") {
        if (computerChoice === "Rock") {
            return outcome.innerHTML = `Paper covers Rock`;
        } else if (computerChoice === "Spock") {
            return outcome.innerHTML = `Paper disproves Spock`;
        } else if (computerChoice === "Scissors") {
            return outcome.innerHTML = `Scissors cuts Paper`;
        } else if (computerChoice === "Lizard") {
            return outcome.innerHTML = `Lizard eats Paper`;
        }
    }

    if (playerChoice === "Scissors") {
        if (computerChoice === "Paper") {
            return outcome.innerHTML = `Scissors cuts Paper`;
        } else if (computerChoice === "Lizard") {
            return outcome.innerHTML = `Scissors decapitates Lizard`;
        } else if (computerChoice === "Rock") {
            return outcome.innerHTML = `Rock blunts Scissors`;
        } else if (computerChoice === "Spock") {
            return outcome.innerHTML = `Spock smashes Scissors`;
        }
    }

    if (playerChoice === "Lizard") {
        if (computerChoice === "Paper") {
            return outcome.innerHTML = `Lizard eats Paper`;
        } else if (computerChoice === "Spock") {
            return outcome.innerHTML = `Lizard poisons Spock`;
        } else if (computerChoice === "Rock") {
            return outcome.innerHTML = `Rock smashes Lizard`;
        } else if (computerChoice === "Scissors") {
            return outcome.innerHTML = `Scissors decapitates Lizard`;
        }
    }

    if (playerChoice === "Spock") {
        if (computerChoice === "Rock") {
            return outcome.innerHTML = `Spock vaporises Rock`;
        } else if (computerChoice === "Scissors") {
            return outcome.innerHTML = `Spock smashes Scissors`;
        } else if (computerChoice === "Paper") {
            return outcome.innerHTML = `Paper disproves Spock`;
        } else if (computerChoice === "Lizard") {
            return outcome.innerHTML = `Lizard poisons Spock`;
        }
    }
}

function updateScore () {

    if (outcome === "win") {
        userScore++;
        userScore.innerHTML = userScore;
        computerScore.innerHTML = computerScore;
    } else if (outcome === "lose") {
        computerScore++;
        userScore.innerHTML = userScore;
        computerScore.innerHTML = computerScore;
    }
}