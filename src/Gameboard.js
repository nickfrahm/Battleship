export const Gameboard = (length) => {
  const _initBoard = (len) => {
    let board = [];
    for (let i = 0; i < len; i++) {
      let row = [];
      for (let j = 0; j < len; j++) {
        row.push('');
      }
      board.push(row);
    }
    return board;
  };

  let _board = _initBoard(length);

  return {
    getGameboard: function getGameboard() {
      return _board;
    },
    placeShipHorizontal: function placeShipHorizontal(ship, row, col) {
      let shipLength = ship.getLength();
      let boardLength = _board[row].length;
      if (col + shipLength < boardLength) {
        for (let i = 0; i < shipLength; i++) {
          _board[row][col + i] = 'x';
        }
        return this.getGameboard();
      }
      return false;
    },
  };
};
