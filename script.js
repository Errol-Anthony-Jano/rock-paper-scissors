//0 - rock
//1 - paper
//2 - scissors

const CHOICES = 3 // number of choices for rock paper scissors
let humanScore = 0;
let computerScore = 0;

const myScoreLabel = document.querySelector("#myScoreLabel")
const pcScoreLabel = document.querySelector("#pcScoreLabel")

const myScoreDisplay = document.createElement("div")
myScoreDisplay.textContent = humanScore
myScoreLabel.appendChild(myScoreDisplay)


const pcScoreDisplay = document.createElement("div")
pcScoreDisplay.textContent = computerScore
pcScoreLabel.appendChild(pcScoreDisplay)

const btnRock = document.querySelector("#rock")
const btnPaper = document.querySelector("#paper")
const btnScissors = document.querySelector("#scissors")

const buttons = document.querySelector("body")

buttons.addEventListener("click", (e) => {
    function getHumanChoice() {
        switch(e.target.id) {
            case "rock":
                return "ROCK";
            case "paper":
                return "PAPER";
            case "scissors":
                return "SCISSORS";
        }
    }
    const humanChoice = getHumanChoice()

    const computerChoice = getComputerChoice()

    playRound(computerChoice, humanChoice)

    if (computerScore == 5) {
        alert("Computer wins the race to 5!")
        computerScore = 0;
        pcScoreDisplay.textContent = computerScore;
        humanScore = 0;
        myScoreDisplay.textContent = humanScore;
    }
    else if (humanScore == 5) {
        alert("You win the race to 5!")
        computerScore = 0;
        pcScoreDisplay.textContent = computerScore;
        humanScore = 0;
        myScoreDisplay.textContent = humanScore;
    }
});


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



function playRound(computerChoice, humanChoice) {
    if (computerChoice == "ROCK" && humanChoice == "PAPER") {
        humanScore += 1
        alert(`You win! Paper beats rock.`)
        
        myScoreDisplay.textContent = humanScore
    }
    else if (computerChoice == "ROCK" && humanChoice == "SCISSORS") {
        computerScore += 1
        alert(`Computer wins! Rock beats scissors.`)
        
        pcScoreDisplay.textContent = computerScore
    }
    else if (computerChoice == "PAPER" && humanChoice == "SCISSORS") {
        humanScore += 1
        alert(`You win! Scissors beat paper.`)
        
        myScoreDisplay.textContent = humanScore
    }
    else if (computerChoice == "PAPER" && humanChoice == "ROCK") {
        computerScore += 1;
        alert(`Computer wins! Paper beats rock.`)
        
        pcScoreDisplay.textContent = computerScore
    }
    else if (computerChoice == "SCISSORS" && humanChoice == "ROCK") {
        humanScore += 1
        alert(`You win! Rock beats scissors.`)
        
        myScoreDisplay.textContent = humanScore
    }
    else if (computerChoice == "SCISSORS" && humanChoice == "PAPER") {
        computerScore += 1;
        alert(`Computer wins! Scissors beat paper.`)

        pcScoreDisplay.textContent = computerScore
    }
    else {
        alert(`Draw! You both chose ${humanChoice}.`)
    }
}


