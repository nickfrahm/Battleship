let orientation = 'horizontal';

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export const initEventListeners = () => {
  // if needed?
};

export const placeShipsPage = () => {
  removeAllChildNodes(document.querySelector('main'));
  let banner = document.createElement('h2');
  banner.id = 'banner';
  banner.textContent = 'Place your ships';
  document.querySelector('.wrapper').appendChild(banner);
  createBoard('Player', 10, document.querySelector('main'));
  document.querySelector('.wrapper').appendChild(vertHorizBtn());
};

export const createBoard = (name, length, parent) => {
  let boardContainer = document.createElement('div');
  boardContainer.classList.add('board-container');
  boardContainer.id = `${name}-board`;
  boardContainer.addEventListener('mouseover', showShipPlacement);

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

export const showShipPlacement = (e) => {
  //
};

export const vertHorizBtn = () => {
  const btn = document.createElement('div');
  btn.className = 'vertHorizBtn';
  btn.id = 'vertHorizBtn';
  btn.textContent = 'Horizontal';

  //to do: add functionality

  return btn;
};

export const changeOrientation = () => {
  //
};
