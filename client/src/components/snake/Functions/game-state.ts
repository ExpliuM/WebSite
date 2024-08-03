import { randomEnumValue } from '../../../utils';
import { Board, getRandomPosition as getRandomPosition, initBoard, setCell, setRandomApple } from './board';
import { Cell } from './cell';
import { Direction } from './direction';
import { Position } from './position';

export interface IGameState {
  board: Board;
  direction: Direction;
  isStarted: boolean
  lost: boolean
  snake: Position[];
  won: boolean,
}

export const getInitGameState = (): IGameState => {
  const board = initBoard();
  const randomPosition = getRandomPosition();

  setRandomApple(board);
  setCell(board, Cell.Snake, randomPosition);

  const initGameState: IGameState = {
    board,
    direction: randomEnumValue(Direction),
    isStarted: false,
    lost: false,
    snake: [randomPosition],
    won: false,
  };

  return initGameState;
};
