import { Divider } from "@mui/material";
import { styled } from "@mui/system";

const StyledDivider = styled(Divider)(({theme}) => ({
    backgroundColor: theme.palette.third.main,
    width: "100%",
    padding: 0.5,
}));

const TextDivider = () => {
    return (
        <StyledDivider />
    );
};

export default TextDivider;