

let humanScore = 0;
let computerScore = 0;
let ties = 0;
let playAgain;

do{
    alert("Let's play rock, paper, scissors!");
    playGame();

    playAgain = window.prompt("Play Again? Type 'no' to exit.")
    playAgain = playAgain.toLowerCase();

} while (playAgain !== "no")



// Past this are all the function definitions
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

function getHumanChoice(){
    let choice;

    do{ choice = window.prompt("Type rock, paper, or scissors");
        choice = choice.toLowerCase();
    }
    while(choice !== "rock" && choice !== "paper" && choice !== "scissors");

    return choice;
}

function playRound(){

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    //Depending on humanChoice, who wins and update score
    if(humanChoice === "rock"){
        switch(computerChoice){
            case "rock":
                alert("It's a tie! Rock vs Rock!");
                ties++;
                break;
            case "paper":
                alert("You lose! Paper beats Rock!");
                computerScore++;
                break;
            case "scissors":
                alert("You win! Rock beats Scissors!");
                humanScore++;
                break;
        }
    }

    if(humanChoice === "paper"){
        switch(computerChoice){
            case "paper":
                alert("It's a tie! Paper vs Paper!");
                ties++;
                break;
            case "scissors":
                alert("You lose! Scissors beats Paper!");
                computerScore++;
                break;
            case "rock":
                alert("You win! Paper beats Rock!");
                humanScore++;
                break;
        }
    
    }

    if(humanChoice === "scissors"){
        switch(computerChoice){
            case "scissors":
                alert("It's a tie! Scissors vs Scissors!");
                ties++;
                break;
            case "rock":
                alert("You lose! Rock beats Scissors!");
                computerScore++;
                break;
            case "paper":
                alert("You win! Scissors beats Paper!");
                humanScore++;
                break;
        }
    
    }
}

function playGame(){
    for(round = 0; round < 5 ; round++){
        alert("Ties: " + ties + "   Your wins: " + humanScore + "   CPU wins: " + computerScore)
        playRound();
    }
    if (humanScore > computerScore){
        alert("Ties: " + ties + "   Your wins: " + humanScore + "   CPU wins: " + computerScore + "         YOU WIN!")  
    } else if(humanScore < computerScore) {
        alert("Ties: " + ties + "   Your wins: " + humanScore + "   CPU wins: " + computerScore + "         You lost...!")
    } else {
        alert("Ties: " + ties + "   Your wins: " + humanScore + "   CPU wins: " + computerScore + "         Wow a Tie?!")
    }

    humanScore = 0;
    computerScore = 0;
    ties = 0;


}