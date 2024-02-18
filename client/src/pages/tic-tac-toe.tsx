import { Box, Typography } from '@mui/material';
import { default as TicTacToeComponent } from '../components/tic-tac-toe/tic-tac-toe';

const TicTacToe = () => (
  <Box height="100%">
    <Typography align="center" color="text.primary" variant="h3">
      Tic-Tac-Toe
    </Typography>
    <TicTacToeComponent
      alignItems="center"
      display="flex"
      flexDirection="column"
      height="100%"
      marginTop="1rem"
    />
  </Box>
);

export default TicTacToe;
