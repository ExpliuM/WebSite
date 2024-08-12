import { getRandomPosition, Position, positionsContains } from '../interfaces/position';
import Snake from './snake';

export const getRandomApplePosition = (snake: Snake): Position => {
  let randomPosition;
  do {
    randomPosition = getRandomPosition();
  } while (positionsContains(snake, randomPosition));
  return randomPosition;
};

export const Board = {
  getRandomApplePosition
};

export default Board;
