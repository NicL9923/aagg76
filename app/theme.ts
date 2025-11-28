import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#7c3aed",
    },
    secondary: {
      main: "#f97316",
    },
    background: {
      default: "#f8fafc",
      paper: "#ffffff",
    },
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily:
      "var(--font-geist-sans, 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif)",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
});

export default theme;
