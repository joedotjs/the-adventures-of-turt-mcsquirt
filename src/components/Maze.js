import React from 'react';

import MazeCell from './MazeCell';
import Win from './Win';

import {positionsMatch} from '../utils';
const winCondition = positionsMatch;

const createCell = (cell, {turtlePosition, alfalfaPosition}) => {
    return (
      <MazeCell
        key={cell.x}
        cell={cell}
        turtlePosition={turtlePosition}
        alfalfaPosition={alfalfaPosition}
      />
    );
};

export default (props) => {

  const grid = props.maze.map((mazeRow, row) => {
      return (
        <div key={row} className="maze-row">
          {mazeRow.map((cell) => createCell(cell, props))}
        </div>
      );
  });

  return (
    <div id="maze">
      { winCondition(props.turtlePosition, props.alfalfaPosition) ? <Win /> : grid }
    </div>
  );

};