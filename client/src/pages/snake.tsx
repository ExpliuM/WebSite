import { Box, Typography } from '@mui/material';
import { default as SnakeComponent } from '../components/snake/snake';

const Snake = () => (
  <Box height="100%">
    <Typography align="center" color="text.primary" variant="h3">
      Snake
    </Typography>
    <SnakeComponent
      alignItems="center"
      display="flex"
      flexDirection="column"
      height="100%"
      marginTop="1rem"
    />
  </Box>
);

export default Snake;
