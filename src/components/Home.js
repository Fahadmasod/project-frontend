import React, { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Avatar,
  useTheme,
  useMediaQuery
} from '@mui/material';
import nikahImage from '../nikah.jpg';
import WalimaTable from './Walima/WalimaList';
import Nikah from './Walima/Nikah';

import FavoriteIcon from '@mui/icons-material/Favorite';
import EventIcon from '@mui/icons-material/Event';
import PhotoIcon from '@mui/icons-material/Photo';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import HelpIcon from '@mui/icons-material/Help';
import RedeemIcon from '@mui/icons-material/Redeem';

const Home = () => {
  const [visibleComponent, setVisibleComponent] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleShowWalima = () => setVisibleComponent('walima');
  const handleShowNikah = () => setVisibleComponent('nikah');

  const backgroundStyle = {
    backgroundImage: `linear-gradient(to bottom, #c471f5, #fa71cd)`,
    minHeight: '100vh',
    padding: isMobile ? '16px' : '32px',
    color: '#fff',
  };

  const iconCards = [
    { label: 'Our Story', icon: <FavoriteIcon fontSize="large" /> },
    { label: 'Events', icon: <EventIcon fontSize="large" /> },
    { label: 'Gallery', icon: <PhotoIcon fontSize="large" /> },
    { label: 'Travel', icon: <TravelExploreIcon fontSize="large" /> },
    { label: 'FAQ', icon: <HelpIcon fontSize="large" /> },
    { label: 'Registry', icon: <RedeemIcon fontSize="large" /> },
  ];

  return (
    <Box style={backgroundStyle}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography
          variant={isMobile ? 'h6' : 'h4'}
          fontWeight="bold"
        >
          Big Day
        </Typography>
        <Avatar src="https://via.placeholder.com/40" />
      </Box>
      <Typography variant="subtitle1" gutterBottom>
        F&A
      </Typography>

      {/* Welcome Card */}
      <Card sx={{ my: 2, p: 2, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" color="primary">
            Welcome
          </Typography>
          <Typography variant="body2" gutterBottom>
            We invite you to join us on
          </Typography>
          <Typography variant="h6" fontWeight="bold" color="text.primary">
            November 7, 2025
          </Typography>
          <Typography variant="body2">
            at All season  for our wedding!
          </Typography>
        </CardContent>
      </Card>

      {/* Info Cards */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Information
      </Typography>

      <Grid container spacing={2}>
        {iconCards.map((item, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <Card sx={{ py: 2, height: 100 }}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
                height="100%"
              >
                {item.icon}
                <Typography variant="body2">{item.label}</Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Buttons */}
      <Box
        mt={4}
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        gap={2}
      >
        {visibleComponent !== 'walima' && (
          <Button variant="contained" color="primary" onClick={handleShowWalima}>
            Show Walima List
          </Button>
        )}
        {visibleComponent !== 'nikah' && (
          <Button variant="contained" color="secondary" onClick={handleShowNikah}>
            Show Nikah List
          </Button>
        )}
      </Box>

      {/* Conditional Components */}
      <Box mt={3}>
        {visibleComponent === 'walima' && <WalimaTable />}
        {visibleComponent === 'nikah' && <Nikah />}
      </Box>
    </Box>
  );
};

export default Home;
