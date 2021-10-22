export const Player = (name, gameBoard) => {
  let _turn = false;
  return {
    board: gameBoard,
    getTurn: function () {
      return _turn;
    },
    toggleTurn: function () {
      _turn = !_turn;
    },
    name: name,
  };
};
