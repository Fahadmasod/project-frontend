import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const WelcomeCard = () => (
  <Card sx={{ my: 2, p: 2, borderRadius: 3 }}>
    <CardContent>
      <Typography variant="h6" fontWeight="bold" color="primary">Welcome</Typography>
      <Typography variant="body2">We invite you to join us on</Typography>
      <Typography variant="h6" fontWeight="bold" color="text.primary">November 7, 2025</Typography>
      <Typography variant="body2">at All season for our wedding!</Typography>
    </CardContent>
  </Card>
);

export default WelcomeCard;
