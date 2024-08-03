import { Cell } from './cell';
import { X_SIZE, Y_SIZE } from './constants';
import { Position } from './position';

export type Board = Cell[][];

export const initBoard = (): Board => {
  const board: Cell[][] = [];

  for (let yIndex: number = 0; yIndex < Y_SIZE; yIndex++) {
    board[yIndex] = [];
    for (let xIndex: number = 0; xIndex < X_SIZE; xIndex++) {
      board[yIndex][xIndex] = Cell.None;
    }
  }
  return board;
};

export const getCell = (board: Board, position: Position): Cell => {
  return board[position.y][position.x];
};

export const getRandomPosition = (): Position => {
  return {
    x: Math.floor(Math.random() * X_SIZE),
    y: Math.floor(Math.random() * Y_SIZE),
  };
};

export const setCell = (
  board: Board,
  cell: Cell,
  position: Position

): void => {
  board[position.y][position.x] = cell;
};

export const setRandomApple = (boardState: Board): void => {
  let randomPosition;
  do {
    randomPosition = getRandomPosition();
  } while (getCell(boardState, randomPosition) !== Cell.None);

  setCell(boardState, Cell.Apple, randomPosition);
};

export const Board = {
  getCell,
  getRandomPosition,
  initBoard,
  setCell,
  setRandomApple,
};

export default Board;
