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

import { Cell } from '../Functions/cell';
import { X_SIZE, Y_SIZE } from '../Functions/constants';
import { selectBoard } from '../Redux/selectors';

const styles: { [key in Cell]: SxProps<Theme> } = {
  [Cell.Apple]: {
    backgroundColor: 'primary.main',
  },
  [Cell.None]: {
    backgroundColor: 'primary.light',
  },
  [Cell.Snake]: {
    backgroundColor: 'primary.dark',
  },
};

const Board = (props: BoxProps, gridProps: GridProps) => {
  const board = useSelector(selectBoard);

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
        {board.map((boardRow, yIndex) => (
          <Grid key={yIndex} display="flex" gap={0.5} gridRow={X_SIZE}>
            {boardRow.map((cell, xIndex) => (
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
            ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Board;
