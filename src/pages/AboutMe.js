import { Timeline, TimelineConnector, TimelineContent, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Stack, Typography, Box, Divider } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import { styled } from "@mui/system";


const Section = styled(Stack)({
    width: "100%",
    justifyContent: "center",
    minHeight: "60vh",
});

const AboutMe = () => {
    return(
        <>
            <Stack
                width="100" alignItems="center" mt={5}
            >
                <Typography variant="h3" fontWeight="700">About Me</Typography>
            </Stack>
            <Section>
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent>2006.03 ~ <br /> 2012.06</TimelineOppositeContent>
                        <TimelineSeparator>
                            <SchoolIcon fontSize="medium" sx={{ padding: 1, color: 'white', borderRadius: 8, backgroundColor: 'blue'}} />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Box 
                                sx={{ borderRadius: 2, boxShadow: 5 }}
                            >
                                <Typography p={1}>서울 봉화초등학교 입학</Typography>
                                <Divider />
                                <Typography p={1}>중퇴</Typography>
                            </Box>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>2012.09 ~ <br /> 2017.06</TimelineOppositeContent>
                        <TimelineSeparator>
                            <SchoolIcon fontSize="medium" sx={{ padding: 1, color: 'white', borderRadius: 8, boder: '1px solid', backgroundColor: 'blue'}}/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Box 
                                sx={{ borderRadius: 2, boxShadow: 5 }}
                            >
                                <Typography p={1}>상해 진재중학국제부 입학</Typography>
                                <Divider />
                                <Typography p={1}>졸업</Typography>
                            </Box>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>2017.09 ~ <br /> 2018.01</TimelineOppositeContent>
                        <TimelineSeparator>
                            <SchoolIcon fontSize="medium" sx={{ padding: 1, color: 'white', borderRadius: 8, boder: '1px solid', backgroundColor: 'blue'}}/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Box 
                                sx={{ borderRadius: 2, boxShadow: 5 }}
                            >
                                <Typography p={1}>중국 복단대학교 입학</Typography>
                                <Divider />
                                <Typography p={1}>자퇴</Typography>
                            </Box>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>2018.03</TimelineOppositeContent>
                        <TimelineSeparator>
                            <SchoolIcon fontSize="medium" sx={{ padding: 1, color: 'white', borderRadius: 8, boder: '1px solid', backgroundColor: 'blue'}}/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Box 
                                sx={{ borderRadius: 2, boxShadow: 5 }}
                            >
                                <Typography p={1}>광운대학교 입학</Typography>
                                <Divider />
                                <Typography p={1}>컴퓨터정보공학부 18학번</Typography>
                            </Box>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>2019.04 ~ <br /> 2020.11</TimelineOppositeContent>
                        <TimelineSeparator>
                            <MilitaryTechIcon fontSize="medium" sx={{ padding: 1, color: 'white', borderRadius: 8, boder: '1px solid', backgroundColor: 'blue'}}/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Box 
                                sx={{ borderRadius: 2, boxShadow: 5 }}
                            >
                                <Typography p={1}>군 입대</Typography>
                                <Divider />
                                <Typography p={1}>해병대 병장만기 전역</Typography>
                            </Box>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>2024.02</TimelineOppositeContent>
                        <TimelineSeparator>
                            <SchoolIcon fontSize="medium" sx={{ padding: 1, color: 'white', borderRadius: 8, boder: '1px solid', backgroundColor: 'blue'}}/>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Box 
                                sx={{ borderRadius: 2, boxShadow: 5 }}
                            >
                                <Typography p={1}>광운대학교 졸업</Typography>
                            </Box>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Section>
        </>
    );
};
export default AboutMe;