let humanScore = 0
let computerScore = 0

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let msg = playRound(humanSelection, computerSelection)
console.log(msg)

function getComputerChoice(){

    let num = Math.random() * 3;
    let choice = ""

    if (num <1){
        choice = "rock"
    }else if (num <2){
        choice = "paper"
    }else{
        choice = "scissors"
    }

    return choice
}

function getHumanChoice(){

    let valid = false
    let userInput = ""

    do{
        userInput = prompt("Enter rock, paper or scissors")
        
        valid = isValidChoice(userInput)

    } while (!valid)

    return userInput
}

function isValidChoice (choice){
    let valid = false

    choice = choice.toLowerCase()

    if (choice === "rock" | choice === "paper" | choice === "scissors"){
        valid = true;
    }

    return valid
}

function playRound(humanChoice, computerChoice){

    let msg = ""

    if (humanChoice === computerChoice){
        msg = "You tie! " + humanChoice + " ties " + computerChoice
    } else if (humanChoice === "rock"){
        if (computerChoice === "paper"){
            msg = "You lose! " + computerChoice + " beats " +humanChoice
        }else{
            msg = "You win! " + humanChoice + " beats " + computerChoice
        }
    }else if (humanChoice === "paper"){
        if (computerChoice === "rock"){
            msg = "You win! " + humanChoice + " beats " + computerChoice
        }else{
            msg = "You lose! " + computerChoice + " beats " +humanChoice
        }
    }else{
        if (computerChoice === "rock"){
            msg = "You lose! " + computerChoice + " beats " +humanChoice
        }else{
            msg = "You win! " + humanChoice + " beats " + computerChoice
        }
    }


    return msg
}