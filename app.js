const computerChoice = document.getElementById("computer-choice");
const userChoice = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let userPick;
let computerPick;
let result;

possibleChoices.forEach((possibleChoice) => {
  possibleChoice.addEventListener("click", (e) => {
    userPick = e.target.id;
    userChoice.innerHTML = userPick;
    generateComputerChoice();
    getResult();
  });
});

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

  if (randomNumber === 1) {
    computerPick = "rock✊";
  }
  if (randomNumber === 2) {
    computerPick = "scissors✌";
  }
  if (randomNumber === 1) {
    computerPick = "paper✋";
  }
  computerChoice.innerHTML = computerPick;
}

function getResult() {
  if (computerPick === userPick) {
    result = "Its a draw👏!";
  }
  if (computerPick === "rock✊" && userPick === "paper✋") {
    result = "you win😊!";
  }
  if (computerPick === "rock✊" && userPick === "scissors✌") {
    result = "Hahaha...you lose🤣!";
  }
  if (computerPick === "paper✋" && userPick === "scissors✌") {
    result = "you win😊!";
  }
  if (computerPick === "paper✋" && userPick === "rock✊") {
    result = "Hahaha...you lose🤣!";
  }
  if (computerPick === "scissors✌" && userPick === "rock✊") {
    result = "you win😊!";
  }
  if (computerPick === "scissors✌" && userPick === "paper✋") {
    result = "Hahaha...you lose🤣!";
  }
  resultDisplay.innerHTML = result;
}
