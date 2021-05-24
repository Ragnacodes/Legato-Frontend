import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
        common: {
            black: "#000",
            white: "#fff"
        },
        type: "light",
        primary: {
            main: "#006BAA",
            contrastText: "#fff"
        },
        secondary: {
            main: "#dc004e",
            contrastText: "#fff"
        },
        error: {
            main: "#f44336",
            contrastText: "#fff"
        },
        warning: {
            main: "#ff9800",
            contrastText: "fff"
        },
        info: {
            main: "#2196f3",
            contrastText: "#fff"
        },
        success: {
            main: "#4caf50",
            contrastText: "fff"
        },
        text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.54)",
            disabled: "rgba(0, 0, 0, 0.38)",
            hint: "#707070"
        },
        divider: "rgba(0, 0, 0, 0.12)",
        background: {
            paper: "#fff",
            default: "#fafafa"
        },
    },
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
});