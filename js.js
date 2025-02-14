const prompt = require('prompt-sync')

function getComputerChoice(choice) {
    return choice = Math.floor(Math.random() * (3 - 0));
}

console.log(getComputerChoice('bruh'))