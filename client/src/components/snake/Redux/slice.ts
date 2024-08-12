import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import GameActions from '../Functions/game-actions';
import { IGameState, getInitGameState } from '../Functions/game-state';
import { Direction } from '../Functions/interfaces/direction';

const initialState: IGameState = getInitGameState();

export const Slice = createSlice({
  name: 'Snake',
  initialState,
  reducers: {
    pause: (gameState: IGameState) => {
      GameActions.setIsStarted(gameState, false);
    },
    reset: (gameState: IGameState) => {
      GameActions.reset(gameState);
    },
    setNextDirection: (
      gameState: IGameState,
      action: PayloadAction<{ nextDirection: Direction }>,
    ) => {
      const { nextDirection } = action.payload;
      GameActions.setNextDirection(gameState, nextDirection);
    },
    start: (gameState: IGameState) => {
      GameActions.setIsStarted(gameState, true);
    },
    step: (gameState: IGameState) => {
      GameActions.step(gameState);
    },
  },
});

export const { pause, reset, setNextDirection, start, step } = Slice.actions;

const snakeReducer = Slice.reducer;

export default snakeReducer;
