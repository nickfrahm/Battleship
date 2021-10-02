import { Ship } from './Ship.js';
import { Gameboard } from './Gameboard.js';
import { Player } from './Player.js';

export const Game = () => {
  let _players;
  function initShips() {
    return [Ship(2), Ship(3), Ship(3), Ship(4), Ship(5)];
  }
  return {
    startNewGame: function () {
      let player = Player(Gameboard(10));
      let AI = Player(Gameboard(10));

      //todo: change player to allow picking own coords
      AI.board.placeShipsRandomly(...initShips());
      player.board.placeShipsRandomly(...initShips());

      _players = [player, AI];
      return [..._players];
    },
  };
};
