import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledTypography = styled(Typography)(({theme}) => ({
    fontWeight: "800",
    color: theme.palette.third.main,
}));

const MainText = ({ children, variant, sx }) => {
    return(
        <StyledTypography variant={variant} sx={sx}>
            {children}
        </StyledTypography>
    );
};

export default MainText;