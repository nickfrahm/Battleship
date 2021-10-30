export const UI = (size) => {
  let orientation = 'horizontal';
  let shipsToPlace = [2, 3, 3, 4, 5];

  const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  };

  const initEventListeners = () => {
    // if needed?
  };

  const placeShipsPage = () => {
    removeAllChildNodes(document.querySelector('main'));
    let banner = document.createElement('h2');
    banner.id = 'banner';
    banner.textContent = 'Place your ships';
    document.querySelector('.wrapper').appendChild(banner);
    createBoard('Player', size, document.querySelector('main'), true);
    document.querySelector('.wrapper').appendChild(vertHorizBtn());
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
    if (e.target.className === 'tile' && e.target.className !== 'tile-placed') {
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

            currTile.className = 'tile-placed';
            currTile.style.backgroundColor = '#81c784';
          }
        }
      }
    }
  };

  const placeShipUI = (e) => {
    if (e.target.className === 'tile') {
      let row = parseInt(e.target.id[0]);
      let col = parseInt(e.target.id[1]);
      let len = shipsToPlace[0];
      if (len > 0 && typeof len === 'number') {
        if (getOrientation() === 'horizontal') {
          if (col + len <= size) {
            for (let i = col; i < col + len; i++) {
              let currTile = document.getElementById(`${row}${i}`);

              currTile.className = 'tile-placed';
              currTile.style.backgroundColor = '#81c784';
            }
          }
        } else {
          if (row + len <= size) {
            for (let i = row; i < row + len; i++) {
              let currTile = document.getElementById(`${i}${col}`);

              currTile.className = 'tile-placed';
              currTile.style.backgroundColor = '#81c784';
            }
          }
        }
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
