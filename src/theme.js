import { createTheme } from "@mui/material/styles";

const commonTypography = {
  fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
  fontWeight: 400,
  lineHeight: 1.5,
};

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#ffffff",
      paper: "#f9f9f9",
    },
    text: {
      primary: "#213547",
    },
    primary: {
      main: "#646cff",
      dark: "#535bf2",
    },
  },
  typography: commonTypography,
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#242424",
      paper: "#1a1a1a",
    },
    text: {
      primary: "rgba(255, 255, 255, 0.87)",
    },
    primary: {
      main: "#646cff",
      dark: "#535bf2",
    },
  },
  typography: commonTypography,
});

export { lightTheme, darkTheme };
