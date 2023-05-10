import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { Home, Add } from '@mui/icons-material';


function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography href="/" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Home />Home
                    </Typography>
                    <Button href='/projects/new' color="inherit">
                        <Add/>New project
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
