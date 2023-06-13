import React from "react";
import { Button, Box, Grid, BoxProps, Typography } from "@mui/material";

// TODO: To make projects page and to put Tic Tac Toe and Components under it
const buttonsData: ReadonlyArray<{ text: string; href: string }> = [
  { text: "Main", href: "/" },
  { text: "CV", href: "/cv" },
  { text: "Components", href: "/Components" },
  { text: "Tic Tac Toe", href: "/tic-tac-toe" },
  { text: "About", href: "/about" },
  { text: "Settings", href: "/Settings" },
];

const Header = (props: BoxProps) => (
  <Box {...props}>
    <Grid container justifyContent="center" spacing={0.5}>
      {buttonsData.map(({ text, href }) => (
        <Grid item key={text}>
          <Button variant="contained" href={href}>
            <Typography variant="subtitle1">{text}</Typography>
          </Button>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Header;
