import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import MovieIcon from '@mui/icons-material/Movie';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { styled } from "@mui/system";
import React from 'react';

const iconLookup = {
    soccer: <SportsSoccerIcon />,
    movie: <MovieIcon />,
    travel: <TravelExploreIcon />,
    fitness: <FitnessCenterIcon />,
};

const StyledIcon = styled('div')(({theme}) => ({
    fontSize: "60px",
}));

const IconHobby = ({ name }) => {
    const selectedIcon = iconLookup[name];
    return (
        <StyledIcon>
           {React.cloneElement(selectedIcon, {style: {fontSize: "inherit"}})}
        </StyledIcon>
    );
};

export default IconHobby;