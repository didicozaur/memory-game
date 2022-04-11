const cardsArr = [
  {
    name: "elephant",
    img: "images/elephant.jpg",
  },
  {
    name: "fox",
    img: "images/fox.jpg",
  },
  {
    name: "giraffe",
    img: "images/giraffe.jpg",
  },
  {
    name: "horse",
    img: " images/horse.jpg",
  },
  {
    name: "hummingbird",
    img: "images/hummingbird.jpg",
  },
  {
    name: "owl",
    img: "images/owl.jpg",
  },
  {
    name: "parrot",
    img: "images/parrot.jpg",
  },
  {
    name: "squirrel",
    img: "images/squirrel",
  },
  {
    name: "two birds",
    img: "images/two birds.jpg",
  },
  {
    name: "wood-pecker",
    img: "images/wood-pecker.jpg",
  },
  {
    name: "elephant",
    img: "images/elephant.jpg",
  },
  {
    name: "fox",
    img: "images/fox.jpg",
  },
  {
    name: "giraffe",
    img: "images/giraffe.jpg",
  },
  {
    name: "horse",
    img: " images/horse.jpg",
  },
  {
    name: "hummingbird",
    img: "images/hummingbird.jpg",
  },
  {
    name: "owl",
    img: "images/owl.jpg",
  },
  {
    name: "parrot",
    img: "images/parrot.jpg",
  },
  {
    name: "squirrel",
    img: "images/squirrel",
  },
  {
    name: "two birds",
    img: "images/two birds.jpg",
  },
  {
    name: "wood-pecker",
    img: "images/wood-pecker.jpg",
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
