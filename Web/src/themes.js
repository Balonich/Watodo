import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    allVariants: {
      fontOpticalSizing: "auto",
      fontStyle: "normal",
    },
  },
  palette: {
    background: {
      default: "#1c1c1e", // body background color
    },
    text: {
      primary: "#e5e5ea", // default text color
    },
    primary: {
      main: "#3c3c3e", // main color
    },
    secondary: {
      main: "#2c2c2e", // secondary color
    },
    accent: {
      main: "#bd66e0",
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundImage: 'url("src/icons/bg2.svg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          background: "transparent",
          flex: 1,
          padding: "5px",
          paddingLeft: "18px",
          width: "100%",
          color: theme.palette.text.primary,
          "&::placeholder": {
            color: "#a1a1a379",
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          listStyle: "none",
          padding: 0,
          margin: 0,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          display: "flex",
          alignItems: "center",
          backgroundColor: theme.palette.secondary.main,
          padding: "10px 0",
          borderRadius: "10px",
          marginBottom: "10px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
          "&:hover": {
            backgroundColor: theme.palette.primary.main,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          textAlign: "center",
        },
        h1: {
          fontWeight: 500,
          padding: "10px 0",
          fontSize: "24px",
          color: theme.palette.text.primary,
        },
        body1: {
          fontSize: "16px",
          lineHeight: 1.5,
          color: theme.palette.text.primary,
          textAlign: "left",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: theme.palette.text.primary,
          background: "none",
          border: "none",
          cursor: "pointer",
          marginRight: "10px",
          transition: "all 0.3s ease",
          width: "30px",
          height: "30px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          backgroundColor: theme.palette.secondary.main,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
          padding: 0,
          "&:hover": {
            transform: "scale(1.1)",
            background: "linear-gradient(45deg, #9c27b0, #03a9f4)",
            boxShadow: "0 6px 8px rgba(0, 0, 0, 0.4)",
          },
          "&:active": {
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            transform: "translateY(2px)",
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: "1.25rem",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          width: "15px",
          height: "15px",
          backgroundColor: "#444",
          outline: "none",
          color: "transparent",
          border: "none",
          borderRadius: "3px",
          cursor: "pointer",
          transition: "background-color 0.15s ease",
          marginLeft: "15px",
          "&:hover": {
            backgroundColor: "#555",
          },
          "&.Mui-checked": {
            background: "linear-gradient(45deg, #9c27b0, #03a9f4)",
            color: "transparent",
            transition: "opacity 0.15s ease",
            outline: "none",
          },
          "&.Mui-checked:hover": {
            opacity: 0.8,
          },
        },
      },
    },
  },
});

export default theme;
