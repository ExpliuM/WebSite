import {
  Box,
  BoxProps,
  Button,
  Grid,
  GridProps,
  Paper,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import React, { Fragment } from "react";

import { playTurn, selectBoard } from "../Redux/slice";
import { X_SIZE, Y_SIZE } from "../Functions/constants";

const Board = (props: BoxProps, gridProps: GridProps) => {
  const board = useSelector(selectBoard);

  const dispatch = useDispatch();

  const handleCellClick = (xIndex: number, yIndex: number) => () => {
    dispatch(playTurn({ xIndex, yIndex }));
  };

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
              <Paper key={xIndex}>
                <Button
                  onClick={handleCellClick(xIndex, yIndex)}
                  sx={{
                    backgroundColor: "primary.light",
                    height: 100,
                    padding: "xs",
                    width: 100,
                  }}
                >
                  <Typography color="text.primary" variant="body1">
                    {cell}
                  </Typography>
                </Button>
              </Paper>
            ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Board;
