import React, { useEffect } from 'react';
import { Dialog, Box, Typography } from '@mui/material';

const InvitationDialog = ({ open, onClose, imageSrc }) => {
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      if (e.key === 'PrintScreen' || (e.ctrlKey && e.key.toLowerCase() === 'p')) {
        alert('Screenshot or Print is disabled!');
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      PaperProps={{ style: { backgroundColor: 'black' } }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        onClick={onClose}
        sx={{ position: 'relative' }}
      >
        <img src={imageSrc} alt="Invitation" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        <Typography variant="caption" color="white" sx={{ position: 'absolute', bottom: 16, right: 16, opacity: 0.5 }}>
          Tap anywhere to close
        </Typography>
      </Box>
    </Dialog>
  );
};

export default InvitationDialog;
