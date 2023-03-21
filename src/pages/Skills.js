import { Stack, Box } from "@mui/material";
import Section from "../components/Section";
import CommonText from "../components/Text/CommonText";

const Skills = () => {
    return(
        <Section id="skills">
            <CommonText variant="h3">Skills</CommonText>
            <Stack>
                <Box>
                    Frontend
                </Box>
                <Box>
                    Library
                </Box>
                <Box>
                    Frontend
                </Box>
            </Stack>
            <p>HTML, CSS, JAVASCRIPT, REACT, MATERIAL-UI, C, C++, Java, Python, Git</p>
        </Section>
    );
};
export default Skills;