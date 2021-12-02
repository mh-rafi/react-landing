import indigo from "@mui/material/colors/indigo";
import orange from "@mui/material/colors/orange";
import red from "@mui/material/colors/red";
import { createTheme } from "@mui/material";

const themeOptions = {
  palette: {
    type: "light",
    primary: indigo,
    secondary: orange,
    error: red,
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
    },
    MuiCard: {
      root: {
        borderRadius: 8,
      },
    },
    MuiFab: {
      root: {
        textTransform: "none",
      },
    },
  },
};

export const Theme = createTheme({
  ...themeOptions,
});

export const FooterTheme = createTheme({
  ...themeOptions,
  palette: {
    type: "dark",
  },
});
