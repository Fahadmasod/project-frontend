import React, { useState } from 'react';
import WalimaTable from './Walima/WalimaList';
import Nikah from './Walima/Nikah';
import {
  Button
} from '@mui/material';

const Home = () => {
  const [visibleComponent, setVisibleComponent] = useState(null);

  const handleShowWalima = () => {
    setVisibleComponent('walima');
  };

  const handleShowNikah = () => {
    setVisibleComponent('nikah');
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleShowWalima}>
        Show Walima List
      </Button>
      <Button variant="contained" color="secondary" onClick={handleShowNikah} style={{ marginLeft: '10px' }}>
        Show Nikah List
      </Button>

      {visibleComponent === 'walima' && <WalimaTable />}
      {visibleComponent === 'nikah' && <Nikah />}
    </div>
  );
};

export default Home;
