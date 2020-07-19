// App..js — Roshambo
// Parth Sharma — 19/07/20

console.log("thanks for peeking beneath the hood :))");


// cacheing the DOM

let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");

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

function win (user, comp) {

    console.log("user wins.");

    // updating user scoreboard
    userScore++;
    userScore_span.innerHTML = userScore;

    // updating the result div when WIN
    if (user === "rock" && comp === "scissors") {
        result_div.innerHTML = "Rock crushes Scissors. You win!";
    }
    if (user === "rock" && comp === "lizard") {
        result_div.innerHTML = "Rock crushes Lizard. You win!";
    }
    if (user === "scissors" && comp === "paper") {
        result_div.innerHTML = "Scissors cut Paper. You win!";
    }
    if (user === "scissors" && comp === "lizard") {
        result_div.innerHTML = "Scissors decapitate Lizard. You win!";
    }
    if (user === "spock" && comp === "scissors") {
        result_div.innerHTML = "Spock smashes Scissors. You win!";
    }
    if (user === "spock" && comp === "rock") {
        result_div.innerHTML = "Spock vaporizes Rock. You win!";
    }
    if (user === "lizard" && comp === "spock") {
        result_div.innerHTML = "Lizard poisons Spock. You win!";
    }
    if (user === "lizard" && comp === "paper") {
        result_div.innerHTML = "Lizard eats Paper. You win!";
    }
    if (user === "paper" && comp === "rock") {
        result_div.innerHTML = "Paper covers Rock. You win!";
    }
    if (user === "paper" && comp === "spock") {
        result_div.innerHTML = "Paper disapproves Spock. You win!";
    }

    // change glow
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function() { document.getElementById(user).classList.remove('green-glow')}, 400);

}

function lose(user, comp) {
    console.log("computer wins.");

    // updating comp scoreboard
    computerScore++;
    computerScore_span.innerHTML = computerScore;

    // updating the result div when LOSE
    if (user === "rock" && comp === "spock") {
        result_div.innerHTML = "Spock vaporizes Rock. You lose!";
    }
    if (user === "rock" && comp === "paper") {
        result_div.innerHTML = "Paper covers Rock. You lose!";
    }
    if (user === "scissors" && comp === "rock") {
        result_div.innerHTML = "Rock crushes Scissors. You lose!";
    }
    if (user === "scissors" && comp === "spock") {
        result_div.innerHTML = "Spock smashes Scissors. You lose!";
    }
    if (user === "spock" && comp === "paper") {
        result_div.innerHTML = "Paper disapproves Spock. You lose!";
    }
    if (user === "spock" && comp === "lizard") {
        result_div.innerHTML = "Lizard poisons Spock. You lose!";
    }
    if (user === "lizard" && comp === "rock") {
        result_div.innerHTML = "Rock crushes Lizard. You lose!";
    }
    if (user === "lizard" && comp === "scissors") {
        result_div.innerHTML = "Scissors decapitate Lizard. You lose!";
    }
    if (user === "paper" && comp === "lizard") {
        result_div.innerHTML = "Lizard eats Paper. You lose!";
    }
    if (user === "paper" && comp === "scissors") {
        result_div.innerHTML = "Scissors cut Paper. You lose!";
    }

    // change glow
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function() { document.getElementById(user).classList.remove('red-glow')}, 400);
}

function draw(user, comp) {
    console.log("game is a draw.");
    result_div.innerHTML = "Both selected "+user+". It's a draw!";
    // change glow
    document.getElementById(user).classList.add('gray-glow');
    setTimeout(function() { document.getElementById(user).classList.remove('gray-glow')}, 400);
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
            win(userChoice, computerChoice);
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
            lose(userChoice, computerChoice);
            break;

        // all DRAW cases
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        case "lizardlizard":
        case "spockspock":
            draw(userChoice, computerChoice);
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
