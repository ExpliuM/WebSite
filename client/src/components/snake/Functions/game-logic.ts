import { X_SIZE, Y_SIZE } from './constants';
import { Direction } from './interfaces/direction';
import { IGameState } from './game-state';
import { Position } from './interfaces/position';
import { getHead } from './objects/snake';

export const getNextHeadPosition = (gameState: IGameState): Position => {
  const { snake, activeDirection } = gameState;
  const headPosition = { ...getHead(snake) };
  switch (activeDirection) {
    case Direction.Down:
      headPosition.y--;
      break;
    case Direction.Left:
      headPosition.x--;
      break;
    case Direction.Right:
      headPosition.x++;
      break;
    case Direction.Up:
    default:
      headPosition.y++;
  }

  headPosition.x = (headPosition.x + X_SIZE) % X_SIZE;
  headPosition.y = (headPosition.y + Y_SIZE) % Y_SIZE;

  return headPosition;
};

export const GameLogic = {
  getNextHeadPosition,
};

export default GameLogic;
