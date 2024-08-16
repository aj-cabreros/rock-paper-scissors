

let humanScore = 0;
let computerScore = 0;
let ties = 0;
let roundsPlayed = 0;

// Initializations of DOM Manipulations =========

let textbox = document.querySelector("#textbox");
textbox.textContent = "Choose Rock, Paper, or Scissors to Begin";

let textbox2 = document.querySelector("#textbox2");
textbox2.textContent = "";

let roundNumber = document.querySelector("#round");
roundNumber.textContent = "Rounds Played: " + roundsPlayed;

let score1 = document.querySelector("#score-board-1");
score1.textContent = "Player Score: " + humanScore;

let score2 = document.querySelector("#score-board-2");
score2.textContent = "Ties: " + ties;

let score3 = document.querySelector("#score-board-3");
score3.textContent = "CPU Score: " + computerScore;

let again = document.querySelector("#buttons")
let againButton;


// eventListeners for all three options: rock, paper, scissors
let choice = document.querySelector('#choice');
let humanChoice = choice.addEventListener("click", (e) => {
    let target = e.target;

    switch(target.id) {
        case 'rock':
            if(roundsPlayed >= 5){
            alert("If you wanna play again. Press the button.")
            }else{playRound("rock");}
            break;
        case 'paper':
            if(roundsPlayed >= 5){
            alert("If you wanna play again. Press the button.")
            }else{playRound("paper");}
            break;
        case 'scissors':
            if(roundsPlayed >= 5){
            alert("If you wanna play again. Press the button.")
            }else{playRound("scissors");}
            break;
    }
  });

// ======== Past this are all the function definitions ====================

function getComputerChoice(){
   let value = Math.random();
    //console.log(value);
   if(value < 0.333){
        return "rock";
    } else if(value >= 0.333 && value <=0.666){
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice){

    roundsPlayed++;
    roundNumber.textContent = "Rounds Played: " + roundsPlayed;

    let computerChoice = getComputerChoice();

    //Depending on humanChoice, who wins and update score
    if(humanChoice === "rock"){
        switch(computerChoice){
            case "rock":
                textbox.textContent = "It's a tie! Rock vs Rock!";
                textbox2.textContent = "Choose Rock, Paper, or Scissors to Continue";
                ties++;
                score2.textContent = "Ties: " + ties;
                break;
            case "paper":
                textbox.textContent = "You lose! Paper beats Rock!";
                textbox2.textContent = "Choose Rock, Paper, or Scissors to Continue";
                computerScore++;
                score3.textContent = "CPU Score: " + computerScore;
                break;
            case "scissors":
                textbox.textContent = "You win! Rock beats Scissors!";
                textbox2.textContent = "Choose Rock, Paper, or Scissors to Continue";
                humanScore++;
                score1.textContent = "Player Score: " + humanScore;
                break;
        }
    }

    if(humanChoice === "paper"){
        switch(computerChoice){
            case "paper":
                textbox.textContent = "It's a tie! Paper vs Paper!";
                textbox2.textContent = "Choose Rock, Paper, or Scissors to Continue";
                ties++;
                score2.textContent = "Ties: " + ties;
                break;
            case "scissors":
                textbox.textContent = "You lose! Scissors beats Paper!";
                textbox2.textContent = "Choose Rock, Paper, or Scissors to Continue";
                computerScore++;
                score3.textContent = "CPU Score: " + computerScore;
                break;
            case "rock":
                textbox.textContent = "You win! Paper beats Rock!";
                textbox2.textContent = "Choose Rock, Paper, or Scissors to Continue";
                humanScore++;
                score1.textContent = "Player Score: " + humanScore;
                break;
        }
    
    }

    if(humanChoice === "scissors"){
        switch(computerChoice){
            case "scissors":
                textbox.textContent = "It's a tie! Scissors vs Scissors!";
                textbox2.textContent = "Choose Rock, Paper, or Scissors to Continue";
                ties++;
                score2.textContent = "Ties: " + ties;
                break;
            case "rock":
                textbox.textContent = "You lose! Rock beats Scissors!";
                textbox2.textContent = "Choose Rock, Paper, or Scissors to Continue";
                computerScore++;
                score3.textContent = "CPU Score: " + computerScore;
                break;
            case "paper":
                textbox.textContent = "You win! Scissors beats Paper!";
                textbox2.textContent = "Choose Rock, Paper, or Scissors to Continue";
                humanScore++;
                score1.textContent = "Player Score: " + humanScore;
                break;
        }
    
    }

    if(roundsPlayed == 5){
        endGame();
        againButton = document.createElement("button");
        againButton.setAttribute("id", "restart");
        againButton.textContent = "Play Again?";
        again.appendChild(againButton);
        
        againButton.onclick = () => resetGame();

    }
}

function endGame(){
    
    textbox2.textContent = "Wanna play another?";

    if (humanScore > computerScore){
        textbox.textContent = "After 5 rounds: YOU WIN!";
    } else if(humanScore < computerScore) {
        textbox.textContent = "After 5 rounds: You lost...!";
    } else {
        textbox.textContent = "After 5 rounds: Wow a Tie?!";
    }

    score1.textContent = "Player Score: " + humanScore;
    score2.textContent = "Ties: " + ties;
    score3.textContent = "CPU Score: " + computerScore;
    roundNumber.textContent = "Rounds Played: " + roundsPlayed;

}


function resetGame(){
    humanScore = 0;
    computerScore = 0;
    ties = 0;
    roundsPlayed = 0;

    score1.textContent = "Player Score: " + humanScore;
    score2.textContent = "Ties: " + ties;
    score3.textContent = "CPU Score: " + computerScore;
    roundNumber.textContent = "Rounds Played: " + roundsPlayed;

    textbox.textContent = "Choose Rock, Paper, or Scissors to Begin";
    textbox2.textContent = "";
    again.removeChild(againButton);
}