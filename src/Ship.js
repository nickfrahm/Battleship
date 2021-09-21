export const Ship = (length) => {
  const _length = length;
  const _createStructure = (length) => {
    let structure = [];
    for (let i = 0; i < length; i++) {
      structure.push('');
    }
    return structure;
  };
  const _structure = _createStructure(_length);
  let _coordinates = [];
  let _orientation = '';

  return {
    isSunk: function () {
      if (_structure.every((pos) => pos === 'x')) {
        return true;
      }
      return false;
    },
    hit: function (position) {
      _structure[position] = 'x';
      return [..._structure];
    },
    getLength: function () {
      return _length;
    },
    getCoordinates: function () {
      return _coordinates;
    },
    setCoordinates: function (row, col) {
      _coordinates = [row, col];
    },
    getOrientation: function () {
      return _orientation;
    },
    setOrientation: function (orientation) {
      _orientation = orientation;
    },
  };
};
