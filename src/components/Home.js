import React, { useState } from 'react';
import WalimaTable from './Walima/WalimaList';
import Nikah from './Walima/Nikah';
import { Button } from '@mui/material';
import nikahImage from '../nikah.jpg'; // adjust path if needed

const Home = () => {
  const [visibleComponent, setVisibleComponent] = useState(null);

  const handleShowWalima = () => {
    setVisibleComponent('walima');
  };

  const handleShowNikah = () => {
    setVisibleComponent('nikah');
  };
  const backgroundStyle = {
    backgroundImage: `url(${nikahImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '20px'
  };

  return (
    <div style={backgroundStyle}>
      {visibleComponent !== 'walima' && (
        <Button variant="contained" color="primary" onClick={handleShowWalima}>
          Show Walima List
        </Button>
      )}
      {visibleComponent !== 'nikah' && (
        <Button
          variant="contained"
          color="secondary"
          onClick={handleShowNikah}
          style={{ marginLeft: '10px' }}
        >
          Show Nikah List
        </Button>
      )}

      {visibleComponent === 'walima' && <WalimaTable />}
      {visibleComponent === 'nikah' && <Nikah />}
    </div>
  );
};

export default Home;
