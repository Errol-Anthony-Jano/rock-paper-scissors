//0 - rock
//1 - paper
//2 - scissors

const CHOICES = 3 // number of choices for rock paper scissors
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * CHOICES)
    switch(choice) {
        case 0:
            return "ROCK"
        case 1:
            return "PAPER"
        case 2:
            return "SCISSORS"
    }
}

function getHumanChoice() {
    let result = prompt("Enter your choice (Rock/Paper/Scissors)")
    return result.toUpperCase()
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice == "ROCK" && humanChoice == "PAPER") {
        humanScore += 1
        alert(`You win! Paper beats rock.\nComputer: ${computerScore}\nYou: ${humanScore}`)
    }
    else if (computerChoice == "ROCK" && humanChoice == "SCISSORS") {
        computerScore += 1
        alert(`Computer wins! Rock beats scissors.\nComputer: ${computerScore}\nYou: ${humanScore}`)
    }
    else if (computerChoice == "PAPER" && humanChoice == "SCISSORS") {
        humanScore += 1
        alert(`You win! Scissors beat paper.\nComputer: ${computerScore}\nYou: ${humanScore}`)
    }
    else if (computerChoice == "PAPER" && humanChoice == "ROCK") {
        computerScore += 1;
        alert(`Computer wins! Paper beats rock.\nComputer: ${computerScore}\nYou: ${humanScore}`)
    }
    else if (computerChoice == "SCISSORS" && humanChoice == "ROCK") {
        humanScore += 1
        alert(`You win! Rock beats scissors.\nComputer: ${computerScore}\nYou: ${humanScore}`)
    }
    else if (computerChoice == "SCISSORS" && humanChoice == "PAPER") {
        computerScore += 1;
        alert(`Computer wins! Scissors beat paper.\nComputer: ${computerScore}\nYou: ${humanScore}`)
    }
    else {
        alert(`Draw! You both chose ${humanChoice}.\nComputer: ${computerScore}\nYou: ${humanScore}`)
    }
}

playRound(getComputerChoice(), getHumanChoice())
playRound(getComputerChoice(), getHumanChoice())
playRound(getComputerChoice(), getHumanChoice())
playRound(getComputerChoice(), getHumanChoice())
playRound(getComputerChoice(), getHumanChoice())

if (computerScore > humanScore) {
    alert("Computer wins!")
}
else if (computerScore < humanScore) {
    alert("You win!")
}
else {
    alert("Draw!")
}