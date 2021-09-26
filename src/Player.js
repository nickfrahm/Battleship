export const Player = () => {
  let _board;
  return {
    assignBoard: function (board) {
      _board = board;
    },
    board: this._board,
  };
};
