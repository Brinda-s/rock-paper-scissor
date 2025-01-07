function getComputerChoice() {
    const randomNumber = Math.random(); // Generates a number between 0 and 1

    if (randomNumber < 1 / 3) {
        return "rock";
    } else if (randomNumber < 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    // Ask user to enter a value
    let choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    if (choice === "rock" || choice === "scissors" || choice === "paper") {
        return choice;
    } else {
        console.log("Invalid input. Please enter rock, paper, or scissors.");
        return getHumanChoice(); // Recursive call for valid input
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase(); // Ensure case-insensitivity

    console.log(`Human choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return "human"; // Return the winner
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        return "computer"; // Return the winner
    }
}

function playGame() {
    // Initialize scores
    let humanScore = 0;
    let computerScore = 0;

    // Play 5 rounds
    for (let round = 1; round <= 5; round++) {
        console.log(`\nRound ${round}`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const winner = playRound(humanSelection, computerSelection);

        // Update scores based on the winner
        if (winner === "human") {
            humanScore++;
        } else if (winner === "computer") {
            computerScore++;
        }

        console.log(`Current Scores - Human: ${humanScore}, Computer: ${computerScore}`);
    }

    // Declare the final winner
    console.log("\nGame Over!");
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Better luck next time! The computer won the game.");
    } else {
        console.log("It's a tie overall!");
    }
}

// Start the game
playGame();
