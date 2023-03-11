import React from "react";
import { Box } from "@mui/material";
import Board, { BoardState } from "./board";
import { PLAYER } from "./constants";

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
  if (Board.getCell(gameState.boardState, xIndex, yIndex) === PLAYER.NO_ONE) {
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
