import { PLAYER, X_SIZE, Y_SIZE } from './constants';

export interface BoardState {
  cellMatrix: PLAYER[][];
  winner: PLAYER;
}

const getInitBoardState = (): BoardState => {
  const boardState: BoardState = { cellMatrix: [], winner: PLAYER.NO_ONE };

  for (let yIndex: number = 0; yIndex < Y_SIZE; yIndex++) {
    boardState.cellMatrix[yIndex] = [];
    for (let xIndex: number = 0; xIndex < X_SIZE; xIndex++) {
      boardState.cellMatrix[yIndex][xIndex] = PLAYER.NO_ONE;
    }
  }
  return boardState;
};

// getBoard
// getCell
// getWinner
const getBoard = (boardState: BoardState) => {
  return boardState.cellMatrix;
};

const getCell = (boardState: BoardState, xIndex: number, yIndex: number) => {
  return boardState.cellMatrix[yIndex][xIndex];
};

const getWinner = (boardState: BoardState) => {
  return boardState.winner;
};

// setCell
const setCell = (
  boardState: BoardState,
  value: PLAYER,
  xIndex: number,
  yIndex: number,
) => {
  boardState.cellMatrix[yIndex][xIndex] = value;
  checkCol(boardState, xIndex);
  checkRow(boardState, yIndex);
  checkDiag1(boardState);
  checkDiag2(boardState);
};

// checkCol
// checkDiag1
// checkDiag2
// checkRow
// isDiag1Affected
// isDiag2Affected
const checkCol = (boardState: BoardState, xIndex: number) => {
  if (
    boardState.cellMatrix[0][xIndex] === boardState.cellMatrix[1][xIndex] &&
    boardState.cellMatrix[1][xIndex] === boardState.cellMatrix[2][xIndex]
  ) {
    boardState.winner = boardState.cellMatrix[0][xIndex];
  }
};

const checkDiag1 = (boardState: BoardState) => {
  if (
    boardState.cellMatrix[0][0] !== '' &&
    boardState.cellMatrix[0][0] === boardState.cellMatrix[1][1] &&
    boardState.cellMatrix[1][1] === boardState.cellMatrix[2][2]
  ) {
    boardState.winner = boardState.cellMatrix[0][0];
  }
};

const checkDiag2 = (boardState: BoardState) => {
  if (
    boardState.cellMatrix[0][2] !== '' &&
    boardState.cellMatrix[0][2] === boardState.cellMatrix[1][1] &&
    boardState.cellMatrix[1][1] === boardState.cellMatrix[2][0]
  ) {
    boardState.winner = boardState.cellMatrix[0][2];
  }
};

const checkRow = (boardState: BoardState, yIndex: number) => {
  if (
    boardState.cellMatrix[yIndex][0] === boardState.cellMatrix[yIndex][1] &&
    boardState.cellMatrix[yIndex][1] === boardState.cellMatrix[yIndex][2]
  ) {
    boardState.winner = boardState.cellMatrix[yIndex][0];
  }
};

const Board = {
  getInitBoardState,
  getBoard,
  getCell,
  getWinner,
  setCell,
  checkCol,
  checkDiag1,
  checkDiag2,
  checkRow,
};

export default Board;
