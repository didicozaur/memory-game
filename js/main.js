const cardsArr = [
  {
    name: "elephant",
    img: "images/cards/elephant.jpg",
  },
  {
    name: "giraffe",
    img: "images/cards/giraffe.jpg",
  },
  {
    name: "horse",
    img: " images/cards/horse.jpg",
  },
  {
    name: "hummingbird",
    img: "images/cards/hummingbird.jpg",
  },
  {
    name: "parrot",
    img: "images/cards/parrot.jpg",
  },
  {
    name: "squirrel",
    img: "images/cards/squirrel",
  },
  {
    name: "two birds",
    img: "images/cards/two birds.jpg",
  },
  {
    name: "wood-pecker",
    img: "images/cards/wood-pecker.jpg",
  },
  {
    name: "elephant",
    img: "images/cards/elephant.jpg",
  },
  {
    name: "giraffe",
    img: "images/cards/giraffe.jpg",
  },
  {
    name: "horse",
    img: " images/cards/horse.jpg",
  },
  {
    name: "hummingbird",
    img: "images/cards/hummingbird.jpg",
  },
  {
    name: "parrot",
    img: "images/cards/parrot.jpg",
  },
  {
    name: "squirrel",
    img: "images/cards/squirrel",
  },
  {
    name: "two birds",
    img: "images/cards/two birds.jpg",
  },
  {
    name: "wood-pecker",
    img: "images/cards/wood-pecker.jpg",
  },
];

cardsArr.sort(() => 0.5 - Math.random());

const grid = document.querySelector("#grid");
const cardsChosen = [];

console.log("grid");

function createBoard() {
  for (let i = 0; i < cardsArr.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/question1.jpg");
    card.setAttribute("data-id", i);
    card.addEventListener("click", turnCard);
    grid.appendChild(card);
    console.log(card, i);
  }
}

createBoard();

function turnCard() {
  const cardId = this.getAttribute("data-id");

  cardsChosen.push(cardsArr[cardId].name);
  console.log("clicked", cardId);
  console.log(cardsChosen);
}
