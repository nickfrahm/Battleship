import { placeShipsPage } from './UI';
import { Gameboard } from './Gameboard';
import { Ship } from './Ship';
import { Game } from './Game';
import { Player } from './Player';

document.addEventListener('DOMContentLoaded', () => {
  let playerBoard = Gameboard(10);
  let player = Player('Player', playerBoard);
  placeShipsPage();
});
