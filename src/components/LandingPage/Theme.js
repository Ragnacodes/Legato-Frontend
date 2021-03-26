import { createMuiTheme } from "@material-ui/core/styles";

const Theme = createMuiTheme({
  typography: {
    h4: {
      fontFamily: "Nunito",
    },
    h5: {
      fontFamily: "Nunito",
    },
    h6: {
      fontFamily: "Nunito",
    },
    body1: {
      fontFamily: "Roboto",
    },
  },
  palette: {
    primary: {
      light: "#4f5b62",
      main: "#263238",
      dark: "#000a12",
      contrastText: "#fff",
    },
    secondary: {
      main: "#fff",
      contrastText: "#000a12",
    },
  },
});

export default Theme;
