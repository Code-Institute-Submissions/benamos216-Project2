/**let userScore = 0;
let computerScore = 0;*/
const userScore = document.getElementById("userscore");
const computerScore = document.getElementById("computerscore");
const scoreBoard = document.querySelector(".scores");
const result = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("k");



function getComputerChoice() {
	const choices = ['r', 'p', 's', 'l', 'k'];
	const randomNumber = Math.floor(Math.random() * 5);
	return choices[randomNumber];
}



function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
    if (letter === "l") return "Lizard";
    if (letter === "k") return "Spock";
}



function win(userChoice, computerChoice) {
    userScore++;
    userScore.innerHTML = userScore;
    computerScore.innerHTML = computerScore;
    result.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`;
}



function lose(userChoice, computerChoice) {
    computerScore++;
    userScore.innerHTML = userScore;
    computerScore.innerHTML = computerScore;
    result.innerHTML = `${convertToWord(computerChoice)} beats ${convertToWord(userChoice)}. You lost!`;
}



function draw(userChoice, computerChoice) {
    userScore.innerHTML = userScore;
    computerScore.innerHTML = computerScore;
    result.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a draw!`;
}



function game(userChoice) {

    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "rl":
        case "pr":
        case "pk":
        case "sp":
        case "sl":
        case "lp":
        case "lk":
        case "kr":
        case "ks":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "rk":
        case "ps":
        case "pl":
        case "sr":
        case "sk":
        case "lr":
        case "ls":
        case "kp":
        case "kl":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
        case "ll":
        case "kk":
            draw(userChoice, computerChoice);
            break;
    }

}



function main() {

    rock_div.addEventListener('click', function () {
        game("r");
    })
    paper_div.addEventListener('click', function () {
        game("p");
    })
    scissors_div.addEventListener('click', function () {
        game("s");
    })
    lizard_div.addEventListener('click', function () {
        game("l");
    })
    spock_div.addEventListener('click', function () {
        game("k");
    })
}



main();