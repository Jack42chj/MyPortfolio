import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import { styled } from "@mui/system";

const StyledIcon = styled(MilitaryTechIcon)(({theme}) => ({
    borderRadius: "50%",
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
    padding: 10,
    fontSize: "medium",
    [theme.breakpoints.down('sm')]: {
        padding: 6,
    },   
}));

const IconArmy = () => {
    return(
        <StyledIcon />
    );
};

export default IconArmy;