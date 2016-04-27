
   var xPlayer = {
      name: "X",
      turns: 0,
      positions: []
    }

    var oPlayer = {
      name: "O",
      turns: 0,
      positions: []
    }

    var currentPlayer = oPlayer.name;

    // Minimum of turns for a winner
    var minTurnsForWinner = 5; // this equals the sum of oPlayerTurns + xPlayerTurns

    var winner = false;
    var winCombinations = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];

    // tdEl=table data element
    function setValue(tdEl, event) {

        if(winner){
          alert('We have a winner already');
          return;
        }
        var position = event.target.dataset.value;
        if (tdEl.innerText !== '' && !winner) {
            alert('You can not click here!!!');
            return;
        }
        //setting the value of the currentplayer to the tdEl
        tdEl.innerText = currentPlayer;

        setPlayerPosition(position);
        setPlayerTurn(currentPlayer);

        // we should check for winner or not
        if (shouldWeCheckForWinner() && isPlayerWinner(currentPlayer)) {
          alert('You are the winner');
            winner = true;
        }

        var _nextCurrentPlayer = getNextPlayerFromCurrentPlayer();

        // console.log('xPlayer', xPlayer, xPlayerTurns, xPlayerPositions);
        // console.log('oPlayer', oPlayer, oPlayerTurns, oPlayerPositions);


        // we are doing this last, player might WIN in this turn
        setCurrentPlayer(_nextCurrentPlayer);

        // this disables onclick event for a field that has a value
        tdEl.style.pointerEvents = 'none';
    }

    function setPlayerTurn(player) {
        if (player === xPlayer.name) {
            xPlayer.turns += 1;
        } else {
            oPlayer.turns += 1;
        }
    }

    function setPlayerPosition(position) {
      position = parseInt(position,10);
      if (currentPlayer === xPlayer.name) {
            xPlayer.positions.push(position);
        } else {
            oPlayer.positions.push(position);
        }
    }


    // This returns true if there is more than 5 turns
    // or false if less than 5 turns
    // default output is FALSE
    function shouldWeCheckForWinner() {
        var shouldCheck = xPlayer.turns + oPlayer.turns;
        if (shouldCheck >= minTurnsForWinner) {
            return true;
        }
        return false;
    }

    function isPlayerWinner() {
      var positions = '';
      var winner = false;
      if (currentPlayer === xPlayer.name) {
            positions = xPlayer.positions;
        } else {
            positions = oPlayer.positions;
        }
      winCombinations.map(function (combo) {

        var diff = difference(combo,positions);
        if( diff.length === 0  ){
          winner = true;
        }

      });
      return winner;
    }

    function getNextPlayerFromCurrentPlayer() {
        var _nextCurrentPlayer = '';

        if (currentPlayer === xPlayer.name) {
            _nextCurrentPlayer = oPlayer.name;
        } else if (currentPlayer === oPlayer.name) {
            _nextCurrentPlayer = xPlayer.name;
        }
        return _nextCurrentPlayer;
    }

    function setCurrentPlayer(_nextCurrentPlayer) {
        currentPlayer = _nextCurrentPlayer;
    }

    function difference(a1, a2) {
      var result = [];
      for (var i = 0; i < a1.length; i++) {
        if (a2.indexOf(a1[i]) === -1) {
          result.push(a1[i]);
        }
      }
      return result;
    }
// });
