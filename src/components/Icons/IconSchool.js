import SchoolIcon from '@mui/icons-material/School';
import { styled } from "@mui/system";

const StyledIcon = styled(SchoolIcon)(({theme}) => ({
    borderRadius: "50%",
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
    padding: 10,
    fontSize: "medium",
    [theme.breakpoints.down('sm')]: {
        padding: 6,
    },   
}));

const IconSchool = () => {
    return(
        <StyledIcon />
    );
};

export default IconSchool;