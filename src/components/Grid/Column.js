import { Stack } from "@mui/material";
import { styled } from "@mui/system";

const StyledStack = styled(Stack)(({theme}) => ({
    alignItems: "flex-start",
    justifyContent: "center",
    "& > *": {
        marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.down('sm')]: {
        alignItems: "flex-start",
        "& > *": {
            marginBottom: theme.spacing(0),
        },
    },
    
}));

const Column = ({ children, sx }) => {
    return (
        <StyledStack direction="column" sx={sx}>
            {children}
        </StyledStack>
    );
};

export default Column;