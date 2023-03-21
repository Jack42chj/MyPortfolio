import { createTheme } from "@mui/material";

const lightTheme = createTheme({
    palette:{
        type: 'light',
        primary: {
            main: "#65e6bd",
            sub: "#ffffff",
            junior: "#ffffff",
        },
        secondary: {
            main: "#e4f5ed",
            sub: "#edfafc",
        },
        third: {
            main: "#7ecf7e",
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
        subtitle1: {
            fontSize: "1rem",
            '@media (min-width:600px)': {
                fontSize: '1.1rem',
            },
            '@media (min-width:900px)': {
                fontSize: '1.3rem',
            },
        },
        subtitle2: {
            fontSize: "0.8rem",
            '@media (min-width:600px)': {
                fontSize: '1rem',
            },
            '@media (min-width:900px)': {
                fontSize: '1.1rem',
            },
        },
        subtitle3: {
            '@media (min-width:900px)': {
                fontSize: '1.4rem',
            },
            '@media (min-width:1200px)': {
                fontSize: '1.7rem',
            },
        },
        subtitle4: {
            '@media (min-width:900px)': {
                fontSize: '1.1rem',
            },
            '@media (min-width:1200px)': {
                fontSize: '1.4rem',
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
            sub: "#011d33",
            junior: "#20345c",
        },
        secondary: {
            main: "#49568a",
            sub: "#ccffcc",
        },
        third: {
            main: "#ccffcc",
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
        subtitle1: {
            fontSize: "1rem",
            '@media (min-width:600px)': {
                fontSize: '1.1rem',
            },
            '@media (min-width:900px)': {
                fontSize: '1.3rem',
            },
        },
        subtitle2: {
            fontSize: "0.8rem",
            '@media (min-width:600px)': {
                fontSize: '1rem',
            },
            '@media (min-width:900px)': {
                fontSize: '1.1rem',
            },
        },
        subtitle3: {
            fontSize: "1rem",
            '@media (min-width:600px)': {
                fontSize: '1.1rem',
            },
            '@media (min-width:900px)': {
                fontSize: '1.3rem',
            },
        },
        subtitle4: {
            fontSize: "0.8rem",
            '@media (min-width:600px)': {
                fontSize: '1rem',
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