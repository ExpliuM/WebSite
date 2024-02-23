import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import Game, { IGameState } from '../Functions/game';
import Board from '../Functions/board';

const initialState: IGameState = Game.getInitGameState();

export const Slice = createSlice({
  name: 'Tic-Tac-Toe',
  initialState,
  reducers: {
    playTurn: (
      gameState: IGameState,
      action: PayloadAction<{ xIndex: number; yIndex: number }>,
    ) => {
      const { xIndex, yIndex } = action.payload;
      Game.playTurn(gameState, xIndex, yIndex);
    },
    reset: (gameState: IGameState) => {
      Game.reset(gameState);
    },
  },
});

export const { playTurn, reset } = Slice.actions;

export const selectBoard = (state: { ticTacToe: IGameState }) => {
  return Board.getBoard(state.ticTacToe.boardState);
};

export const selectWinner = (state: { ticTacToe: IGameState }) => {
  return Board.getWinner(state.ticTacToe.boardState);
};

const reducer = Slice.reducer;

export default reducer;
