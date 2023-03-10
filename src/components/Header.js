import { AppBar, IconButton, Toolbar, Typography, Box, Button, Collapse, List, ListItem, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useState } from 'react';

const pages = ['About Me', 'Skills', 'Projects', 'Study', 'Contact'];

const Header = (props) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    return( 
        <AppBar
            color="secondary"
            elevation={0}
            position="static"
        >
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Typography
                    variant="h6"
                    fontWeight="700"
                    fontSize="24px"
                    letterSpacing={1}
                    color="primary"
                    p={2}
                    sx={{ display: { xs: 'flex', md: 'flex'} }}
                >
                    CHJ's Portfolio
                </Typography>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
                    {pages.map((page) => (
                        <Button
                            key={page}
                            sx={{ display: 'block', color: 'primary', mx: 'auto', textTransform: 'none', fontWeight: 700 }}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>
                <IconButton color="primary" onClick={ props.handleToggleTheme } sx={{ display: { xs: 'none', md: 'flex' }, border: '2px solid', borderRadius: 3 }}>
                    { props.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon /> }
                </IconButton>
                
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton onClick={ props.handleToggleTheme } color="primary" sx={{ border: '2px solid', borderRadius: 3, mx: 1 }}>
                        { props.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon /> }
                    </IconButton>
                    <IconButton
                        color="primary"
                        onClick={handleClick}
                        sx={{ border: '2px solid', borderRadius: 3 }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
            </Toolbar>
            <Collapse in={Boolean(open)} unmountOnExit timeout="auto">
                <List disablePadding>
                        {pages.map((page) => (
                            <ListItem key={page}>
                                <ListItemText primary={<Typography color="primary" fontWeight="700">{page}</Typography>} />
                            </ListItem>
                        ))}
                </List>
            </Collapse>
        </AppBar>
    );
};

export default Header;