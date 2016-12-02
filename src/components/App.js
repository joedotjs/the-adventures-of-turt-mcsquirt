import React, {Component} from 'react';
import Maze from './Maze';
import mazeGen from 'generate-maze';
import {keyToDirection} from '../utils';

export default class extends Component {

  constructor() {
    super();
    // Description of what this maze array looks like
    // can be found here: https://www.npmjs.com/package/generate-maze
    const maze = mazeGen(15, 10);
    this.state = {
      maze,
      turtlePosition: maze[0][0],
      alfalfaPosition: maze[maze.length - 1][maze[0].length - 1]
    };
  }

  componentDidMount() {
    document.addEventListener('keyup', e => {
        e.preventDefault();
        this.moveTurtle(keyToDirection(e.keyCode))
      }
    );
  }

  selectCell(y, x, maze = this.state.maze) {
    return maze[y][x];
  }

  canMove(direction) {

    if (direction === 'up') direction = 'top';
    else if (direction === 'down') direction = 'bottom';

    return this.state.turtlePosition[direction] === false; // There is no wall here.

  }

  moveTurtle(direction) {

    if (!direction || !this.canMove(direction)) return;

    const currentPosition = this.state.turtlePosition;
    let newPosition = currentPosition;

    switch (direction) {

      case 'up':
        newPosition = [currentPosition.y - 1, currentPosition.x];
        break;

      case 'down':
        newPosition = [currentPosition.y + 1, currentPosition.x];
        break;

      case 'left':
        newPosition = [currentPosition.y, currentPosition.x - 1];
        break;

      case 'right':
        newPosition = [currentPosition.y, currentPosition.x + 1];
        break;

      default:
        return;

    }

    this.setState({
      turtlePosition: this.selectCell(...newPosition)
    });

  }

  render() {
    return <Maze {...this.state} />;
  }

}