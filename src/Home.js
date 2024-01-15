import React from 'react';
import Page from './Page';
import { Box, Card, CardMedia, Typography } from '@mui/material';

const descriptionText = (
  <>
    <p>I'm Caterina Clayton - a creative soul who sings, models, and acts! </p>
    <p>Follow me on <a className="description-link" href="https://www.facebook.com/iamthecaterinaclayton" target="_blank" rel="noopener noreferrer">Facebook</a> for updates and more.</p> 
    <p>Catch my interview from <a className="description-link" href="https://boldjourney.com/news/meet-caterina-clayton/" target="_blank" rel="noopener noreferrer">Bold Journey</a>.</p>
  </>
);

const Home = ({ description }) => {
  return (
    <Page description={descriptionText}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row', 
          alignItems: 'center',
          mt: 4,
          width: '70%',
          margin: 'auto',
        }}
      >
        <Box
          sx={{
            background: 'linear-gradient(to right, #8e2de2, #4a00e0)' ,
            borderRadius: '8px',
            marginRight: '30px',
            padding: '40px',
            width: '40%', // Adjust as needed
          }}
        >
          <Typography variant="caption" sx={{ color: '#fff', fontSize:'16px' }}>
            Exciting news! I'll be hosting at the 2024 AlwaysLateTV Movie Awards. Join me there for the improv workshop I'm hosting for FREE on Saturday, March 23 from 3-5 pm CST!
          </Typography>
        </Box>
        <Card
          sx={{
            width: '100%',
            maxWidth: '500px', 
            position: 'relative', 
            overflow: 'hidden',
            borderRadius: '8px',
          }}
        >
          <CardMedia
            component="img"
            height="auto" 
            width="100%" 
            image="AdFilmFestival2024.jpg" 
            alt="Film Festival Ad"
          />
        </Card>
      </Box>
    </Page>
  );
};

export default Home;
