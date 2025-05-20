import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import WalimaList from '../components/Walima/WalimaList';
import NIkhah from '../components/Walima/Nikah';

const allowedPasswords = [
  'fiza321', 'fahad321', 'anas321', 'noureen321',
  'sarim321', 'subhana321', 'zaki321', 'shibli321'
];

const SESSION_KEY = 'walima_session';
const EXPIRY_TIME = 60 * 60 * 1000; // 1 hour in milliseconds

const WalimaProtected = ({ title }) => {
  const [password, setPassword] = useState('');
  const [authorized, setAuthorized] = useState(false);
  const [error, setError] = useState('');

  // Check session on mount
  useEffect(() => {
    const session = JSON.parse(localStorage.getItem(SESSION_KEY));
    if (session) {
      const now = new Date().getTime();
      if (now - session.timestamp < EXPIRY_TIME) {
        setAuthorized(true);
      } else {
        localStorage.removeItem(SESSION_KEY); // session expired
      }
    }
  }, []);

  const handleSubmit = () => {
    if (allowedPasswords.includes(password.trim().toLowerCase())) {
      const sessionData = {
        authorized: true,
        timestamp: new Date().getTime(),
      };
      localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
      setAuthorized(true);
    } else {
      setError('Incorrect password. Access denied.');
    }
  };

  if (authorized) {
    return title === 'nikah' ? <NIkhah /> : <WalimaList />;
  }

  return (
    <Box textAlign="center" mt={4}>
      <Typography variant="h6">Enter Password to View {title === 'nikah' ? 'Nikah' : 'Walima'} List</Typography>
      <TextField
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          if (error) setError('');
        }}
        label="Password"
        variant="outlined"
        sx={{ mt: 2 }}
      />
      <Box mt={2}>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
      {error && (
        <Typography color="error" mt={2}>{error}</Typography>
      )}
    </Box>
  );
};

export default WalimaProtected;
