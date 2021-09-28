import { Ship } from './Ship.js';
import { Gameboard } from './Gameboard.js';
import { Player } from './Player.js';

describe('Testing the Ship factory function', () => {
  let newShip = Ship(3);
  let secondShip = Ship(4);

  test('Testing creation of Ship', () => {
    expect(newShip.getLength()).toBe(3);
    expect(secondShip.getLength()).toBe(4);
  });

  test('Testing the hit function basic functionality', () => {
    let expected = ['', 'x', ''];
    expect(newShip.hit(1)).toEqual(expect.arrayContaining(expected));
    expected = ['x', 'x', ''];
    expect(newShip.hit(0)).toEqual(expect.arrayContaining(expected));
    expected = ['x', 'x', 'x'];
    expect(newShip.hit(2)).toEqual(expect.arrayContaining(expected));
    expected = ['x', '', '', ''];
    expect(secondShip.hit(0)).toEqual(expect.arrayContaining(expected));
  });

  test('Already hit that location!', () => {
    expect(newShip.hit(1)).toBe(false);
  });

  test('Testing isSunk function', () => {
    expect(newShip.isSunk()).toBe(true);
    expect(secondShip.isSunk()).toBe(false);
  });
});

describe('Testing the gameboard factory horizontal placement', () => {
  let board1 = Gameboard(10);
  let ship1 = Ship(4);
  let ship2 = Ship(3);
  ship1.setOrientation('horizontal');
  ship2.setOrientation('horizontal');
  let expected = [
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '0', '1', '2', '3', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
  ];

  test('Test placing a horizontal ship at 3,3 (using array indexes, not column/row)', () => {
    expect(board1.placeShip(ship1, 3, 3, ship1.getOrientation())).toEqual(
      expect.arrayContaining(expected)
    );
  });

  test("Test ship1's coordinates", () => {
    expect(ship1.getCoordinates()).toEqual(
      expect.arrayContaining([
        [3, 3],
        [3, 4],
        [3, 5],
        [3, 6],
      ])
    );
  });

  test('Test orientation of ship1', () => {
    expect(ship1.getOrientation()).toBe(ship1.getOrientation());
  });

  test('Expect a failure of placing ship horizontal at 1,7', () => {
    expect(board1.placeShip(ship1, 1, 7, ship1.getOrientation())).toBe(false);
  });

  test('Test overlapping another ship', () => {
    expect(board1.areCoordsUsed([3, 1], ship2)).toBe(true);
  });

  test('Test not overlapping another ship', () => {
    expect(board1.areCoordsUsed([0, 0], ship2)).toBe(false);
  });
});

describe('Testing the gameboard factory vertical placement', () => {
  let board1 = Gameboard(10);
  let ship1 = Ship(4);
  let ship2 = Ship(3);
  ship2.setOrientation('vertical');
  let expected = [
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '0', '', '', '', '', '', '', ''],
    ['', '', '1', '', '', '', '', '', '', ''],
    ['', '', '2', '', '', '', '', '', '', ''],
    ['', '', '3', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
  ];

  test('Test placing a vertical ship at 1,2 (using array indexes, not column/row)', () => {
    expect(board1.placeShip(ship1, 1, 2, 'vertical')).toEqual(
      expect.arrayContaining(expected)
    );
  });

  test('Expect a failure of placing ship horizontal at 8,0', () => {
    expect(board1.placeShip(ship1, 8, 0, 'vertical')).toBe(false);
  });

  test('Test overlapping another ship', () => {
    expect(board1.areCoordsUsed([0, 2], ship2)).toBe(true);
  });

  test('Test not overlapping another ship', () => {
    expect(board1.areCoordsUsed([1, 3], ship2)).toBe(false);
  });
});

