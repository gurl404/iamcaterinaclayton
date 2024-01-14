// ImageCarousel.js
import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

function ImageCarousel({ images }) {
  return (
    <Box sx={{ maxWidth: 800, flexGrow: 1, margin: 'auto', mt: 5 }}>
      <Carousel>
        {images.map((image, i) => (
          <Paper key={i} elevation={10}>
            <Box sx={{ position: 'relative' }}>
              <Box
                component="img"
                sx={{
                  width: '100%',
                  height: '500px',
                  objectFit: 'contain',
                }}
                src={image.url}
                alt={`Slide ${i}`}
              />
              <Typography
                variant="caption"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  background: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  padding: '5px',
                  textAlign: 'center',
                }}
              >
                Photo by {image.credit}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Carousel>
    </Box>
  );
}

export default ImageCarousel;
