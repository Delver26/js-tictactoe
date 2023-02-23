game();

function getComputerChoice() {
    let choice = Math.random();
    if (choice < 0.33) {
        choice = "Rock";
    } else if (choice >= 0.33 && choice < 0.66) {
        choice = "Paper";
    } else choice = "Scissors";
    return choice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let result;
    let playerWins;

    if (playerSelection === computerSelection) {
        result = `You both picked ${playerSelection}, it's a draw!`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        result = "You Win! Rock beats Scissors";
        playerWins = true;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = "You Lose! Scissors beats Paper";
        playerWins = false;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = "You Win! Scissors beats Paper";
        playerWins = true;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        result = "You Lose! Paper beats Rock";
        playerWins = false;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result = "You Win! Paper beats Rock";
        playerWins = true;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "You Lose! Rock beats Scissors";
        playerWins = false;
    } else result = `Don't have a combo for ${playerSelection} and ${computerSelection}`;
    return {
        result: result,
        playerWins: playerWins
    };
}

function game() {

    let playerWinCount = 0;
    let computerWinCount = 0;
    let winMessage = ;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt(`Round ${i+1} : Enter your choice (Rock, Paper, or Scissors)`);
        let computerSelection = getComputerChoice();
        if (!playerSelection) {
            console.log("ok, marking this one as a draw then...");
            continue;
        }
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
        if (typeof roundResult.playerWins !== 'undefined') {
            if (roundResult.playerWins) {
                playerWinCount = playerWinCount + 1;
            } else computerWinCount = computerWinCount + 1;
        }
    }

    if (playerWinCount > computerWinCount) {
        winMessage = "Congratulations! You won the best of 5 rounds!";
    } else if (playerWinCount < computerWinCount) {
        winMessage = "Unlucky! The computer won the best of 5 rounds!";
    } else winMessage = "Wow an overall draw!"
    console.log(winMessage);
}