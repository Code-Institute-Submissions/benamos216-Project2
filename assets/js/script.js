function computerChoice() {
    let choices = ['r', 'p', 's', 'l', 'k'];
    randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

const selectWinner = (user1, computerChoice) => {
    let result = null;
  
    const ifVal = (a, b, w) =>
      user1.choice === a && computerChoice.choice === b ? (result = w) : null;
  
    ifVal("rock", "scissors", user1);
    ifVal("scissors", "paper", user1);
    ifVal("paper", "rock", user1);
    ifVal("scissors", "rock", Computer);
    ifVal("paper", "scissors", Computer);
    ifVal("rock", "paper", Computer);
  
    return result();
  };

function result() {
    if (w===user1) {
    result.innerHTML = `${convertToWord(a)} beats ${convertToWord(b)}. Player Wins!`
    } else {
        result.innerHTML = `${convertToWord(b)} beats ${convertToWord(a)}. Computer Wins!`
    }
}