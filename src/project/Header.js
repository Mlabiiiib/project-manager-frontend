import { AppBar, Box, Toolbar, Card, CardMedia, Button } from '@mui/material';
import { Home, Add } from '@mui/icons-material';
import React from 'react';

function Header() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <AppBar>
                <Toolbar sx={{ justifyContent: "space-between", background: '#5C469C' }}>
                    <Button href='/' color="inherit" variant="h6">
                        <Home />Home
                    </Button>
                    <Button href='/projects/create' color="inherit">
                        <Add />New project
                    </Button>
                </Toolbar>
            </AppBar>
            <Card sx={{ mt:7, mx: 'auto' }}>
                <CardMedia
                    component="img"
                    alt="Banner Image"
                    image="/banner.png"
                />
            </Card>
        </Box>
    );
}

export default Header;
