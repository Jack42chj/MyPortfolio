import { Stack, Box } from "@mui/material";
import Section from "../components/Section";
import Text from "../components/Text";

const Skills = () => {
    return(
        <Section id="skills">
            <Text variant="h3">Skills</Text>
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