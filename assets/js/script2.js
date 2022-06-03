const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("score");
const computerScore = document.getElementById("incorrect");
const playerImage = document.getElementById("playerimage");
const computerImage = document.getElementById("computerimage");
const outcome = document.getElementByClassName("result");
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