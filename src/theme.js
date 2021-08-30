import {createTheme} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    root: {
      fontFamily: `"Fira Sans Condensed", "Helvetica", "Arial", sans-serif`,
    },
    subtitle2:{
      fontFamily: `"Fira Sans Condensed", "Helvetica", "Arial", sans-serif`,
      fontWeight:200
    }
  },
  MuiToolbar: {
    root: {
      fontFamily: `"Fira Sans Condensed", "Helvetica", "Arial", sans-serif`,
    },
    dense: {
      fontFamily: `"Fira Sans Condensed", "Helvetica", "Arial", sans-serif`,
    },
  },
});
