console.log(playRound("Rock", getComputerChoice()));

function getComputerChoice() {
    let choice = Math.random();
    if (choice < 0.33) {
        choice = "Rock";
    } else if (choice >= 0.33 && choice < 0.66) {
        choice = "Paper";
    } else choice = "Scissors";
    console.log(choice);
    return choice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let result;

    if (playerSelection === computerSelection) {
        result = `You both picked ${playerSelection}, it's a draw!`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        result = "You Win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = "You Lose! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = "You Win! Scissors beats Paper";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        result = "You Lose! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result = "You Win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "You Lose! Rock beats Scissors";
    } else result = `Don't have a combo for ${playerSelection} and ${computerSelection}`;

    return result;
}
