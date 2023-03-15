import { Stack } from "@mui/material";
import { styled } from "@mui/system";

const StyledStack = styled(Stack)(({theme}) => ({
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.sub,
}));

const Section = ({ children, id, sx }) => {
    return (
        <StyledStack id={id} sx={sx}>
            {children}
        </StyledStack>
    );
};

export default Section;