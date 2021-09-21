import { Ship } from './Ship.js';
import { Gameboard } from './Gameboard.js';

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

  test('Testing isSunk function', () => {
    expect(newShip.isSunk()).toBe(true);
    expect(secondShip.isSunk()).toBe(false);
  });
});

describe('Testing the gameboard factory horizontal placement', () => {
  let board1 = Gameboard(10);
  let ship1 = Ship(4);
  ship1.setOrientation('horizontal');
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
    expect(ship1.getCoordinates()).toEqual(expect.arrayContaining([3, 3]));
  });

  test('Test orientation of ship1', () => {
    expect(ship1.getOrientation()).toBe(ship1.getOrientation());
  });

  test('Expect a failure of placing ship horizontal at 1,7', () => {
    expect(board1.placeShip(ship1, 1, 7, ship1.getOrientation())).toBe(false);
  });
});

describe('Testing the gameboard factory vertical placement', () => {
  let board1 = Gameboard(10);
  let ship1 = Ship(4);
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

    expected = [
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
      expect.arrayContaining(expected)
    );
  });
});
