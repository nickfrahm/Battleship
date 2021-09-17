const Ship = (length) => {
  const _length = length;
  const _createStructure = (length) => {
    let structure = [];
    for (let i = 0; i < length; i++) {
      structure.push('');
    }
    return structure;
  };
  const _structure = _createStructure(_length);

  return {
    isSunk: function () {
      //code
    },
    hit: function () {
      //code
    },
    getLength: function () {
      return this._length;
    },
  };
};

export default { Ship };
