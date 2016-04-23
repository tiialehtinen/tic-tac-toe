/////////////////////////
// Our init of the app //
/////////////////////////

// Our X Player
var xPlayer = 'X';

// Our O Player
var oPlayer = 'O';

// Who is our first player
var currentPlayer = oPlayer;

console.log('Our first player is: ' + currentPlayer);

// tdEl=table data element
function setValue(tdEl) {
  if( tdEl.innerText != '' ) {
    alert('You can not click here!!!');
    return;
  }
  //setting the value of the currentplayer to the tdEl
  tdEl.innerText = currentPlayer;

  var _nextCurrentPlayer = getNextPlayerFromCurrentPlayer();

  console.log('Our currentPlayer is: ' + currentPlayer);
  console.log('Our nextPlayer is: ' + _nextCurrentPlayer);

  console.log('Setting currentPlayer from nextPlayer: ');
  setCurrentPlayer(_nextCurrentPlayer);
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