describe('Testing gameboard receiving an attack and affecting related ship', () => {
  let board1, ship1;
  beforeAll(() => {
    ship1 = Ship(3);
    ship1.setOrientation('vertical');
    board1 = Gameboard(10);
    board1.placeShip(ship1, 1, 1, ship1.getOrientation());
    return board1;
  });

  test('ship contains coordinates', () => {
    let ship = Ship(3);
    ship.addCoordinates([5, 5]);
    expect(ship.containsCoords([5, 5])).toBe(true);
    expect(ship.containsCoords([5, 6])).toBe(false);
  });

  test('get targeted ship test', () => {
    let boardTest, shipTest, test2;
    shipTest = Ship(3);
    shipTest.setOrientation('vertical');
    test2 = Ship(4);
    test2.setOrientation('horizontal');
    boardTest = Gameboard(10);
    boardTest.placeShip(shipTest, 1, 1, shipTest.getOrientation());
    boardTest.placeShip(test2, 3, 3, test2.getOrientation());

    expect(boardTest.findShipByCoords([1, 1])).toEqual(
      expect.objectContaining(shipTest)
    );
  });

  test('Basic Receive attack function--HIT', () => {
    let expected = [
      ['', '', '', '', '', '', '', '', '', ''],
      ['', 'x', '', '', '', '', '', '', '', ''],
      ['', '1', '', '', '', '', '', '', '', ''],
      ['', '2', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
    ];

    expect(board1.receiveAttack([1, 1])).toEqual(
      expect.arrayContaining(expected)
    );

    let expected2 = [
      ['', '', '', '', '', '', '', '', '', ''],
      ['', 'x', '', '', '', '', '', '', '', ''],
      ['', '1', '', '', '', '', '', '', '', ''],
      ['', 'x', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
    ];

    expect(board1.receiveAttack([3, 1])).toEqual(
      expect.arrayContaining(expected2)
    );

    board1.receiveAttack([0, 1]);
    expect(board1.receiveAttack([1, 0])).toBe(false);

    //test a same location guess for a hit
    expect(board1.receiveAttack([1, 1])).toBe(false);
  });
});

describe('Figure out if all ships have been sunk on a gameboard', () => {
  let board;

  beforeEach(() => {
    board = Gameboard(10);
    let ship1 = Ship(3);
    let ship2 = Ship(3);
    ship1.setOrientation('horizontal');
    ship2.setOrientation('horizontal');
    board.placeShip(ship1, 0, 0, ship1.getOrientation());
    board.placeShip(ship2, 9, 0, ship2.getOrientation());
  });

  afterEach(() => {
    board = null;
  });

  test("Check if all ships have sunk, but they haven't", () => {
    board.receiveAttack([0, 0]);
    board.receiveAttack([0, 1]);
    board.receiveAttack([0, 2]);
    expect(board.checkAllSunk()).toBe(false);
  });

  test('Return that all ships have sunk', () => {
    board.receiveAttack([0, 0]);
    board.receiveAttack([0, 1]);
    board.receiveAttack([0, 2]);
    board.receiveAttack([9, 0]);
    board.receiveAttack([9, 1]);
    board.receiveAttack([9, 2]);
    expect(board.checkAllSunk()).toBe(true);
  });
});

describe('Player Tests', () => {
  let AI, player, boardAI, boardPlayer;
  beforeEach(() => {
    boardAI = Gameboard(10);
    boardPlayer = Gameboard(10);
    AI = Player(boardAI);
    player = Player(boardPlayer);
  });

  afterEach(() => {
    AI = null;
    player = null;
    boardAI = null;
    boardPlayer = null;
  });

  test('Assigning boards to player', () => {
    let expected = [
      ['0', '', '', '', '', '', '', '', '', ''],
      ['1', '', '', '', '', '', '', '', '', ''],
      ['2', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
    ];
    let ship1 = Ship(3);
    ship1.setOrientation('vertical');
    AI.board.placeShip(ship1, 0, 0, ship1.getOrientation());
    expect(AI.board.getGameboard()).toEqual(expect.arrayContaining(expected));
  });

  /*test('Random Attack From AI player', () => {
    //
  });*/
});
