import { IGameState } from '../Functions/game-state';
import { Direction } from '../Functions/interfaces/direction';
import { Position } from '../Functions/interfaces/position';
import Snake from '../Functions/objects/snake';

// Selectors
export const selectApple = (state: { snake: IGameState }): Position => {
  return state.snake.apple;
};

export const selectActiveDirection = (state: { snake: IGameState }): Direction => {
  return state.snake.activeDirection;
};

export const selectDirection = (state: { snake: IGameState }): Direction | undefined => {
  return state.snake.nextDirection;
};

export const selectWon = (state: { snake: IGameState }): boolean => {
  return state.snake.won;
};

export const selectLost = (state: { snake: IGameState }): boolean => {
  return state.snake.lost;
};

export const selectIsStarted = (state: { snake: IGameState }): boolean => {
  return state.snake.isStarted;
};

export const selectGameState = (state: { snake: IGameState }): IGameState => {
  return state.snake;
};
export const selectSnake = (state: { snake: IGameState }): Snake => {
  return state.snake.snake;
};
