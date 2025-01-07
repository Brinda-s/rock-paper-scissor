let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0; // Counter to track rounds

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    const roundInfo = document.getElementById("round-info");

    if (humanChoice === computerChoice) {
        roundInfo.textContent = `It's a tie! You both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        roundInfo.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        roundInfo.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    // Update the scoreboard
    const scoreboard = document.getElementById("scoreboard");
    scoreboard.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

    // Increment the rounds played
    roundsPlayed++;

    // Check if 5 rounds are completed
    if (roundsPlayed >= 5) {
        endGame();
    }
}

function startGame(humanChoice) {
    if (roundsPlayed < 5) {
        playRound(humanChoice);
    }
}

function endGame() {
    const roundInfo = document.getElementById("round-info");
    const finalMessage = document.createElement("p");

    // Determine the overall winner
    if (humanScore > computerScore) {
        finalMessage.textContent = "Game Over! Congratulations, you won the game!";
    } else if (humanScore < computerScore) {
        finalMessage.textContent = "Game Over! The computer won the game. Better luck next time!";
    } else {
        finalMessage.textContent = "Game Over! It's a tie overall.";
    }

    // Disable the buttons
    document.querySelectorAll("button").forEach((button) => {
        button.disabled = true;
    });

    // Append the final message
    roundInfo.appendChild(finalMessage);
}
