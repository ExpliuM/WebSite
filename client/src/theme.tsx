import { createTheme, rgbToHex } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#272d41",
      light: "#525967",
      dark: "#1B1F2D",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f50057",
      light: "#F73378",
      dark: "#AB003C",
      contrastText: "#fff",
    },
  },
});

export default theme;
