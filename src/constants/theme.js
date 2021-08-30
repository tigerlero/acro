import { createMuiTheme } from "@material-ui/core/styles";

const overrides = () => {
  return {
  MuiAppBar:{
    colorPrimary: {
      backgroundColor: '#0000009e'
    }
  }
  };
};

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#556ee6",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: "#0066ff",
      main: "#00acc1",
      // dark: will be calculated from palette.secondary.main,
      // contrastText: "#ffcc00",
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
    overrides: overrides(),
  },
});

export { theme };
