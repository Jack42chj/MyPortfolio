import { createTheme } from "@mui/material";

const lightTheme = createTheme({
    palette:{
        type: 'light',
        primary: {
            main: "#65e6bd",
            sub: "#ffffff"
        },
        secondary: {
            main: "#f7fafc",
            sub: "#f7fafc",
        },
    },
    typography: {
        h3: {
            fontSize: "2rem",
            '@media (min-width:600px)': {
                fontSize: '3rem',
            },
            '@media (min-width:900px)': {
                fontSize: '3.5rem',
            },
        },
        h5: {
            fontSize: "1.2rem",
            '@media (min-width:600px)': {
                fontSize: '1.3rem',
            },
            '@media (min-width:900px)': {
                fontSize: '1.5rem',
            },
        },
        h6: {
            fontSize: "0.6rem",
            '@media (min-width:600px)': {
                fontSize: '0.9rem',
            },
            '@media (min-width:900px)': {
                fontSize: '1.1rem',
            },
        },
        button: {
            fontSize: "1rem",
        },
    },
});

const darkTheme = createTheme({
    palette:{
        type: 'dark',
        primary: {
            main: "#70face",
            sub: "#49568a",
        },
        secondary: {
            main: "#011d33",
            sub: "#dee0df",
        },
    },
    typography: {
        h3: {
            fontSize: "2rem",
            '@media (min-width:600px)': {
                fontSize: '3rem',
            },
            '@media (min-width:900px)': {
                fontSize: '3.5rem',
            },
        },
        h5: {
            fontSize: "1.2rem",
            '@media (min-width:600px)': {
                fontSize: '1.3rem',
            },
            '@media (min-width:900px)': {
                fontSize: '1.5rem',
            },
        },
        h6: {
            fontSize: "0.6rem",
            '@media (min-width:600px)': {
                fontSize: '0.9rem',
            },
            '@media (min-width:900px)': {
                fontSize: '1.1rem',
            },
        },
        button: {
            fontSize: "1rem",
        },
    },
});

export { lightTheme, darkTheme };