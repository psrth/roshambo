// App..js — Roshambo
// Parth Sharma — 19/07/20

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