export const keyToDirection = (function () {
  const directionDictionary = {
    38: 'up',
    40: 'down',
    37: 'left',
    39: 'right'
  };
  return keyCode => directionDictionary[keyCode];
})();

export const positionsMatch = (pos1, pos2) => {
  return pos1.x === pos2.x && pos1.y === pos2.y;
};