import { Box, Typography } from '@mui/material';
import React from 'react';



export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        justifyContent: 'flex-end',
        flexDirection: 'row',
        py: 3,
        px: 2,
        mt: 'auto',
        background: '#5C469C',
        color: 'white' 
      }}
    >
          <Typography variant="body2" color="white">
            {'Copyright © Labib ' + new Date().getFullYear() + '.'}
          </Typography>        
    </Box>
  );
}