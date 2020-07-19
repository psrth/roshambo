// App..js — Roshambo
// Parth Sharma — 19/07/20

console.log("thanks for peeking beneath the hood :))");


// cacheing the DOM

const userScore = 0;
const computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");

const rock_div = document.getElementById("rock");
const lizard_div = document.getElementById("lizard");
const scissors_div = document.getElementById("scissors");
const spock_div = document.getElementById("spock");
const paper_div = document.getElementById("paper");



// method for computer to select random option

function getComputerChoice () {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const randomNumber = Math.floor(Math.random()*5);
    
    return choices[randomNumber];
}

// user choice
function game (userChoice) {
    const computerChoice = getComputerChoice();
    console.log("computer clicked "+computerChoice);

    switch (userChoice + computerChoice) {
        // all USER win cases
        case "rockscissors":
        case "rocklizard":
        case "scissorspaper":
        case "scissorslizard":
        case "spockscissors":
        case "spockrock":
        case "lizardspock":
        case "lizardpaper":
        case "paperrock":
        case "paperspock":
            console.log("user wins.");
            break;

        // all COMP win cases
        case "rockspock":
        case "rockpaper":
        case "scissorsrock":
        case "scissorsspock":
        case "spockpaper":
        case "spocklizard":
        case "lizardrock":
        case "lizardscissors":
        case "paperscissors":
        case "paperlizard":
            console.log("computer wins.");
            break;

        // all DRAW cases
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        case "lizardlizard":
        case "spockspock":
            console.log("game is a draw.");
            break;
    }



}



// defining main method
function main () {

    // button event listeners

    rock_div.addEventListener('click', function(){
        console.log("you clicked rock.")
        game ("rock");
    })
    
    paper_div.addEventListener('click', function(){
        console.log("you clicked paper.")
        game ("paper");
    })
    
    scissors_div.addEventListener('click', function(){
        console.log("you clicked scissors.")
        game ("scissors");
    })
    
    lizard_div.addEventListener('click', function(){
        console.log("you clicked lizard.")
        game ("lizard");
    })
    
    spock_div.addEventListener('click', function(){
        console.log("you clicked spock.")
        game ("spock");
    })
}

// running the main method
main();
