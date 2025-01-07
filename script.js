function getComputerChoice(string){
    const randomNumber = Math.random(); // Generates a number b/w 0 and 1

    if(randomNumber < 1/3){
        return "rock";
    } else if( randomNumber < 2/3){
        return "paper";
    }
    else{
        return "scissors";
    }

}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

function getHumanChoice(){

    //ask User to enter any value
    let choice = prompt("Enter your choice(rock,paper or scissors):").toLowerCase();
    if(choice=="rock"||choice=="scissors"||choice=="paper"){
        return choice;
    }
    else{
        console.log("Invalid input,Please enter rock,paper or scissors.");
        return getHumanChoice();
    }

}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

// Test by logging the initial values
console.log("Initial Human Score:", humanScore);
console.log("Initial Computer Score:", computerScore);

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    console.log(`Human choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);

    if(humanChoice==computerChoice){
        comsole.log("It's a tie!");
    }else if(
        (humanChoice==="rock"&&computerChoice==="scissors")||
        (humanChoice==="paper"&&computerChoice==="rock")||
        (humanChoice==="scissors"&&computerChoice=="paper")
    ){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else{
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerChoice++;
    }

    console.log(`Current Scores - Human: ${humanScore}, Computer: ${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);