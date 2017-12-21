function roll(){
  var diceRoll = Math.floor(Math.random()*(6)+1);
  document.getElementById('diceImage').src = diceRoll+".png"
  if(diceRoll == 1){
    document.getElementById('thisRoundScore').innerHTML = 0;
    if(document.getElementById('playerIndicator').innerHTML == "Player1's turn"){
      document.getElementById('playerIndicator').innerHTML = "Player2's turn"
    }else{
      document.getElementById('playerIndicator').innerHTML = "Player1's turn"
    }
  }else{
    document.getElementById('thisRoundScore').innerHTML = parseInt(document.getElementById('thisRoundScore').innerHTML) + diceRoll;
  }
}

function hold(){
  scoreToAdd = parseInt(document.getElementById('thisRoundScore').innerHTML);
  document.getElementById('thisRoundScore').innerHTML = 0;
  if(document.getElementById('playerIndicator').innerHTML == "Player1's turn"){
    document.getElementById('player1Score').innerHTML = parseInt(document.getElementById('player1Score').innerHTML) + scoreToAdd;
    document.getElementById('playerIndicator').innerHTML = "Player2's turn"
  }else{
    document.getElementById('player2Score').innerHTML = parseInt(document.getElementById('player2Score').innerHTML) + scoreToAdd;
    document.getElementById('playerIndicator').innerHTML = "Player1's turn"
  }
  if(parseInt(document.getElementById('player1Score').innerHTML) >=100){
    alert("player 1 wins!!!!!")
    document.getElementById('thisRoundScore').innerHTML = 0;
    document.getElementById('player1Score').innerHTML = 0;
    document.getElementById('player2Score').innerHTML = 0;
  }else{
    if(parseInt(document.getElementById('player2Score').innerHTML) >=100){
      alert("player 2 wins!!!!!")
      document.getElementById('thisRoundScore').innerHTML = 0;
      document.getElementById('player1Score').innerHTML = 0;
      document.getElementById('player2Score').innerHTML = 0;
    }
  }
}
