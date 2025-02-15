const prompt = require('prompt-sync')()

let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let choice = Math.floor(Math.random() * (3 - 0));
         if  (choice === 0) {
            return ('Rock')
        } else if (choice === 1) {
            return ('Paper')
        } else {
            return ('Scissors')
        }
}

// console.log(getComputerChoice())


// const playerChoice = prompt('type "Rock","Paper", or "Scissors": ')
function getHumanChoice() {
    let playerChoice = prompt('type "Rock","Paper", or "Scissors": ')
    if (playerChoice === "Rock") {
        return ("Rock")
    } else if (playerChoice === "Paper") {
        return ("Paper")
    } else if (playerChoice === "Scissors") {
        return ("Scissors")
    }
}

//  console.log(getHumanChoice())

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return ("It's a tie!");
      } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
      ) {
        console.log(++humanScore)
        return (`You win! ${humanChoice} beats ${computerChoice}`);
      } else {
        return (`You lose! ${computerChoice} beats ${humanChoice}`);
      }    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
// playRound(humanSelection, computerSelection);

console.log(playRound(humanSelection, computerSelection))
