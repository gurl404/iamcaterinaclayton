import React from 'react';
import Page from './Page';
import { Box, CardMedia } from '@mui/material';

const descriptionText = (
  <>
    Follow me on Facebook for updates and more here: 
    <a href="https://www.facebook.com/iamthecaterinaclayton" target="_blank" rel="noopener noreferrer">
      iamcaterinaclayton
    </a>
    .
  </>
);

const Home = ({ description }) => {
  return (
    <Page description={descriptionText}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 4,
          width: '70%',
          margin: 'auto',
        }}
      >
        <CardMedia
          component="img"
          height="50%"
          width="100%"
          image="AdFilmFestival2024.jpg" // Replace with the actual image URL
          alt="Film Festival Ad"
          sx={{
            borderRadius: '8px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            maxWidth: '100%',
          }}
        />
      </Box>
    </Page>
  );
};

export default Home;
