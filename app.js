function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function getHumanChoice() {
    return prompt(
        "Enter your choice (rock, paper, or scissors):",
    ).toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    const scoreIncrease = 10;

    let playRound = (humanChoice, computerChoice) => {
        if (humanChoice === computerChoice) {
            return "tie";
        }

        const humanWins =
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper");

        return humanWins ? "human" : "computer";
    };

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);

        if (result === "computer") {
            computerScore += scoreIncrease;
        } else if (result === "human") {
            humanScore += scoreIncrease;
        }
    }

    if (humanScore > computerScore) {
        console.log(`Congrats! You won the game with score ${humanScore}! Computer score: ${computerScore}.`);
    } else if (computerScore > humanScore) {
        console.log(
            `You lost! Computer score: ${computerScore}, Your score: ${humanScore}.`,
        );
    } else {
        console.log(`It's a tie! give it another try.`);
    }
}

playGame();
