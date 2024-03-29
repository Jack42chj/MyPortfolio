import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledTypography = styled(Typography)(({theme}) => ({
    fontWeight: "800",
    textTransform: "none",
    color: theme.palette.primary.main,
}));

const CommonText = ({ children, variant, sx }) => {
    return(
        <StyledTypography variant={variant} sx={sx}>
            {children}
        </StyledTypography>
    );
};

export default CommonText;