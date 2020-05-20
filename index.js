var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomeNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "images/dice" + randomeNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImage2);

var drawingResult = document.querySelector("h1");


if (randomNumber1 < randomeNumber2) {
  drawingResult.innerHTML = "Player 2 Wins!🚩";
} else if (randomNumber1 > randomeNumber2) {
  drawingResult.innerHTML = "Player 1 Wins!🚩";
} else { drawingResult.innerHTML = "Draw!";
}
