
const computerChoiceDisplay = document.getElementById("ComputerChoice");
const userChoiceDisplay = document.getElementById("UserChoice");
const resultDisplay = document.getElementById("Result");
const possibleChoices = document.querySelectorAll("button");
let userChoice 
let computerChoice
let result
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice()
    getAllResult()
  })
);
/**
 * This function generates a random number between 1 and 3.
 */

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3)+1
    if (randomNumber == 1){
        computerChoice="Rock"
    }
    if (randomNumber == 2){
        computerChoice="Paper"
    }
    if (randomNumber == 1){
        computerChoice="Scissors"
    }

    computerChoiceDisplay.innerHTML=computerChoice
}




function getAllResult() {
   
    if((computerChoice == "Rock") && (userChoice == "Paper")){
        result ='You won!';
        
    }
    if((computerChoice == "Rock") && (userChoice == "Scissors")){
        result ='Computer won!';
        
    }
    if((computerChoice == "Paper") && (userChoice == "Rock")){
        result ='Computer won!';
        
    }
    if((computerChoice === "Paper") && (userChoice === "Scissors")){
        result ='You won!';
        
    }
    if((computerChoice === "Scissors") && (userChoice === "Rock")){
        result ='You won!';
        
    }
    if((computerChoice === "Scissors") && (userChoice === "Paper")){
        result ='Computer won!';
        
    }
    if(computerChoice === userChoice){
        result ='it is draw!';
        
    }
    resultDisplay.innerHTML= result
}