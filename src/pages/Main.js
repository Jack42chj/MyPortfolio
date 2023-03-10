import { Typography, Stack, useTheme, Button } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import MainLogo from "../assets/Main.jpg";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const Section = styled(Stack)({
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: "55vh",
});

const Main = () => {
    const theme = useTheme();

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
        <Section sx={{ background: `url(${MainLogo})`, backgroundSize: 'cover', backgroundPosition: "center center", color: theme.palette.secondary.contrastText }}>
            <Typography
                variant="h3"
                fontWeight="800"
            >
                최호진's 포트폴리오
            </Typography>
            <Typography
                variant="h5"
                fontWeight="800"
                mt={10}>
                안녕하세요.
            </Typography>
            <Typography
                variant="h5"
                fontWeight="800"
                my={5}
            >
                {text}
            </Typography>
            <Button
                variant="contained"
                sx={{ boxShadow: 0, borderRadius: 10, pl: 5, pr: 4, py: 2, color: theme.palette.secondary.main, fontWeight: 700, fontSize: '16px' }}
            >
                더보기&nbsp;<KeyboardDoubleArrowDownIcon fontSize="medium" />
            </Button>
        </Section>
    );
};
export default Main;