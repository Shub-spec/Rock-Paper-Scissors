let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const emojis = {
      rock: "✊",
      paper: "✋",
      scissors: "✌️"
    };
  
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    const userElem = document.getElementById("user-choice");
    const compElem = document.getElementById("computer-choice");
    const resultElem = document.getElementById("result");
  
    // Reset styles
    userElem.className = "choice-icon";
    compElem.className = "choice-icon";
    resultElem.className = "result";
  
    // Show icons
    userElem.textContent = emojis[playerChoice];
    compElem.textContent = emojis[computerChoice];
  
    let result = "";
    let outcome = "draw";
  
    if (playerChoice === computerChoice) {
      result = "It's a draw!";
      outcome = "draw";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      playerScore++;
      result = `You Win! ${playerChoice} beats ${computerChoice}`;
      outcome = "win";
    } else {
      computerScore++;
      result = `You Lose! ${computerChoice} beats ${playerChoice}`;
      outcome = "lose";
    }
  
    // Apply effects
    if (outcome === "win") {
      userElem.classList.add("win-glow");
      compElem.classList.add("lose-shake");
      resultElem.classList.add("win");
    } else if (outcome === "lose") {
      compElem.classList.add("win-glow");
      userElem.classList.add("lose-shake");
      resultElem.classList.add("lose");
    } else {
      resultElem.classList.add("draw");
    }
  
    resultElem.textContent = result;
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
  }
  