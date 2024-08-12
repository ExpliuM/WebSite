import { randomEnumValue } from '../../../utils';

import { Direction } from './interfaces/direction';
import { getRandomPosition, Position, Positions } from './interfaces/position';
import { getRandomApplePosition } from './objects/board';

export interface IGameState {
  activeDirection: Direction;
  apple: Position;
  isStarted: boolean;
  lost: boolean;
  nextDirection: Direction | undefined;
  snake: Positions;
  won: boolean;
}

export const getInitGameState = (): IGameState => {
  const snake = [getRandomPosition()];
  const apple = getRandomApplePosition(snake);

  const direction = randomEnumValue(Direction)

  const initGameState: IGameState = {
    activeDirection: direction,
    apple,
    isStarted: false,
    lost: false,
    nextDirection: undefined,
    snake,
    won: false,
  };

  return initGameState;
};
