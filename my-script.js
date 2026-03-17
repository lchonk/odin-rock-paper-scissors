function getComputerChoice(){
    let computerChoice = "";
    const randomNumber = Math.random();

    if(randomNumber <= 0.33){
        computerChoice = "rock";
    } else if(randomNumber <= 0.66){
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice(){
    const message = "rock, paper or scissors?"
    const userInput = prompt(message);
    userInput.toLowerCase;
    // why did the previous evaluation not work??
    if(userInput == "paper" || userInput == "scissors" || userInput == "rock" ){
        return userInput;
    }
}


function playRound(humanSelection, computerSelection){
    let hasPlayerWon = false;
    switch(humanSelection){
        case "rock": {
            switch(computerSelection) {
                case "rock": {
                    console.log("It's a tie! No one gets a point.")
                    break;
                }
                case "paper": {
                    console.log("Computer wins. Paper beats Rock.")
                    break;
                }
                case "scissors":{
                    console.log("Human wins. Rock beats Scissors.")
                    hasPlayerWon = true;
                    break;
                }
                default:
            }
            break;
        }
        case "paper":{
            switch(computerSelection) {
                case "paper": {
                    console.log("It's a tie! No one gets a point.")
                    break;
                }
                case "rock": {
                    console.log("Human wins. Paper beats Rock.")
                    hasPlayerWon = true;
                    break;
                }
                case "scissors":{
                    console.log("Computer wins. Scissors beat Paper.")
                    break;
                }
                default:
            }
            break;
        } 
        case "scissors":{
            switch(computerSelection) {
                case "scissors": {
                    console.log("It's a tie! No one gets a point.")
                    break;
                }
                case "paper": {
                    console.log("Human wins. Scissors beat Rock.")
                    hasPlayerWon = true;
                    break;
                }
                case "rock":{
                    console.log("Computer wins. Rock beats Scissors.")
                    break;
                }
                default:
            }
            break;
        }
        default:
    }
    return hasPlayerWon;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        
        console.log("Computer: " + computerSelection);
        console.log("Human: " + humanSelection);
        const hasPlayerWon = playRound(humanSelection, computerSelection);
        hasPlayerWon ? humanScore++ : computerScore++;
        logScoreBoard(humanScore, computerScore);
    }

    if(humanScore > computerScore) {
        console.log("Congratulation, the human has won. The fight against the machine continues!");
    } else {
        console.log("The machine have overcome human intuition. Is this the end?")
    }
}

function logScoreBoard(humanScore, computerScore){
    console.log(`
    Human Score: ${humanScore}
    Computer Score: ${computerScore}
`);
}

playGame();