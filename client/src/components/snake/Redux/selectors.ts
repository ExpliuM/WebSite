
import { IGameState } from "../Functions/game-state";
import { Cell } from "../Functions/cell";
import { Direction } from "../Functions/direction";

// Selectors
export const selectBoard = (state: { snake: IGameState }): Cell[][] => {
    return state.snake.board;
};

export const selectDirection = (state: { snake: IGameState }): Direction => {
    return state.snake.direction;
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
