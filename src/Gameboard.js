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
  let _ships = [];

  return {
    getGameboard: function () {
      return [..._board];
    },
    placeShip: function (ship, row, col, orientation) {
      let shipLength = ship.getLength();
      let boardLength = _board[row].length;
      if (orientation === 'horizontal') {
        if (col + shipLength < boardLength) {
          for (let i = 0; i < shipLength; i++) {
            _board[row][col + i] = i.toString();
            ship.addCoordinates(row, col + i);
          }
          _ships.push(ship);
          return this.getGameboard();
        }
        return false;
      } else if (orientation === 'vertical') {
        if (row + shipLength < boardLength) {
          for (let i = 0; i < shipLength; i++) {
            _board[row + i][col] = i.toString();
            ship.addCoordinates(row + i, col);
          }
          _ships.push(ship);
          return this.getGameboard();
        }
        return false;
      }
    },
    receiveAttack: function (coordArr) {
      const row = coordArr[0];
      const col = coordArr[1];

      const attackedShip = _ships.find((ship) => ship.containsCoords(coordArr));

      if (attackedShip) {
        attackedShip.hit(Number(_board[row][col]));
        _board[row][col] = 'x';
      }
      return this.getGameboard();
    },
    getShips: function () {
      return [..._ships];
    },
    findTargetedShip: function (coordArr) {
      return _ships
        .find((ship) => {
          ship.containsCoords(coordArr) === true;
        })
        .getCoordinates();
    },
  };
};