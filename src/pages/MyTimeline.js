import { Timeline, TimelineConnector, TimelineContent, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Divider, useTheme } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import Section from "../components/Section";
import Text from "../components/Text";
import OuterBox from "../components/Box/OuterBox";
import InnerBox from "../components/Box/InnerBox";

const ListItems = {
    1: { date: "2006.03 ~ 2012.06", first: "서울 봉화초등학교 입학", second: "중퇴" },
    2: { date: "2012.09 ~ 2017.06", first: "중국 상하이 진재중학국제부 입학", second: "졸업" },
    3: { date: "2017.09 ~ 2018.01", first: "중국 복단대학교 입학", second: "자퇴" },
    4: { date: "2018.03", first: "광운대학교 입학", second: "컴퓨터정보공학부 18학번" },
    5: { date: "2019.04 ~ 2020.11", first: "군 입대", second: "해병대 병장만기 전역" },
    6: { date: "2024.02", first: "광운대학교 졸업" },
}


const MyTimeline = () => {
    const theme = useTheme();
    return(
        <Section id="mytimeline">
            <Text variant="h3" sx={{ py: 2 }}>Timeline</Text>
            <OuterBox>
                <Timeline position="alternate">
                    {Object.keys(ListItems).map((item, index) => (
                        <TimelineItem>
                            <TimelineOppositeContent><Text variant="h6">{ListItems[item].date}</Text></TimelineOppositeContent>
                            <TimelineSeparator>
                                {index === 4 && <MilitaryTechIcon fontSize="medium" sx={{ padding: 1, borderRadius: 8, color: theme.palette.secondary.main, bgcolor: theme.palette.primary.main }} />}
                                {index !== 4 && <SchoolIcon fontSize="medium" sx={{ padding: 1, borderRadius: 8, color: theme.palette.secondary.main, bgcolor: theme.palette.primary.main }} />}
                                {index < Object.keys(ListItems).length - 1 && <TimelineConnector />}
                            </TimelineSeparator>
                            <TimelineContent>
                                <InnerBox>
                                    <Text variant="h6" sx={{ p: 1 }}>{ListItems[item].first}</Text>
                                    {index < Object.keys(ListItems).length - 1 && 
                                        <>
                                            <Divider />
                                            <Text variant="h6" sx={{ p: 1 }}>{ListItems[item].second}</Text>
                                        </>
                                    }
                                </InnerBox>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </OuterBox>
        </Section>
    );
};
export default MyTimeline;