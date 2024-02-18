import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import Game, { GameState } from '../Functions/game';
import Board from '../Functions/board';

interface IState {
  gameState: GameState;
}

const initialState: IState = {
  gameState: Game.getInitGameState(),
};

export const Slice = createSlice({
  name: 'Tic-Tac-Toe',
  initialState,
  reducers: {
    playTurn: (
      state: IState,
      action: PayloadAction<{ xIndex: number; yIndex: number }>,
    ) => {
      const { xIndex, yIndex } = action.payload;
      Game.playTurn(state.gameState, xIndex, yIndex);
    },
    reset: (state: IState) => {
      Game.reset(state.gameState);
    },
  },
});

export const { playTurn, reset } = Slice.actions;

export const selectBoard = (state: { ticTacToe: IState }) => {
  return Board.getBoard(state.ticTacToe.gameState.boardState);
};

export const selectWinner = (state: { ticTacToe: IState }) => {
  return Board.getWinner(state.ticTacToe.gameState.boardState);
};

const Reducer = Slice.reducer;

export default Reducer;
