import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
        common: {
            black: "#000",
            white: "#fff"
        },
        type: "light",
        primary: {
            light: "#4f5b62",
            main: "#263238",
            dark: "#000a12",
            contrastText: "#fff"
        },
        secondary: {
            light: "#fff",
            main: "#fff",
            dark: "#b2b2b2",
            contrastText: "#000a12"
        },
        error: {
            light: "#e57373",
            main: "#f44336",
            dark: "#d32f2f",
            contrastText: "#fff"
        },
        warning: {
            light: "#ffb74d",
            main: "#ff9800",
            dark: "#f57c00",
            contrastText: "rgba(0, 0, 0, 0.87)"
        },
        info: {
            light: "#64b5f6",
            main: "#2196f3",
            dark: "#1976d2",
            contrastText: "#fff"
        },
        success: {
            light: "#81c784",
            main: "#4caf50",
            dark: "#388e3c",
            contrastText: "rgba(0, 0, 0, 0.87)"
        },
        text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.54)",
            disabled: "rgba(0, 0, 0, 0.38)",
            hint: "rgba(0, 0, 0, 0.38)"
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