import { AppBar, IconButton, Toolbar, Typography, Box, Button, Collapse, List, ListItem, ListItemText, ThemeProvider, useTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useState } from 'react';
import darkTheme from '../styles/darkMode';
import lightTheme from '../styles/lightMode';

const pages = ['About Me', 'Skills', 'Projects', 'Study', 'Contact'];

const Header = () => {
    const [mode, setMode] = useState(false);
    const theme = useTheme();
    const toggleTheme = () => {
        setMode(!mode);
    }

    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    return(
        <ThemeProvider theme={mode ? darkTheme : lightTheme}>
            <AppBar
                color="secondary"
                elevation={0}
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
                                sx={{ display: 'block', color: 'black', mx: 'auto', textTransform: 'none', fontWeight: 700 }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <IconButton color="primary" onClick={toggleTheme} sx={{ display: { xs: 'none', md: 'flex'}, border: '2px solid', borderRadius: 3 }}>
                        {theme.palette.type === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                    
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton onClick={toggleTheme} color="primary" sx={{ border: '2px solid', borderRadius: 3, mx: 1 }}>
                            {theme.palette.type === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
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
        </ThemeProvider>
    );
};
export default Header;