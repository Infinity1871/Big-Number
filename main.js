var gameData = {
  number: 0,
  numberClick: 1
}

function numberUp() {
  gameData.number += gameData.numberClick
  document.getElementById("number").innerHTML = gameData.number + " Number"
}
