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
      if (_structure[position] !== 'x') {
        _structure[position] = 'x';
        return [..._structure];
      } else {
        return false;
      }
    },
    getLength: function () {
      return _length;
    },
    getCoordinates: function () {
      return [..._coordinates];
    },
    addCoordinates: function (row, col) {
      _coordinates.push([row, col]);
    },
    getOrientation: function () {
      return _orientation;
    },
    setOrientation: function (orientation) {
      _orientation = orientation;
    },
    containsCoords: function (coords) {
      let hash = {};
      let _coords = this.getCoordinates();
      for (let i = 0; i < _coords.length; i++) {
        hash[_coords[i]] = i;
      }
      return hash.hasOwnProperty(coords + ',');
    },
  };
};
