import { X_SIZE, Y_SIZE } from "./constants";
import { Direction } from "./direction";
import { IGameState } from "./game-state";
import { Position } from "./position";
import { getHead } from "./snake";

export const getNextHeadPosition = (gameState: IGameState): Position => {
  const { snake } = gameState;
  const headPosition = {...getHead(snake)};
  // const nextHeadPosition = {...headPosition}
  switch (gameState.direction) {
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
  getNextHeadPosition
};

export default GameLogic