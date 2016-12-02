import React from 'react';
import Turtle from './Turtle';
import Alfalfa from './Alfalfa';

import {positionsMatch} from '../utils';

const buildClassName = cell => {
  return ['maze-cell'].concat(
    ['top', 'left', 'bottom', 'right']
      .filter(side => cell[side])
      .map(side => `wall-${side}`)
  );
};

export default ({cell, turtlePosition, alfalfaPosition}) => {
  return (
    <div className={buildClassName(cell).join(' ')}>
      { positionsMatch(cell, turtlePosition) ? <Turtle /> : null }
      { positionsMatch(cell, alfalfaPosition) ? <Alfalfa /> : null }
    </div>
  );
};