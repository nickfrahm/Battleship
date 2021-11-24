export const UI = (size) => {
  let orientation = 'horizontal';
  let shipsToPlace = [2, 3, 3, 4, 5];
  let placedShips = [];
  let newGame;

  const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  };

  const initEventListeners = () => {
    // if needed?
  };

  const placeShipsPage = (game) => {
    removeAllChildNodes(document.querySelector('main'));
    let banner = document.createElement('h2');
    banner.id = 'banner';
    banner.textContent = 'Place your ships';
    document.querySelector('.wrapper').appendChild(banner);
    createBoard('Player', size, document.querySelector('main'), true);
    document.querySelector('.wrapper').appendChild(vertHorizBtn());
    newGame = game;
  };

  const createBoard = (name, length, parent, placement = false) => {
    let boardContainer = document.createElement('div');
    boardContainer.classList.add('board-container');
    boardContainer.id = `${name}-board`;
    if (placement) {
      //add the events for showing possible placement
      boardContainer.addEventListener('mouseover', showShipPlacement);
      boardContainer.addEventListener('mouseout', hideShipPlacement);
    }
    boardContainer.addEventListener('click', placeShipUI);
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        let row = i;
        let col = j;
        let boardTile = document.createElement('p');
        boardTile.className = 'tile';
        boardTile.id = row.toString() + col.toString();
        boardContainer.appendChild(boardTile);
      }
    }

    parent.appendChild(boardContainer);
  };

  const showShipPlacement = (e) => {
    if (e.target.className === 'tile' && shipValid(e.target.id)) {
      let row = parseInt(e.target.id[0]);
      let col = parseInt(e.target.id[1]);
      let len = shipsToPlace[0];
      if (len > 0 && typeof len === 'number') {
        if (getOrientation() === 'horizontal') {
          if (col + len <= size) {
            for (let i = col; i < col + len; i++) {
              document.getElementById(`${row}${i}`).style.backgroundColor =
                '#81c784';
            }
          }
        } else {
          if (row + len <= size) {
            for (let i = row; i < row + len; i++) {
              document.getElementById(`${i}${col}`).style.backgroundColor =
                '#81c784';
            }
          }
        }
      }
      //console.log(`row: ${row}     col: ${col}`);
    }
  };

  const hideShipPlacement = (e) => {
    if (e.target.className === 'tile' && shipValid(e.target.id)) {
      let row = parseInt(e.target.id[0]);
      let col = parseInt(e.target.id[1]);
      let len = shipsToPlace[0];
      if (len > 0 && typeof len === 'number') {
        if (getOrientation() === 'horizontal') {
          if (col + len <= size) {
            for (let i = col; i < col + len; i++) {
              document.getElementById(`${row}${i}`).style.backgroundColor =
                '#ffffff';
            }
          }
        } else {
          if (row + len <= size) {
            for (let i = row; i < row + len; i++) {
              document.getElementById(`${i}${col}`).style.backgroundColor =
                '#ffffff';
            }
          }
        }
      }
      //console.log(`row: ${row}     col: ${col}`);
    }
  };

  const vertHorizBtn = () => {
    const btn = document.createElement('div');
    btn.className = 'vertHorizBtn';
    btn.id = 'vertHorizBtn';
    btn.textContent = 'Horizontal';

    btn.addEventListener('click', changeOrientation);

    return btn;
  };

  const changeOrientation = () => {
    if (orientation === 'horizontal') {
      orientation = 'vertical';
    } else {
      orientation = 'horizontal';
    }
    document.querySelector('.vertHorizBtn').textContent = toTitleCase(
      getOrientation()
    );
  };

  const toTitleCase = (str) => {
    let len = str.length;
    let first = str[0].toUpperCase();
    let rest = '';
    for (let i = 1; i < len; i++) {
      rest += str[i];
    }
    return first + rest;
  };

  const getOrientation = () => orientation;

  const shipValid = (id) => {
    let row = parseInt(id[0]);
    let col = parseInt(id[1]);
    let len = shipsToPlace[0];
    if (len > 0 && typeof len === 'number') {
      if (getOrientation() === 'horizontal') {
        if (col + len <= size) {
          for (let i = col; i < col + len; i++) {
            let currTile = document.getElementById(`${row}${i}`);
            if (currTile.className === 'tile-placed') {
              return false;
            }
          }
          return true;
        }
        return false;
      } else {
        if (row + len <= size) {
          for (let i = row; i < row + len; i++) {
            let currTile = document.getElementById(`${i}${col}`);
            if (currTile.className === 'tile-placed') {
              return false;
            }
          }
          return true;
        }
        return false;
      }
    }
  };

  const placeShipUI = (e) => {
    if (e.target.className === 'tile' && shipValid(e.target.id)) {
      let row = parseInt(e.target.id[0]);
      let col = parseInt(e.target.id[1]);
      let len = shipsToPlace[0];
      if (len > 0 && typeof len === 'number') {
        if (getOrientation() === 'horizontal') {
          if (col + len <= size) {
            placedShips.push({
              row: row,
              col: col,
              ori: getOrientation(),
              len: len,
            });
            for (let i = col; i < col + len; i++) {
              let currTile = document.getElementById(`${row}${i}`);

              currTile.className = 'tile-placed';
            }
          }
        } else {
          if (row + len <= size) {
            placedShips.push({
              row: row,
              col: col,
              ori: getOrientation(),
              len: len,
            });
            for (let i = row; i < row + len; i++) {
              let currTile = document.getElementById(`${i}${col}`);

              currTile.className = 'tile-placed';
            }
          }
        }
      }
      shipsToPlace.shift();

      if (shipsToPlace.length <= 0) {
        newGame.startNewGame(placedShips);
        removeAllChildNodes(document.querySelector('main'));
        hideShowBtn();
        gameScreens();
        changeBanner('May the best guesser win.');
      }
    }
  };

  const hideShowBtn = () => {
    document.querySelector('#vertHorizBtn').classList.toggle('hide');
  };

  const changeBanner = (message) => {
    document.querySelector('#banner').textContent = message;
  };

  const gameScreens = () => {
    createBoard('Player', size, document.querySelector('main'), false);
    createBoard('AI', size, document.querySelector('main'), false);
    showPlayerShips();
    document.querySelector('#AI-board').addEventListener('click', userPlay);
  };

  const showPlayerShips = () => {
    let playerBoard = newGame.getPlayers().player.board.getGameboard();
    let coords = [];
    for (let i = 0; i < playerBoard.length; i++) {
      for (let j = 0; j < playerBoard.length; j++) {
        if (
          parseInt(playerBoard[i][j]) >= 0 &&
          parseInt(playerBoard[i][j]) < 5
        ) {
          coords.push(`${i}${j}`);
        }
      }
    }
    document.querySelectorAll('#Player-board .tile').forEach((tile) => {
      for (let i = 0; i < coords.length; i++) {
        if (coords[i] === tile.id) {
          tile.style.backgroundColor = '#81c784';
        }
      }
    });
  };

  const userPlay = (e) => {
    if (
      e.target.classList.contains('tile') &&
      e.target.parentNode.id === 'AI-board' &&
      !e.target.classList.contains('guessed')
    ) {
      let playerBoard = newGame.getPlayers().player.board;
      let AIboard = newGame.getPlayers().AI.board;
      let coordArr = [Number(e.target.id[0]), Number(e.target.id[1])];

      if (AIboard.receiveAttack(coordArr)) {
        e.target.style.backgroundColor = 'tomato';
        handleTurn(AIboard, playerBoard);
      } else {
        e.target.style.backgroundColor = 'dodgerblue';
        handleTurn(AIboard, playerBoard);
      }
      e.target.classList.add('guessed');
    }
  };

  const handleTurn = (AIboard, playerBoard) => {
    if (AIboard.checkAllSunk()) {
      alert('Congratulations, you won!');
      //set up new game with ship placements
      //function for this also
    } else {
      let randomAttackCoords = playerBoard.receiveRandomAttack();
      let tiles = Array.from(document.querySelectorAll('#Player-board .tile'));
      //console.log(tiles);
      let targetTile =
        tiles[Number(`${randomAttackCoords[0]}${randomAttackCoords[1]}`)];
      //console.log(targetTile);
      if (playerBoard.receiveAttack(randomAttackCoords)) {
        targetTile.style.backgroundColor = 'tomato';
        if (playerBoard.checkAllSunk()) {
          alert(
            "Well that's embarrassing, you got beat by a computer with no guessing algorithm."
          );
          //add function to reset the game here
        }
      } else {
        targetTile.style.backgroundColor = 'dodgerblue';
      }
    }
  };

  return {
    placeShipsPage: placeShipsPage,
    createBoard: createBoard,
    initEventListeners: initEventListeners,
    showShipPlacement: showShipPlacement,
    vertHorizBtn: vertHorizBtn,
    getOrientation: getOrientation,
  };
};
