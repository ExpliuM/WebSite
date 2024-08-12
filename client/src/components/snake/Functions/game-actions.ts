import { Direction } from './interfaces/direction';
import { getRandomApplePosition } from './objects/board';
import { IGameState, getInitGameState } from './game-state';
import { getNextHeadPosition } from './game-logic';
import { X_SIZE, Y_SIZE } from './constants';
import { arePositionsEqual, positionCountInPositions } from './interfaces/position';

const reset = (gameState: IGameState) => {
  const initGameState = getInitGameState();
  gameState.nextDirection = initGameState.nextDirection;
  gameState.snake = initGameState.snake;
  gameState.won = initGameState.won;
};

const setNextDirection = (gameState: IGameState, nextDirection: Direction) => {
  gameState.nextDirection = nextDirection;
};

const setIsStarted = (gameState: IGameState, isStarted: boolean) => {
  gameState.isStarted = isStarted;
};

const step = (gameState: IGameState) => {
  const { apple, snake, nextDirection } = gameState;

  if (gameState.snake.length === X_SIZE * Y_SIZE - 1) {
    gameState.won = true;
    gameState.isStarted = false;
    return;
  }

  if (nextDirection !== undefined) {
    gameState.activeDirection = nextDirection
    gameState.nextDirection = undefined
  }
  const nextHeadPosition = getNextHeadPosition(gameState);
  snake.push(nextHeadPosition);

  if (arePositionsEqual(apple, nextHeadPosition)) {
    gameState.apple = getRandomApplePosition(snake);
  } else {
    gameState.snake.shift();
  }

  if (positionCountInPositions(snake, nextHeadPosition) > 1) {
    gameState.lost = true;
    gameState.isStarted = false;
    return;
  }

};

const GameActions = { reset, setNextDirection, setIsStarted, step };

export default GameActions;
