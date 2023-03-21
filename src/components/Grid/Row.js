import { Stack } from "@mui/material";
import { styled } from "@mui/system";

const StyledStack = styled(Stack)(({theme}) => ({
    alignItems: "center",
    justifyContent: "space-between",
}));

const Row = ({ children, sx }) => {
    return (
        <StyledStack direction="row" spacing={2} sx={sx}>
            {children}
        </StyledStack>
    );
};

export default Row;