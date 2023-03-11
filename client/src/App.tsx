import React from "react";
// import { Box, Container } from "@mui/material";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import { Box } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./app/store";
import About from "./pages/about-page";
import CV from "./pages/cv-page";
import Header from "./components/header/header-component";
import Home from "./pages/home-page";
import NoMatch from "./pages/no-match-page";
import TicTacToe from "./pages/tic-tac-toe-page";

const App = () => {
  return (
    <Provider store={store}>
      <Box color="primary">
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="tic-tac-toe" element={<TicTacToe />} />
            <Route path="cv" element={<CV />} />

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
              routes for. */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </Box>
    </Provider>
  );
};

export default App;
