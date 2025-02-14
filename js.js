const prompt = require('prompt-sync')()

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

console.log(getComputerChoice())


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

console.log(getHumanChoice())
