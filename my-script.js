let humanScore = 0;
let computerScore = 0;

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
                    message.textContent = "It's a tie! No one gets a point."
                    break;
                }
                case "paper": {
                    message.textContent = "Computer wins. Paper beats Rock."
                    break;
                }
                case "scissors":{
                    message.textContent = "Human wins. Rock beats Scissors."
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

    hasPlayerWon ? humanScore++ : computerScore++;
    logScoreBoard(humanScore, computerScore);
    updateMessage();
}

const container = document.querySelector("div");


const result = document.createElement("div");
result.textContent=`
    Human Score: ${humanScore}
    Computer Score: ${computerScore}
    `;
container.appendChild(result);

const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
container.appendChild(rockBtn);

const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
container.appendChild(paperBtn);

const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Button";
container.appendChild(scissorsBtn);

const message = document.createElement("div");
message.textContent = "";
container.appendChild(message);

const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const computerChoice = getComputerChoice();
        let hasPlayerWon = false;
        switch(e.target){
            case rockBtn: {
                playRound("rock", computerChoice);
                break;
            }
            case paperBtn: {
                playRound("paper", computerChoice);
                break;
            }
            case scissorsBtn: {
                playRound("scissors", computerChoice);
                break;
            }
            default:
        }
    })
})

function checkWinCondition(){
    if (humanScore >= 5 || computerScore >= 5){
        return true;
    }
    return false;
}
function logScoreBoard(humanScore, computerScore){
    result.textContent=`
    Human Score: ${humanScore}
    Computer Score: ${computerScore}
    `;
}
function updateMessage(){

    if(checkWinCondition()){
        const winner = humanScore > computerScore ? "Human" : "Computer";
        message.textContent = `${winner} has won the game!`;
    }
}