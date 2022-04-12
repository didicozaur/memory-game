cardsArr.sort(() => 0.5 - Math.random());

const grid = document.querySelector("#grid");

let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];
let score = document.querySelector("#score");
let scoreCount = 0;

function checkForMatch() {
  const cards = document.querySelectorAll("img");

  let clickedFirstCard = cardsChosen[0];
  let clickedSecondCard = cardsChosen[1];

  let clickedFirstId = cardsChosenIds[0];
  let clickedSecondId = cardsChosenIds[1];

  if (clickedFirstCard === clickedSecondCard) {
    cards[clickedFirstId].removeEventListener("click", turnCard);
    cards[clickedSecondId].removeEventListener("click", turnCard);
    console.log("You found a match!");
    cardsChosenIds = [];
    cardsChosen = [];
    scoreCount++;
    score.textContent = scoreCount;
    cardsWon.push(clickedFirstCard);
    console.log(cardsWon.length, cardsArr.length / 2);
  } else if (cardsWon.length == cardsArr.length / 2) {
    score.innerHTML = "You won!!!";
  } else {
    console.log("Sorry, try again!");
    setTimeout(function () {
      cards[clickedFirstId].setAttribute("src", "images/question1.jpg");
      cards[clickedSecondId].setAttribute("src", "images/question1.jpg");

      cardsChosenIds = [];
      cardsChosen = [];
    }, 500);
  }
}

function turnCard() {
  const cardId = this.getAttribute("data-id");

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
