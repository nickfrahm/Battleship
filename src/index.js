import { UI } from './UI';
import { Game } from './Game';

document.addEventListener('DOMContentLoaded', () => {
  const ui = UI(10);
  let newGame = Game();
  ui.placeShipsPage(newGame);
});
