

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

    do{ choice = window.prompt("Type rock, paper, or scissors in all lowercase");}
    while(choice !== "rock" && choice !== "paper" && choice !== "scissors");

    return choice;
}




console.log("You throw out: " + getHumanChoice());
console.log("Computer throws out: " + getComputerChoice());