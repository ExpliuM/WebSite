import { Button, Box, Grid, BoxProps, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

// TODO: To make projects page and to put Tic Tac Toe and Components under it
const buttonsData: ReadonlyArray<{ text: string; href: string }> = [
  { text: 'CV', href: '/cv' },
  { text: 'Tic Tac Toe', href: '/tic-tac-toe' },
  { text: 'Snake', href: '/snake' },
];

const Header = (props: BoxProps) => (
  <Box {...props}>
    <Grid container justifyContent="center" spacing={0.5}>
      {buttonsData.map(({ text, href }) => (
        <Grid item key={text}>
          <Link to={href}>
            <Button
              sx={{ backgroundColor: 'primary.light' }}
              variant="contained"
            >
              <Typography color="text.primary" variant="subtitle1">
                {text}
              </Typography>
            </Button>
          </Link>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Header;
