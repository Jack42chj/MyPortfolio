import { Typography, Stack } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import MainLogo from "../assets/Main.jpg";

const Section = styled(Stack)({
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "60vh",
});

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
        <>
            <Section sx={{ backgroundImage: `url(${MainLogo})`, backgroundSize: 'cover', justifyContent: "center" }}>
                <Typography
                    variant="h3"
                    fontWeight="700"
                    sx={{ color: "white" }}
                >
                    최호진's 포트폴리오
                </Typography>
                <Typography
                    variant="h6"
                    fontWeight="700"
                    mt={2}
                    sx={{ color: "white" }}
                >
                    {text}
                </Typography>
            </Section>
        </>
    );
};
export default Main;