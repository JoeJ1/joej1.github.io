      function win(player){
        if(player == "noughts"){
          alert("You (noughts) wins!")
        }else if(player == "crosses"){
          alert("Opponent (crosses) wins!")
        }else{
          alert("Draw. Everyone loses!");
        }
        document.getElementById('a1').innerHTML = '&nbsp;';document.getElementById('a2').innerHTML = '&nbsp;';document.getElementById('a3').innerHTML = '&nbsp;';
        document.getElementById('b1').innerHTML = '&nbsp;';document.getElementById('b2').innerHTML = '&nbsp;';document.getElementById('b3').innerHTML = '&nbsp;';
        document.getElementById('c1').innerHTML = '&nbsp;';document.getElementById('c2').innerHTML = '&nbsp;';document.getElementById('c3').innerHTML = '&nbsp;';
        document.getElementById('turnIndicator').innerHTML = "Your turn (noughts)";
      }
      function winCheck(){
        //assigning short variable names to each square on the board for easier checking
        a1 = document.getElementById('a1').innerHTML;a2 = document.getElementById('a2').innerHTML;a3 = document.getElementById('a3').innerHTML;
        b1 = document.getElementById('b1').innerHTML;b2 = document.getElementById('b2').innerHTML;b3 = document.getElementById('b3').innerHTML;
        c1 = document.getElementById('c1').innerHTML;c2 = document.getElementById('c2').innerHTML;c3 = document.getElementById('c3').innerHTML;

        //checking if any player has won
        if((a1 == 'X' && a2 == 'X' && a3 == 'X') || (a1 == 'O' && a2 == 'O' && a3 == 'O')){
          if(a1 == 'X'){
            win('crosses');
          }else{
            win('noughts')
          }
        }else if((b1 == 'X' && b2 == 'X' && b3 == 'X') || (b1 == 'O' && b2 == 'O' && b3 == 'O')){
          if(b1 == 'X'){
            win('crosses');
          }else{
            win('noughts')
          }
        }else if((c1 == 'X' && c2 == 'X' && c3 == 'X') || (c1 == 'O' && c2 == 'O' && c3 == 'O')){
          if(c1 == 'X'){
            win('crosses');
          }else{
            win('noughts')
          }
        }else if((a1 == 'X' && b1== 'X' && c1 == 'X') || (a1 == 'O' && b1== 'O' && c1 == 'O')){
          if(a1 == 'X'){
            win('crosses');
          }else{
            win('noughts')
          }
        }else if((a2 == 'X' && b2== 'X' && c2 == 'X') || (a2 == 'O' && b2 == 'O' && c2 == 'O')){
          if(a2 == 'X'){
            win('crosses');
          }else{
            win('noughts')
          }
        }else if((a3 == 'X' && b3 == 'X' && c3 == 'X') || (a3 == 'O' && b3 == 'O' && c3 == 'O')){
          if(a3 == 'X'){
            win('crosses')
          }else{
            win('noughts')
          }
        }else if((a1 == 'X' && b2 == 'X' && c3 == 'X') || (a1 == 'O' && b2 == 'O' && c3 == 'O')){
          if(a1 == 'X'){
            win('crosses');
          }else{
            win('noughts')
          }
        }else if((a3 == 'X' && b2 == 'X' && c1 == 'X') || (a3 == 'O' && b2 == 'O' && c1 == 'O')){
          if(a3 == 'X'){
            win('crosses')
          }else{
            win('noughts')
          }
        }else if(a1 != '&nbsp;' && a2 != '&nbsp;' && a3 != '&nbsp;' && b1 != '&nbsp;' && b2 != '&nbsp;' && b3 != '&nbsp;' && c1 != '&nbsp;' && c2 != '&nbsp;' && c3 != '&nbsp;'){
          win('none');
          }
        }
      function opponentPlay(){
        console.log('opponent turn start')
        a1 = document.getElementById('a1').innerHTML;a2 = document.getElementById('a2').innerHTML;a3 = document.getElementById('a3').innerHTML;
        b1 = document.getElementById('b1').innerHTML;b2 = document.getElementById('b2').innerHTML;b3 = document.getElementById('b3').innerHTML;
        c1 = document.getElementById('c1').innerHTML;c2 = document.getElementById('c2').innerHTML;c3 = document.getElementById('c3').innerHTML;

        var positions = []
        if(a1 == '&nbsp;'){positions.push('a1')}if(a2 == '&nbsp;'){positions.push('a2')}if(a3 == '&nbsp;'){positions.push('a3')}
        if(b1 == '&nbsp;'){positions.push('b1')}if(b2 == '&nbsp;'){positions.push('b2')}if(b3 == '&nbsp;'){positions.push('b3')}
        if(c1 == '&nbsp;'){positions.push('c1')}if(c2 == '&nbsp;'){positions.push('c2')}if(c3 == '&nbsp;'){positions.push('c3')}

        console.log(positions)
        var position = positions[Math.floor(Math.random()*positions.length)].toString()
        console.log('chosen position: '+position)
        document.getElementById(position).innerHTML = 'X'
        document.getElementById('turnIndicator').innerHTML = "Your turn (noughts)";
        console.log('opponent turn ended')
        winCheck();
      }


      function play(position){
        console.log("element clicked: "+position);
        //Finding which piece to place
        if(document.getElementById('turnIndicator').innerHTML != "Opponent's turn (crosses)"){
          console.log('clicked element innerHTML: '+document.getElementById(position.toString()).innerHTML)
          //checking if place is legal and which player to change to.
          if(document.getElementById(position.toString()).innerHTML == "&nbsp;"){
            document.getElementById(position.toString()).innerHTML = 'O';
            document.getElementById('turnIndicator').innerHTML = "Opponent's turn (crosses)";
            winCheck();
            opponentPlay();
          }
        }else{
          opponentPlay();
        }
      }
