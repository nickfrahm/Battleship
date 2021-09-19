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

describe('Testing the gameboard factory', () => {
  let board1 = Gameboard(10);
  let ship1 = Ship(4);
  let expected = [
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', 'x', 'x', 'x', 'x', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
  ];

  test('Test placing a horizontal ship at 3,4 (using array indexes, not column/row)', () => {
    expect(board1.placeShipHorizontal(ship1, 3, 3)).toEqual(
      expect.arrayContaining(expected)
    );
  });
});
