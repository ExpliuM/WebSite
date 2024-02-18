import React from 'react';
import { Typography } from '@mui/material';

interface TicTacToeWinnerProps {
  winner: string;
}

// TODO: Make it a big 3d rotating text
const WinnerMessage = (props: TicTacToeWinnerProps) => {
  const { winner } = props;
  return (
    <Typography color="text.primary" variant="body1">
      player {winner} is the Winner!
    </Typography>
  );
};

export default WinnerMessage;
