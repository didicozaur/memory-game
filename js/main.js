const grid = document.querySelector("#grid");
let time = document.querySelector("#time-remaining");
let flips = document.querySelector("#flips");
const startButtom = document.querySelector("#start-btn");
const title = document.querySelector(".title");

let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

let flipsCount = 0;
let intervalId;

function startCountdown() {
  let counter = 60;
  intervalId = setInterval(function () {
    counter--;
    if (counter >= 0) {
      time.innerHTML = counter;
    }
    if (cardsWon.length == cardsArr.length / 2) {
      title.innerHTML = "Congratulation! You found all the matches!";
      stopCountdown();
    }
    if (counter === 0) {
      title.innerHTML = "Game Over";
      setTimeout(function () {
        title.innerHTML = "Find the Match";
      }, 5000);
    }
  }, 1000);
}
function stopCountdown() {
  clearInterval(intervalId);
}

function checkForMatch() {
  const cards = document.querySelectorAll("img");

  let clickedFirstCard = cardsChosen[0];
  let clickedSecondCard = cardsChosen[1];

  let clickedFirstId = cardsChosenIds[0];
  let clickedSecondId = cardsChosenIds[1];

  if (clickedFirstCard === clickedSecondCard) {
    cards[clickedFirstId].removeEventListener("click", turnCard);
    cards[clickedSecondId].removeEventListener("click", turnCard);
    title.innerHTML = "You found a match!";
    cardsChosenIds = [];
    cardsChosen = [];
    cardsWon.push(clickedFirstCard);
  } else if (cardsWon.length == cardsArr.length / 2) {
    stopCountdown();
  } else {
    setTimeout(function () {
      cards[clickedFirstId].setAttribute("src", "images/question1.jpg");
      cards[clickedSecondId].setAttribute("src", "images/question1.jpg");

      cardsChosenIds = [];
      cardsChosen = [];
      title.innerHTML = "Sorry, try again!";
    }, 500);
  }
}

function turnCard() {
  const cardId = this.getAttribute("data-id");
  flipsCount++;
  flips.innerHTML = flipsCount;
  cardsChosen.push(cardsArr[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute("src", cardsArr[cardId].img);
  if (cardsChosen.length === 2) {
    checkForMatch();
  }
}

function createBoard() {
  for (let i = 0; i < cardsArr.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/question1.jpg");
    card.setAttribute("data-id", i);
    card.addEventListener("click", turnCard);
    grid.appendChild(card);
  }
}
createBoard();
