import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";

import {
  About,
  Components,
  CV,
  Home,
  NoMatch,
  Settings,
  TicTacToe,
} from "./pages";
import { Box, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./app/store";

import Header from "./components/header/header";
import theme from "./theme";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Box color="primary.main" height="100vh">
          <Header
            bgcolor="primary.main"
            display="flex"
            paddingBottom="0.5rem"
            paddingTop="0.5rem"
          />
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="components" element={<Components />} />
              <Route path="cv" element={<CV />} />
              <Route path="settings" element={<Settings />} />
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
