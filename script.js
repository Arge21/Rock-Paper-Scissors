

function getComputerChoice () {
    let number = Math.floor(Math.random() * 3);

    if (number === 0) {
        return `Rock`
    } else if (number === 1) {
        return `Paper`
    } else if (number === 2) {
        return `Scissors`
    }

}

console.log(getComputerChoice())

function getHumanChoice () {
    let choice = prompt(`Select Rock, Paper or Scissors`);

    if (choice.toLocaleLowerCase() === "rock") {
        return `Rock`
    } else if (choice.toLowerCase() === `paper`){
        return `Paper`
    } else if (choice.toLowerCase() === `scissors`) {
        return `Scissors`
    }
}

console.log(getHumanChoice())