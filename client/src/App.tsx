import { Box, BoxProps, ThemeProvider } from '@mui/material';
import { CV, NoMatch, TicTacToe } from './pages';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import React from 'react';

import { store } from './app/store';
import Header from './components/header/header';
import theme from './theme';

const App = () => {
  const boxProps: BoxProps = {
    color: 'primary.main',
    height: '100vh',
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Box {...boxProps}>
          <Header
            bgcolor="primary.main"
            display="flex"
            paddingBottom="0.5rem"
            paddingTop="0.5rem"
          />
          <Routes>
            <Route path="/">
              <Route index element={<CV />} />
              <Route path="cv" element={<CV />} />
              <Route path="tic-tac-toe" element={<TicTacToe />} />
              {/* Using path="*" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
              routes for. */}
              <Route path="*" element={<NoMatch />} />
            </Route>
          </Routes>
        </Box>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
