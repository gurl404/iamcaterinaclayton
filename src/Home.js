import React from 'react';
import Page from './Page';
import ImageCarousel from './ImageCarousel';
import { Container } from '@mui/material';

const descriptionText = (
  <>
    <p style={{ color: '#581de6', fontFamily: 'Verdana', fontSize: '22px' }}>
      I'm Caterina Clayton - a creative soul who sings, models, and acts!
    </p>
    <Container sx={{ display: 'flex', justifyContent: 'space-evenly', mt: 2 }}>
    </Container>
  </>
);

const promoPhotos = [
  {
    url: 'AdFilmFestival2024.jpg',
    credit:
      "Exciting news! I'll be hosting at the 2024 AlwaysLateTV Movie Awards. Join me there for the improv workshop I'm hosting for FREE on Saturday, March 23 from 3-5 pm CST!",
  },
  {
    url: 'neonPoster.png',
    credit:
      "Exciting news! I'll be hosting at the 2024 AlwaysLateTV Movie Awards. Join me there for the improv workshop I'm hosting for FREE on Saturday, March 23 from 3-5 pm CST!",
  },
];

const Home = ({ description }) => {
  return (
    <Page description={descriptionText}>
      <ImageCarousel images={promoPhotos} />
    </Page>
  );
};

export default Home;