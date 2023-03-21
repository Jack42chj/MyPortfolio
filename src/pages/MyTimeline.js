import { Timeline, TimelineConnector, TimelineContent, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import Section from "../components/Section";
import CommonText from "../components/Text/CommonText";
import OuterBox from "../components/Box/OuterBox";
import InnerBox from "../components/Box/InnerBox";
import IconArmy from "../components/Icons/IconArmy";
import IconSchool from "../components/Icons/IconSchool";
import TextDivider from "../components/TextDivider";

const ListItems = {
    1: { date: "2006.03 ~ 2012.06", first: "서울 봉화초등학교 입학", second: "중퇴" },
    2: { date: "2012.09 ~ 2017.06", first: "중국 상하이 진재중학국제부 입학", second: "졸업" },
    3: { date: "2017.09 ~ 2018.01", first: "중국 복단대학교 입학", second: "자퇴" },
    4: { date: "2018.03", first: "광운대학교 입학", second: "컴퓨터정보공학부 18학번" },
    5: { date: "2019.04 ~ 2020.11", first: "군 입대", second: "병장만기 전역" },
    6: { date: "2024.02", first: "광운대학교 졸업" },
}

const MyTimeline = () => {
    return(
        <Section id="mytimeline">
            <CommonText variant="h3" sx={{ py: 2 }}>Timeline</CommonText>
            <OuterBox>
                <Timeline position="alternate">
                    {Object.keys(ListItems).map((item, index) => (
                        <TimelineItem>
                            <TimelineOppositeContent><CommonText variant="h6">{ListItems[item].date}</CommonText></TimelineOppositeContent>
                            <TimelineSeparator>
                                {index === 4 ? <IconArmy /> : <IconSchool />}
                                {index < Object.keys(ListItems).length - 1 && <TimelineConnector />}
                            </TimelineSeparator>
                            <TimelineContent>
                                <InnerBox>
                                    <CommonText variant="h6" sx={{ p: 1 }}>{ListItems[item].first}</CommonText>
                                    {index < Object.keys(ListItems).length - 1 && 
                                        <>
                                            <TextDivider />
                                            <CommonText variant="h6" sx={{ p: 1 }}>{ListItems[item].second}</CommonText>
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