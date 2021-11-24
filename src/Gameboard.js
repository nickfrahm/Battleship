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

  function findShipByCoords(coordArr) {
    let foundShip;
    let coordString = JSON.stringify(coordArr);
    _ships.forEach((ship) => {
      let shipCoords = ship.getCoordinates();
      shipCoords.forEach((pair) => {
        if (JSON.stringify(pair) === coordString) {
          foundShip = ship;
        }
      });
    });
    return foundShip;
  }

  return {
    getGameboard: function () {
      return [..._board];
    },
    placeShip: function (ship, row, col, orientation) {
      if (!this.areCoordsUsed([row, col], ship)) {
        let shipLength = ship.getLength();
        let boardLength = _board[row].length;
        if (orientation === 'horizontal') {
          if (col + shipLength <= boardLength) {
            for (let i = 0; i < shipLength; i++) {
              _board[row][col + i] = i.toString();
              ship.addCoordinates(row, col + i);
            }
            _ships.push(ship);
            return this.getGameboard();
          }
          return false;
        } else if (orientation === 'vertical') {
          if (row + shipLength <= boardLength) {
            for (let i = 0; i < shipLength; i++) {
              _board[row + i][col] = i.toString();
              ship.addCoordinates(row + i, col);
            }
            _ships.push(ship);
            return this.getGameboard();
          }
          return false;
        }
      }
    },
    receiveAttack: function (coordArr) {
      const row = coordArr[0];
      const col = coordArr[1];
      if (_board[row][col] !== 'x' && _board[row][col] !== 'o') {
        let targetShip = findShipByCoords(coordArr);
        if (targetShip) {
          let targetStructure = targetShip.getStructure();
          if (targetStructure[Number(_board[row][col])] !== 'x') {
            targetShip.hit(Number(_board[row][col]));
            _board[row][col] = 'x';
            return this.getGameboard();
          }
          return false;
        }
        _board[row][col] = 'o';
        return false;
      }
      return false;

      /*
      Take a coordinate array of [row,col]
      determine whether that square has been targeted before
      if it hasn't been targeted
            determine if there is a ship there or not
                    if there is a ship there
                            find the ship object with passed arr and run hit(number from board)
                            if it hasn't been hit
                                    mark board with x and return true
                            else return false
                    else if no ship, mark with an o
      else if it has been targeted before (o or x)
            return false
      */
    },
    getShips: function () {
      return [..._ships];
    },
    findShipByCoords: findShipByCoords,
    areCoordsUsed: function (coordArr, ship) {
      let board = this.getGameboard();
      const row = coordArr[0];
      const col = coordArr[1];
      let shipLen = ship.getLength();
      let shipOri = ship.getOrientation();
      let boardLen = board.length;
      for (let i = 0; i < shipLen; i++) {
        if (shipOri === 'horizontal') {
          if (col + shipLen < boardLen) {
            if (board[row][col + i].toString() !== '') {
              return true;
            }
          }
        } else if (shipOri === 'vertical') {
          if (row + shipLen < boardLen) {
            if (board[row + i][col].toString() !== '') {
              return true;
            }
          }
        }
      }
      return false;
    },
    checkAllSunk: function () {
      return _ships.every((ship) => {
        return ship.isSunk() === true;
      });
    },
    receiveRandomAttack() {
      let validCoords = false;
      while (validCoords === false) {
        let randX = Math.floor(Math.random() * _board.length);
        let randY = Math.floor(Math.random() * _board.length);
        if (_board[randX][randY] !== 'x' && _board[randX][randY] !== 'o') {
          return [randX, randY];
        }
      }
    },
    placeShipsRandomly: function (ship1, ship2, ship3, ship4, ship5) {
      [ship1, ship2, ship3, ship4, ship5].forEach((ship) => {
        let randOrientation = Math.floor(Math.random() * 2);
        ship.setOrientation(randOrientation === 1 ? 'vertical' : 'horizontal');
        let validCoords = false;
        while (validCoords === false) {
          let randX = Math.floor(Math.random() * _board.length);
          let randY = Math.floor(Math.random() * _board.length);

          if (this.placeShip(ship, randX, randY, ship.getOrientation())) {
            validCoords = true;
          }
        }
      });

      return this.getGameboard();
    },
  };
};
