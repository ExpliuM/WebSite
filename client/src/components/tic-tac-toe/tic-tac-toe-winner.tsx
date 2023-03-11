import React from "react";
import { Box, Paper } from "@mui/material";

interface TicTacToeWinnerProps {
  winner: string;
}

const TicTacToeWinner = (props: TicTacToeWinnerProps) => {
  const { winner } = props;
  return (
    <Paper variant="outlined" square>
      The winner is {winner} player!
    </Paper>
  );
};

export default TicTacToeWinner;
