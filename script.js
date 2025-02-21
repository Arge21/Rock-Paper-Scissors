let humanScore = 0;
let computerScore = 0;




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




function getHumanChoice () {
    let choice = prompt(`Select Rock, Paper or Scissors`);

    if (choice.toLocaleLowerCase() === "rock") {
        return (`Rock`)
    } else if (choice.toLowerCase() === `paper`){
        return (`Paper`)
    } else if (choice.toLowerCase() === `scissors`) {
        return (`Scissors`)
    } 
}


// function playRound(humanChoice, computerChoice) {
//     if (humanChoice === computerChoice) {
//         console.log(`It's a tie! you both picked ${humanChoice}`);
//     } else if (humanChoice === "rock" && computerChoice === "scissors") {
//         console.log("You win! Rock beats Scissors");
//         console.log(++humanScore)
//     } else if (humanChoice === "paper" && computerChoice === "rock") {
//         console.log("You win! Paper beats Rock");
//         console.log(++humanScore)
//     } else if (humanChoice === "scissors" && computerChoice === "paper") {
//         console.log("You win! Scissors beats Paper");
//         console.log(++humanScore)
//     } else {
//         console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
//         console.log(++computerScore)
//     }
// }


// playRound(humanSelection, computerSelection);


function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        }    
        
        

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`It's a tie! you both picked ${humanChoice}`);
        } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
            console.log("You win! Rock beats Scissors");
                humanScore++;
        } else if (humanChoice === "Paper" && computerChoice === "Rock") {
            console.log("You win! Paper beats Rock");
            humanScore++;
        } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
            console.log("You win! Scissors beats Paper");
            humanScore++;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }


    if (humanScore > computerScore) {
        console.log(`You won the game!`)
    } else {
        console.log(`You lost, u suck`)
    }
}


playGame();