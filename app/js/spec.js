describe("TicTacToe app", function() {
  it('should set currentPlayer', function() {
    setCurrentPlayer(xPlayer)
    expect(xPlayer).toBe(currentPlayer);
  });
  it("should return next player", function () {
    var nextPlayer = getNextPlayerFromCurrentPlayer()
    expect(nextPlayer).toBe(oPlayer);
  });
});
