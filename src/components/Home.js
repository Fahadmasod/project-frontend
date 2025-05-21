import React, { useState } from 'react';
import { Box, Button, useTheme, useMediaQuery } from '@mui/material';
import HeaderBar from '../components/HeaderBar';
import WelcomeCard from '../components/WelcomeCard';
import InfoGrid from './InfoGrid.jsx';
import InvitationDialog from '../components/InvitationDialog';
import WalimaProtected from './WalimaProtected';
import Nikah from './Walima/Nikah';
import nikahImage from '../nikah.jpg';

const Home = () => {
  const [visibleComponent, setVisibleComponent] = useState(null);
  const [showImage, setShowImage] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const backgroundStyle = {
    backgroundImage: `linear-gradient(to bottom, #c471f5, #fa71cd)`,
    minHeight: '100vh',
    padding: isMobile ? '16px' : '32px',
    color: '#fff',
  };

  return (
    <Box style={backgroundStyle}>
      <HeaderBar />
      <WelcomeCard />
      <InfoGrid onShowInvitationCard={() => setShowImage(true)} />

      <Box mt={4} display="flex" justifyContent="center" gap={2}>
        {visibleComponent !== 'walima' && (
          <Button variant="contained" color="primary" onClick={() => setVisibleComponent('walima')}>
            Show Walima List
          </Button>
        )}
        {visibleComponent !== 'nikah' && (
          <Button variant="contained" color="secondary" onClick={() => setVisibleComponent('nikah')}>
            Show Nikah List
          </Button>
        )}
      </Box>

      <Box mt={3}>
        {visibleComponent === 'walima' && <WalimaProtected title={'walima'} />}
        {visibleComponent === 'nikah' && <WalimaProtected title={'nikah'} />}
      </Box>

      <InvitationDialog open={showImage} onClose={() => setShowImage(false)} imageSrc={nikahImage} />
    </Box>
  );
};

export default Home;
