import { Button } from "@mui/material";
import { styled } from "@mui/system";

const StyledButton = styled(Button)(({theme}) => ({
    fontWeight: "800",
    bgcolor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    textTransform: "none",
}));

const CommonButton = ({ children, variant, key, sx }) => {
    return(
        <StyledButton disableRipple={Boolean(true)} variant={variant} key={key} sx={sx}>
            {children}
        </StyledButton>
    );
};

export default CommonButton;