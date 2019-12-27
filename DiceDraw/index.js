function randomImage() {
  var myImages = [
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png"
  ];

  var random = Math.floor(Math.random() * 6);
  var random2 = Math.floor(Math.random() * 6);

  if (document.querySelector("img.first").src == "./images/dice6.png") {
    document.querySelector("img.first").src = myImages[random];
    document.querySelector("img.second").src = myImages[random2];
  } else {
    document.querySelector("img.first").src = myImages[random];
    document.querySelector("img.second").src = myImages[random2];
  }

  if (random > random2) {
      document.querySelector("h3").innerHTML = "Player 1 Wins!"
  }
  else if (random2 > random) {
      document.querySelector("h3").innerHTML = "Player 2 Wins!"
  }
  else {
      document.querySelector("h3").innerHTML = "Draw!"
  }
}
