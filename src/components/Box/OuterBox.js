import { Box } from "@mui/material";
import { styled } from "@mui/system";

const StyledBox = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.main,
    width: "80%",
    [theme.breakpoints.down('sm')]: {
        width: "90%",
    },
    borderRadius: 16,
    boxShadow: theme.shadows[5],
    border: "3px solid",
    borderColor: theme.palette.primary.main,
}));

const OuterBox = ({ children, sx }) => {
    return(
        <StyledBox sx={sx}>
            {children}
        </StyledBox>
    );
};

export default OuterBox;