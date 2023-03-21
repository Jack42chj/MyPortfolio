import { useEffect, useState } from "react";
import MainLogo from "../assets/Main.jpg";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Link } from 'react-scroll';
import Section from '../components/Section';
import MainText from '../components/Text/MainText';
import CommonButton from '../components/Button/CommonButton';

const Main = () => {
    const completeWord = "\"日就月將\"하는 프론트엔드 개발자를 꿈꾸는 최호진 입니다.";
    const [text, setText] = useState('');
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        const Interval = setInterval(() => {
            setText((prevTitle) => {
                let result = prevTitle ? prevTitle + completeWord[count] : completeWord[count]
                setCount(count + 1);

                if(count === completeWord.length){
                    setCount(0);
                    setText('\u00A0');
                }
                return result;
            });
        }, 200);

        return () => {
            clearInterval(Interval);
        };
    });

    return(
        <Section id="main" sx={{ background: `url(${MainLogo})`, backgroundSize: 'cover', backgroundPosition: "center center" }}>
            <MainText variant="h3">최호진's 포트폴리오</MainText>
            <MainText variant="h5" sx={{ mt: 5 }}>안녕하세요.</MainText>
            <MainText variant="h5" sx={{ mt: 10 }}>{text}</MainText>
            <Link to="aboutme" spy={true} smooth={true}>
                <CommonButton
                    variant="contained"
                    sx={{ boxShadow: 0, borderRadius: 10, pl: 5, pr: 4, py: 2, mt: 10, fontSize: '16px' }}
                >
                    더보기&nbsp;<KeyboardDoubleArrowDownIcon fontSize="medium" />
                </CommonButton>
            </Link>
        </Section>
    );
};
export default Main;