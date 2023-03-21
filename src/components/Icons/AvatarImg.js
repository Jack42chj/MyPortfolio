import { Avatar } from "@mui/material";
import { styled } from "@mui/system";

const StyledAvatar = styled(Avatar)(({theme}) => ({
    borderRadius: "50%",
    border: "5px solid",
    margin: "16px",
    borderColor: theme.palette.primary.main,
    width: "350px",
    height: "350px",
    [theme.breakpoints.down('lg')]: {
        width: "250px",
        height: "250px",
    },
    [theme.breakpoints.down('md')]: {
        width: "200px",
        height: "200px",
    },
}));

const AvatarImg = ({children, src}) => {
    return(
        <StyledAvatar src={src}>
            {children}
        </StyledAvatar>
    );
};

export default AvatarImg;