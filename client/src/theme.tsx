import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#679186',
      light: '#bbd4ce',
      dark: '#264e70',
      contrastText: '#fdebd3',
    },
    secondary: {
      main: '#64CCC5',
      light: '#DAFFFB',
      dark: '#176B87',
      contrastText: '#000000',
    },
    text: {
      primary: '#000000',
      secondary: '#808080',
      disabled: '#e0e0e0',
    },
  },
});

// palette: {
//   primary: {
//     main: "#2ebac9",
//     light: "#abe1de",
//     dark: "#205368",
//     contrastText: "#000000",
//   },
//   secondary: {
//     main: '#ba2ec9',
//     light: '#e1abde',
//     dark: '#532068',
//     contrastText: '#000000',
//   },
//   text: {
//     primary: "#000000",
//     secondary: "#808080",
//     disabled: "#e0e0e0",
//   },
// },

// palette: {
//   primary: {
//     main: "#3f3f3f",
//     light: "#717171",
//     dark: "#282828",
//     contrastText: "#9d718a",
//   },
//   secondary: {
//     main: "#2e282b",
//     light: "#757173",
//     dark: "#443f42",
//     contrastText: "#b18ca0",
//   },
//   text: {
//     primary: "#f0f0f0",
//     secondary: "#8a5774",
//     disabled: "#3f3f3f",
//   },
// },

// surface
// 100: #121212;
// 200: #282828; -
// 300: #3f3f3f; -
// 400: #575757;
// 500: #717171; -
// 600: #8b8b8b;

// primary
// 100: "#4f0037",
// 200: "#63224b",
// 300: "#763d5f",
// 400: "#8a5774",
// 500: "#9d718a",
// 600: "#b18ca0",

// mixed
// 100: "#191216",
// 200: "#2e282b", -
// 300: "#443f42", -
// 400: "#5c575a",
// 500: "#757173", -
// 600: "#8f8b8d",

export default theme;
