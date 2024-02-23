import { PLAYER } from './constants';
import Board, { BoardState } from './board';

export interface IGameState {
  boardState: BoardState;
  turn: PLAYER;
}

const getInitGameState = (): IGameState => {
  const initGameState = {
    boardState: Board.getInitBoardState(),
    turn: PLAYER.X_PLAYER,
  };

  return initGameState;
};

const playTurn = (gameState: IGameState, xIndex: number, yIndex: number) => {
  const winner = Board.getWinner(gameState.boardState);
  if (
    winner === PLAYER.NO_ONE &&
    Board.getCell(gameState.boardState, xIndex, yIndex) === PLAYER.NO_ONE
  ) {
    Board.setCell(gameState.boardState, gameState.turn, xIndex, yIndex);
    nextTurn(gameState);
  }
  return Board.getWinner(gameState.boardState);
};

const reset = (gameState: IGameState) => {
  const initGameState = getInitGameState();
  gameState.boardState = initGameState.boardState;
  gameState.turn = initGameState.turn;
};

const nextTurn = (gameState: IGameState) => {
  if (gameState.turn === PLAYER.X_PLAYER) {
    gameState.turn = PLAYER.O_PLAYER;
  } else {
    gameState.turn = PLAYER.X_PLAYER;
  }
};

const Game = { getInitGameState, nextTurn, playTurn, reset };

//TODO: rename this file
//TODO: delete function folder
//TODO: find better place for all this random files we have here
export default Game;
