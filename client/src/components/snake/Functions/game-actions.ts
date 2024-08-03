import { Cell } from './cell';
import { Direction } from './direction';
import { getCell, setCell, setRandomApple } from './board';
import { getInitGameState, IGameState } from './game-state';
import { getNextHeadPosition } from './game-logic';
import { X_SIZE, Y_SIZE } from './constants';


const reset = (gameState: IGameState) => {
  const initGameState = getInitGameState();

  gameState.board = initGameState.board;
  gameState.direction = initGameState.direction;
  gameState.snake = initGameState.snake
};

const setDirection = (gameState: IGameState, direction: Direction) => {
  gameState.direction = direction;
};

const setIsStarted = (gameState: IGameState, isStarted: boolean) => {
  gameState.isStarted = isStarted;
};

const step = (gameState: IGameState) => {
  const { board, snake } = gameState;

  console.log("🚀 ~ step ~ gameState.snake.length:", gameState.snake.length)
  if (gameState.snake.length === X_SIZE * Y_SIZE - 1) {
    gameState.won = true;
    gameState.isStarted = false;
    return;
  }

  const nextHeadPosition = getNextHeadPosition(gameState);

  // Handle tail
  const nextCell = getCell(board, nextHeadPosition);
  if (nextCell !== Cell.Apple) {
    const positionToDelete = gameState.snake.shift();
    if (positionToDelete) {
      setCell(board, Cell.None, positionToDelete)
    }
  } else {
    setRandomApple(board);
  }

  if (gameState.snake.some(position => position.x === nextHeadPosition.x && position.y === nextHeadPosition.y)) {
    gameState.lost = true;
    gameState.isStarted = false;
    return;
  }

  // Move the head
  setCell(board, Cell.Snake, nextHeadPosition);
  snake.push(nextHeadPosition);
};

const GameActions = { reset, setDirection, setIsStarted, step };

export default GameActions;
