import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import GameActions from '../Functions/game-actions';
import { getInitGameState, IGameState } from '../Functions/game-state';
import { Direction } from '../Functions/direction';

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
    setDirection: (gameState: IGameState, action: PayloadAction<{ direction: Direction }>,) => {
      const { direction } = action.payload;
      GameActions.setDirection(gameState, direction);
    },
    start: (gameState: IGameState) => {
      GameActions.setIsStarted(gameState, true);
    },
    step: (gameState: IGameState) => {
      GameActions.step(gameState);
    },
  },
});

export const { pause, reset, setDirection, start, step } = Slice.actions;

const snakeReducer = Slice.reducer;

export default snakeReducer;
