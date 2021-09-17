import { Ship } from './Game.js';

test('Testing creation of Ship', () => {
  let newShip = Ship(3);
  expect(newShip.length).toBe(3);
});
