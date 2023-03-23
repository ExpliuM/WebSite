import { PLAYER } from "./constants";
import Board, { BoardState } from "./board";

export interface GameState {
  boardState: BoardState;
  turn: PLAYER;
}

const getInitGameState = (): GameState => {
  const initGameState = {
    boardState: Board.getInitBoardState(),
    turn: PLAYER.X_PLAYER,
  };

  return initGameState;
};

const playTurn = (gameState: GameState, xIndex: number, yIndex: number) => {
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

const reset = (gameState: GameState) => {
  const initGameState = getInitGameState();
  gameState.boardState = initGameState.boardState;
  gameState.turn = initGameState.turn;
};

const nextTurn = (gameState: GameState) => {
  if (gameState.turn === PLAYER.X_PLAYER) {
    gameState.turn = PLAYER.O_PLAYER;
  } else {
    gameState.turn = PLAYER.X_PLAYER;
  }
};

const Game = { getInitGameState, nextTurn, playTurn, reset };

export default Game;
