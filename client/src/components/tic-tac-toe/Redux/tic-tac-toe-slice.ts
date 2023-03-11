import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Game, { GameState } from "../Functions/game";
import Board from "../Functions/board";

interface stateInterface {
  gameState: GameState;
}

const initialState: stateInterface = {
  gameState: Game.getInitGameState(),
};

export const ticTacToeSlice = createSlice({
  name: "Tic-Tac-Toe",
  initialState,
  reducers: {
    playTurn: (
      state: stateInterface,
      action: PayloadAction<{ xIndex: number; yIndex: number }>
    ) => {
      const { xIndex, yIndex } = action.payload;
      Game.playTurn(state.gameState, xIndex, yIndex);
    },
    reset: (state: stateInterface) => {
      Game.reset(state.gameState);
    },
  },
});

export const { playTurn, reset } = ticTacToeSlice.actions;

export const selectBoard = (state: { ticTacToe: stateInterface }) => {
  return Board.getBoard(state.ticTacToe.gameState.boardState);
};

export const selectWinner = (state: { ticTacToe: stateInterface }) => {
  return Board.getWinner(state.ticTacToe.gameState.boardState);
};

const ticTacToeReducer = ticTacToeSlice.reducer;

export default ticTacToeReducer;
