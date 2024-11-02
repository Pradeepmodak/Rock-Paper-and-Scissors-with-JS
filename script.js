const compScoreDisplay = document.querySelector("#comp-score-para");
const userScoreDisplay = document.querySelector("#user-score-para");
let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");

const compChoice = () => {
  let options = ["rock", "paper", "scissor"];
  let idx = Math.floor(Math.random() * 3);
  return options[idx];
};

choices.forEach((choice) => {
  choice.addEventListener("mouseenter", () => {
    if (choice.getAttribute("id") === "rock") {
      choice.children[0].classList.add("fa-beat");
    } else if (choice.getAttribute("id") === "paper") {
      choice.children[0].classList.add("fa-bounce");
    } else {
      choice.children[0].classList.add("fa-shake");
    }
  });
  choice.addEventListener("mouseleave", () => {
    if (choice.getAttribute("id") === "rock") {
      choice.children[0].classList.remove("fa-beat");
    } else if (choice.getAttribute("id") === "paper") {
      choice.children[0].classList.remove("fa-bounce");
    } else {
      choice.children[0].classList.remove("fa-shake");
    }
  });
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice, compChoice());
  });
});

const msgdisplay = document.querySelector(".msg-display");
let msg = "Let's Play the Game";

const getmsg = (flag, userChoice, compChoice) => {
  if (!flag) {
    compScore++;
    msg = `User Lost ${compChoice} beats ${userChoice}`;
    msgdisplay.style.background = "red";
  } else {
    userScore++;
    msg = `User Wins ${userChoice} beats ${compChoice}`;
    msgdisplay.style.background = "green";
  }
  if (userChoice == compChoice) {
    msg = "Draw Game";
    msgdisplay.style.background = "#CCCC00";
  }
  compScoreDisplay.textContent = compScore;
  userScoreDisplay.textContent = userScore;
  msgdisplay.textContent = msg;
};
const declareWinner = (userChoice, compChoice) => {
  let flag = 1;
  if (userChoice == compChoice) {
  } else if (userChoice === "rock" && compChoice === "paper") {
    flag = 0;
  } else if (userChoice === "paper" && compChoice === "scissor") {
    flag = 0;
  } else if (userChoice === "scissor" && compChoice === "rock") {
    flag = 0;
  }
  getmsg(flag, userChoice, compChoice);
};
const playGame = (userChoice, compChoice) => {
  declareWinner(userChoice, compChoice);
};
