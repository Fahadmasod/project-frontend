import React from 'react';
import { Grid, Card, Typography, Box,useTheme  } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EventIcon from '@mui/icons-material/Event';
import PhotoIcon from '@mui/icons-material/Photo';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import HelpIcon from '@mui/icons-material/Help';
import RedeemIcon from '@mui/icons-material/Redeem';

const iconCards = [
  { label: 'invitation card', icon: <FavoriteIcon fontSize="large" />, key: 'invitation' },
  { label: 'Events', icon: <EventIcon fontSize="large" /> },
  { label: 'Gallery', icon: <PhotoIcon fontSize="large" /> },
  { label: 'Travel', icon: <TravelExploreIcon fontSize="large" /> },
  { label: 'FAQ', icon: <HelpIcon fontSize="large" /> },
  { label: 'Registry', icon: <RedeemIcon fontSize="large" /> },
];

const InfoGrid = ({ onShowInvitationCard }) => (
    
 <>
  <Typography variant="h6" fontWeight="bold" gutterBottom>
    Information
  </Typography>
  <Grid container spacing={2}>
    {iconCards.map((item, index) => (
      <Grid item xs={6} sm={4} md={2} key={index}>
        <Card
          sx={{
            py: 2,
            height: 120, // Only one height definition
            display: 'flex',
              width: 100, // Only one height definition
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: item.key === 'invitation' ? 'pointer' : 'default',
            borderRadius: 2,
            transition: 'transform 0.2s, box-shadow 0.2s',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: 6,
            },
          }}
          onClick={item.key === 'invitation' ? onShowInvitationCard : undefined}
        >
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
</>

);

export default InfoGrid;
