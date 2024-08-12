import { X_SIZE, Y_SIZE } from "../constants";

export interface Position {
  x: number;
  y: number;
}

export type Positions = Position[];

export function arePositionsEqual(pos1: Position, pos2: Position): boolean {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

export const getRandomPosition = (): Position => {
  return {
    x: Math.floor(Math.random() * X_SIZE),
    y: Math.floor(Math.random() * Y_SIZE),
  };
};

export function positionsContains(positions: Positions, position: Position): boolean {
  return positions.some((pos) => arePositionsEqual(pos, position));
}

export function positionCountInPositions(positions: Positions, position: Position): number {
  let count = 0;
  positions.forEach((pos) => arePositionsEqual(pos, position) && ++count);
  return count
}

const position = { getRandomPosition, positionsContains };
export default position;