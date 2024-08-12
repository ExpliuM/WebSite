import { Position, Positions } from '../interfaces/position';

export type Snake = Positions;

export function getHead(snake: Snake): Position {
  return snake[snake.length - 1];
}

export function getTail(snake: Snake): Position {
  return snake[0];
}

export const Snake = { getHead, getTail };

export default Snake;
