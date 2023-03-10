import { createTheme } from "@mui/material";

const lightTheme = createTheme({
    palette:{
        type: 'light',
        primary: {
            main: "#65e6bd",
            contrastText: "#ffffff"
        },
        secondary: {
            main: "#f7fafc",
            contrastText: "#f7fafc",
        },
    },
});

const darkTheme = createTheme({
    palette:{
        type: 'dark',
        primary: {
            main: "#70face",
            contrastText: "#49568a",
        },
        secondary: {
            main: "#011d33",
            contrastText: "#dee0df",
        },
    },
});

darkTheme.typography.h5 = {
    fontSize: "1.1rem",
    '@media (min-width:600px)': {
        fontSize: '1.3rem',
    },
    [darkTheme.breakpoints.up('md')]: {
        fontSize: "1.5rem",
    },
};

darkTheme.typography.h3 = {
    fontSize: "2.2rem",
    '@media (min-width:600px)': {
        fontSize: '2.8rem',
    },
    [darkTheme.breakpoints.up('md')]: {
        fontSize: "3.5rem",
    },
};

lightTheme.typography.h5 = {
    fontSize: "1.1rem",
    '@media (min-width:600px)': {
        fontSize: '1.3rem',
    },
    [lightTheme.breakpoints.up('md')]: {
        fontSize: "1.5rem",
    },
};

lightTheme.typography.h3 = {
    fontSize: "2.2rem",
    '@media (min-width:600px)': {
        fontSize: '2.8rem',
    },
    [lightTheme.breakpoints.up('md')]: {
        fontSize: "3.5rem",
    },
};

export { lightTheme, darkTheme };