import Section from "../components/Section";
import CommonText from "../components/Text/CommonText";
import { Box, Avatar, Stack, Typography } from "@mui/material";
import MainLogo from "../assets/Main.jpg";
import Row from "../components/Grid/Row";
import Column from "../components/Grid/Column";
import ColorText from "../components/Text/ColorText";
import TextDivider from "../components/TextDivider";
import AvatarImg from "../components/Icons/AvatarImg";
import IconHobby from "../components/Icons/IconHobby";


const IntroItems = {
    1: { id: "이름(영어)", content: "최호진 (CHOI HOJIN)" },
    2: { id: "생년월일", content: "\u00a0\u00a01999.03.25" },
    3: { id: "연락처", content: "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0010-5064-8771" },
    4: { id: "이메일", content: "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0hojinch99@gmail.com" },
    5: { id: "주소지", content: "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0서울특별시 중랑구" },
    6: { id: "학력", content: "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0광운대학교(컴퓨터정보공학부)" },
};

const Items = {
    1: { id: "이름(영어)", content: "최호진 (CHOI HOJIN)" },
    2: { id: "생년월일", content: "1999.03.25" },
    3: { id: "연락처", content: "010-5064-8771" },
    4: { id: "이메일", content: "hojinch99@gmail.com" },
    5: { id: "주소지", content: "서울특별시 중랑구" },
    6: { id: "학력", content: "광운대학교(컴퓨터정보공학부)" },
};

const Interests = [
    { icon: <IconHobby name="soccer" />, text: "축구" },
    { icon: <IconHobby name="fitness" />, text: "운동" },
    { icon: <IconHobby name="travel" />, text: "여행" },
    { icon: <IconHobby name="movie" />, text: "영화보기" },
];

const Aboutme = () => {
    return(
        <Section id="aboutme">
            <CommonText variant="h3">About Me</CommonText>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <AvatarImg src={MainLogo} />
                <Column>
                    {Object.keys(Items).map((item) => (
                        <>
                            <ColorText variant="subtitle1">{Items[item].id}</ColorText>
                            <CommonText variant="subtitle2">{Items[item].content}</CommonText>
                            <TextDivider />
                        </>
                    ))}
                </Column>                
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'block' }, mx: 10, mt: 3 }}>
                <Row>
                    <AvatarImg src={MainLogo} />
                    <Column> 
                        {Object.keys(IntroItems).map((item) => (
                            <Row>
                                <ColorText variant="subtitle3">&emsp;{IntroItems[item].id}</ColorText>
                                <CommonText variant="subtitle4">&emsp;&emsp;{IntroItems[item].content}</CommonText>
                            </Row>
                        ))}
                    </Column>
                </Row>
                <ColorText variant="subtitle3">취미</ColorText>
                <TextDivider />
                <Row sx={{ my: 1 }}>
                    {Interests.map((interest) => (
                        <Row>
                            {interest.icon}
                            <CommonText variant="subtitle4">{interest.text}</CommonText>
                        </Row>
                    ))}
                </Row>
                <ColorText variant="subtitle3">자기소개</ColorText>
                <TextDivider />
                <CommonText variant="subtitle4">
                    저는 이러 이러한 이유로 프론트엔드 개발자가 하고싶다.<br />
                    나는 축구를 좋아한다.<br />
                    나는 운동을 좋아한다.<br />
                    나는 게임을 좋아한다.<br />
                    이부분은 추가로 수정할 것이다.
                </CommonText>
            </Box>
        </Section>
    );
};

export default Aboutme;