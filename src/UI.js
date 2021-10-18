let len = 2;

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export const initEventListeners = () => {
  //
};

export const placeShipsPage = () => {
  removeAllChildNodes(document.querySelector('main'));
  createBoard('Player', 10, document.querySelector('main'));
};

export const createBoard = (name, length, parent) => {
  let boardContainer = document.createElement('div');
  boardContainer.classList.add('board-container');
  boardContainer.id = `${name}-board`;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      let row = i;
      let col = j;
      let boardTile = document.createElement('p');
      boardTile.className = 'tile';
      boardTile.addEventListener('mouseover', showShipPlacement);
      boardTile.len = len;
      boardTile.id = row.toString() + col.toString();
      boardContainer.appendChild(boardTile);
    }
  }

  parent.appendChild(boardContainer);
};

export const showShipPlacement = (e) => {
  let shipUI = document.createElement('div');
  shipUI.className('ship-tile-container');

  for (let i = 0; i < e.currentTarget.len; i++) {
    let shipTile = document.createElement('p');
    shipTile.classList.add('tile', 'ship-tile');
    shipUI.appendChild(shipTile);
  }

  return shipUI;
};
