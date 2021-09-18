import { Ship } from './Ship.js';

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
