/////////////////////////
// Our init of the app //
/////////////////////////

// Our X Player
var xPlayer = 'X';
var xPlayerTurns = 0;
var xPlayerPositions = [];

// Our O Player
var oPlayer = 'O';
var oPlayerTurns = 0;
var oPlayerPositions = [];

// Who is our first player
var currentPlayer = oPlayer;

// Minimum of turns for a winner
var minTurnsForWinner = 5; // this equals the sum of oPlayerTurns + xPlayerTurns

var winner = false;


console.log('Our first player is: ' + currentPlayer);

// tdEl=table data element
function setValue(tdEl, event) {

  var xAxisObject = event.target.dataset; // this is table cell (TD)
  var yAxisObject = event.target.parentNode.dataset; // this is parent TR

  // This shall be obayed, [xAxis,yAxis]
  var fullCoord = [ parseInt(xAxisObject.value, 10), parseInt(yAxisObject.value, 10)]
  console.log('currentPlayer',currentPlayer,fullCoord)

  if( tdEl.innerText != '' && !winner ) {
    alert('You can not click here!!!');
    return;
  }
  //setting the value of the currentplayer to the tdEl
  tdEl.innerText = currentPlayer;


  setPlayerTurn(currentPlayer)

  // we should check for winner or not
  if( shouldWeCheckForWinner() && isPlayerWinner( currentPlayer ) ) {
    return winner;
  }

  var _nextCurrentPlayer = getNextPlayerFromCurrentPlayer();

  console.log('xPlayer', xPlayer, xPlayerTurns);
  console.log('oPlayer', oPlayer, oPlayerTurns);


  // we are doing this last, player might WIN in this turn
  setCurrentPlayer(_nextCurrentPlayer);

  // this disables onclick event for a field that has a value
  tdEl.style.pointerEvents = 'none'
}

function setPlayerTurn(player) {
  if( player === xPlayer ){
    xPlayerTurns += 1;
  } else {
    oPlayerTurns +=1 ;
  }
}

// This returns true if there is more than 5 turns
// or false if less than 5 turns
// default output is FALSE
function shouldWeCheckForWinner() {
    var shouldCheck = xPlayerTurns + oPlayerTurns;
    if( shouldCheck >= minTurnsForWinner ) {
      return true;
    }
    return false;
}

function isPlayerWinner() {

}

function getNextPlayerFromCurrentPlayer() {
  var _nextCurrentPlayer = '';

  if( currentPlayer === xPlayer ) {
      _nextCurrentPlayer = oPlayer;
  } else if ( currentPlayer === oPlayer ) {
      _nextCurrentPlayer = xPlayer;
  }
  return _nextCurrentPlayer;
}

function setCurrentPlayer(_nextCurrentPlayer) {
    currentPlayer = _nextCurrentPlayer;
}
