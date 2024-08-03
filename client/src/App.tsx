import { Box, BoxProps, ThemeProvider } from '@mui/material';
import { CV, NoMatch, TicTacToe } from './pages';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { store } from './app/store';
import Header from './components/header/header';
import theme from './theme';
import Snake from './pages/snake';

const boxProps: BoxProps = {
  color: 'primary.main',
  height: '100vh',
};

const headerProps: BoxProps = {
  bgcolor: 'primary.main',
  display: 'flex',
  paddingBottom: '0.5rem',
  paddingTop: '0.5rem',
};

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Box {...boxProps}>
          <Header {...headerProps} />
          <Routes>
            <Route index element={<CV />} />
            <Route path="/" element={<CV />} />
            <Route path="cv" element={<CV />} />
            <Route path="tic-tac-toe" element={<TicTacToe />} />
            <Route path="snake" element={<Snake />} />
            <Route path="/Website/" element={<CV />} />
            {/* Using path="*" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
              routes for. */}
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
