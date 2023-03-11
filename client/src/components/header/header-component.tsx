import React from "react";
import { Button, Box, Grid } from "@mui/material";

const buttonsData: ReadonlyArray<{ text: string; href: string }> = [
  { text: "Main", href: "/" },
  { text: "CV", href: "/cv" },
  { text: "Tic Tac Toe", href: "/tic-tac-toe" },
  { text: "About", href: "/about" },
];

const HeaderComponent = () => (
  <Box
    bgcolor="primary.contrastText"
    display="flex"
    height="5vh"
    padding="0.25rem"
    width="100vw"
  >
    <Grid
      container
      justifyContent="center"
      spacing={0.5}
    >
      {buttonsData.map(({ text, href }) => (
        <Grid item key={text}>
          <Button variant="contained" href={href}>
            {text}
          </Button>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default HeaderComponent;
