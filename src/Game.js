import { Ship } from './Ship.js';
import { Gameboard } from './Gameboard.js';
import { Player } from './Player.js';

export const Game = () => {
  let _players;
  function initShips() {
    return [Ship(2), Ship(3), Ship(3), Ship(4), Ship(5)];
  }

  const startNewGame = (shipPlacements) => {
    let player = Player('Player', Gameboard(10));
    let AI = Player('AI', Gameboard(10));

    //todo: change player to allow picking own coords
    AI.board.placeShipsRandomly(...initShips());
    //player.board.placeShipsRandomly(...initShips());
    shipPlacements.forEach((shipInfo) => {
      player.board.placeShip(
        Ship(shipInfo.len),
        shipInfo.row,
        shipInfo.col,
        shipInfo.ori
      );
    });

    _players = { player, AI };
    return { ..._players };
  };

  return {
    startNewGame: startNewGame,
    getPlayers: function () {
      return { ..._players };
    },
  };
};
