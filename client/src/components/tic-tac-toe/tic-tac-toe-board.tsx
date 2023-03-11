import { Box, Button, Grid, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import React, { Fragment } from "react";

import {
  playTurn,
  reset,
  selectBoard,
  selectWinner,
} from "./Redux/tic-tac-toe-slice";
import { X_SIZE, Y_SIZE } from "./Functions/constants";
import Game from "./Functions/game";
import TicTacToeWinner from "./tic-tac-toe-winner";
import { relative } from "path";

// const game = new Game();

const TicTacToeBoard = () => {
  const board = useSelector(selectBoard);
  const winner = useSelector(selectWinner);

  const dispatch = useDispatch();

  const handleCellClick = (xIndex: number, yIndex: number) => () => {
    dispatch(playTurn({ xIndex, yIndex }));
  };

  const handleResetClick = () => {
    dispatch(reset());
  };

  return (
    <Fragment>
      {winner && (
        <Box
          zIndex={1}
          alignItems="center"
          position="absolute"
          justifyContent="center"
        >
          <TicTacToeWinner winner={winner} />
          <Button onClick={handleResetClick}>Reset</Button>
        </Box>
      )}
      <Grid
        position="relative"
        zIndex={0}
        alignItems="center"
        direction="column"
        display="flex"
        columns={Y_SIZE}
        gap={0.5}
        container
        justifyContent="center"
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
                  {cell}
                </Button>
              </Paper>
            ))}
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default TicTacToeBoard;
