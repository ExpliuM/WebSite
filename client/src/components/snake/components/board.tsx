import {
  Box,
  BoxProps,
  Grid,
  GridProps,
  Paper,
  SxProps,
  Theme,
} from '@mui/material';
import { useSelector } from 'react-redux';

import { Cell } from '../Functions/interfaces/cell';
import { X_SIZE, Y_SIZE } from '../Functions/constants';
import { selectApple, selectSnake } from '../Redux/selectors';
import { range } from 'lodash';
import {
  arePositionsEqual,
  Position,
  positionsContains,
} from '../Functions/interfaces/position';

const styles: { [key in Cell]: SxProps<Theme> } = {
  [Cell.Apple]: {
    backgroundColor: 'primary.main',
  },
  [Cell.None]: {
    backgroundColor: 'primary.light',
  },
  [Cell.SnakeBody]: {
    backgroundColor: 'secondary.main',
  },
  [Cell.SnakeHead]: {
    backgroundColor: 'secondary.dark',
  },
};

const Board = (props: BoxProps, gridProps: GridProps) => {
  const apple = useSelector(selectApple);
  const snake = useSelector(selectSnake);

  return (
    <Box {...props}>
      <Grid
        columns={Y_SIZE}
        container
        direction="column"
        display="flex"
        gap={0.5}
        {...gridProps}
      >
        {range(Y_SIZE).map((yIndex) => (
          <Grid key={yIndex} display="flex" gap={0.5} gridRow={X_SIZE}>
            {range(X_SIZE).map((xIndex) => {
              const position: Position = { x: xIndex, y: yIndex };

              let cell = Cell.None;
              if (arePositionsEqual(apple, position)) {
                cell = Cell.Apple;
              } else if (arePositionsEqual(snake[snake.length - 1], position)) {
                cell = Cell.SnakeHead;
              } else if (positionsContains(snake, position)) {
                cell = Cell.SnakeBody;
              }

              return (
                <Paper
                  key={xIndex}
                  sx={{
                    backgroundColor: 'primary.light',
                    height: 20,
                    padding: 'xs',
                    width: 20,
                    ...(styles[cell] || {}),
                  }}
                />
              );
            })}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Board;
