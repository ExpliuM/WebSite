import { Box, BoxProps } from '@mui/material';
import { Fireworks } from '@fireworks-js/react';
import { useSelector } from 'react-redux';

import { selectWinner } from './Redux/slice';
import Board from './components/board';
import WinnerMessage from './components/winner';
import ResetButton from './components/reset-button';

// TODO: Create a separate component module out of it
// TODO: Add menu to the game
// TODO: Improve how we announce the winner
const TicTacToe = (props: BoxProps) => {
  const winner = useSelector(selectWinner);

  return (
    <Box {...props}>
      {winner && (
        <Fireworks
          style={{
            width: '100%',
            height: '100%',
            position: 'fixed',
            zIndex: 1,
          }}
        />
      )}
      <Board zIndex="0" />
      <Box marginTop="1rem" marginBottom="1rem" zIndex="1">
        <ResetButton />
      </Box>
      {winner && <WinnerMessage winner={winner} />}
    </Box>
  );
};

export default TicTacToe;
