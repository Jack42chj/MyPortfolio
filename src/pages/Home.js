import Header from "../components/Header";
import Main from "./Main";
import AboutMe from "./AboutMe";
import { ThemeProvider } from "@mui/material";
import { useState } from "react";
import { lightTheme, darkTheme } from "../styles/muiTheme";


const Home = () => {
    const [mode, setMode] = useState('light');
    const handleToggleTheme = () => {
        mode === 'light' ? setMode('dark') : setMode('light');
    }

    const theme = mode === 'light' ? lightTheme : darkTheme;

    return(
        <ThemeProvider theme={theme}>
            <Header handleToggleTheme={handleToggleTheme} mode={mode} />
            <Main />
            <AboutMe />
            <p>Skills</p>
            <p>HTML, CSS, JAVASCRIPT, REACT, MATERIAL-UI, C, C++, Java, Python, Git</p>
            <p>Projects</p>
            <p>Study</p>
            <p>Contact</p>
        </ThemeProvider>
    );
};
export default Home;