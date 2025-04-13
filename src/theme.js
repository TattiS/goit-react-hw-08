import { createTheme } from "@mui/material/styles";

const commonTypography = {
  fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
  fontWeight: 400,
  lineHeight: 1.5,
};

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
      main: "#4caf50",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ff9800",
      contrastText: "#ffffff",
    },
    error: {
      main: "#f44336",
      contrastText: "#ffffff",
    },
  },
  typography: commonTypography,
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "12px",
          fontWeight: 600,
          padding: "8px 20px",
          transition: "0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          },
        },
        containedPrimary: {
          backgroundColor: "#4caf50",
          "&:hover": {
            backgroundColor: "#43a047",
          },
        },
        containedSecondary: {
          backgroundColor: "#ff9800",
          "&:hover": {
            backgroundColor: "#fb8c00",
          },
        },
        containedError: {
          backgroundColor: "#f44336",
          "&:hover": {
            backgroundColor: "#d32f2f",
          },
        },
        outlinedPrimary: {
          border: "2px solid #4caf50",
          color: "#4caf50",
          "&:hover": {
            backgroundColor: "#e8f5e9",
          },
        },
      },
    },
  },
});

export { darkTheme };
