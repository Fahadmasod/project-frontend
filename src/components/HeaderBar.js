import React from 'react';
import { Box, Typography, Avatar, useMediaQuery, useTheme } from '@mui/material';

const HeaderBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
      <Typography variant={isMobile ? 'h6' : 'h4'} fontWeight="bold">Big Day</Typography>
      <Avatar src="https://via.placeholder.com/40" />
    </Box>
  );
};

export default HeaderBar;
