import Header from "../components/Header";
import Main from "./Main";
import AboutMe from "./Aboutme";
import MyTimeline from "./MyTimeline";
import Skills from "./Skills";
import Projects from "./Projects";
import Study from "./Study";
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
            <MyTimeline />
            <Skills />
            <Projects />
            <Study />
        </ThemeProvider>
    );
};
export default Home;