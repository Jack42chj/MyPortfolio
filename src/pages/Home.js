import Header from "../components/Header";
import Main from "./Main";
import AboutMe from "./AboutMe";

const Home = () => {
    return(
        <div>
            <Header />
            <Main />
            <AboutMe />
            <p>Skills</p>
            <p>HTML, CSS, JAVASCRIPT, REACT, MATERIAL-UI, C, C++, Java, Python, Git</p>
            <p>Projects</p>
            <p>Study</p>
            <p>Contact</p>
        </div>
    );
};
export default Home;