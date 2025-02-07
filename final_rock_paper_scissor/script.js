// Initialize Scores
let humanScore = 0;
let computerScore = 0;

// Get DOM Elements
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");

// Function to get the computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to play a round
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    let message = `You chose: ${humanChoice} <br> Computer chose: ${computerChoice} <br>`;

    if (humanChoice === computerChoice) {
        message += "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        message += `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        message += `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    // Update the result section
    resultDiv.innerHTML = message;
    scoreDiv.innerHTML = `Player: ${humanScore} | Computer: ${computerScore}`;

    // Check if the game is over
    if (humanScore === 5 || computerScore === 5) {
        announceWinner();
    }
}

// Function to announce the winner and disable buttons
function announceWinner() {
    if (humanScore === 5) {
        resultDiv.innerHTML += `<h2>Congratulations! You won the game!</h2>`;
    } else {
        resultDiv.innerHTML += `<h2>Game Over! The computer won.</h2>`;
    }

    // Disable buttons
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

// Add event listeners to buttons
document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
