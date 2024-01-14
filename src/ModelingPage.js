// ModelingPage.js
import React from 'react';
import Page from './Page';
import ImageCarousel from './ImageCarousel';

const ModelingPage = ({description}) => {
  const modelingPhotos = [
    { url: 'PortraitKM.jpg', credit: 'Kay Marie at Perfective Photography' },
    { url: 'BCLightSaber.jpg', credit: 'Brad Campbell at Brad Campbell Photography' },
    { url: 'Guitar.jpg', credit: 'Brad Prime with AlwaysLateTV' },
    // Add more photos with credits as needed
  ];

  const descriptionText = `
    Welcome to my online space, where creativity knows no bounds! As a self-managed artist, 
    I take pride in steering my own artistic journey, ensuring every project reflects my unique vision and passion.
    With international publications under my belt, I bring a versatile look and can transform based on need and vision.

    Open to collaboration, I am excited about the prospect of turning compelling creative concepts into reality. 
    Whether you're offering Trade for Print (TFP) opportunities or seeking paid bookings, I'm ready to bring my skills to the table. 
    Let's embark on a visual journey together, creating captivating content that transcends borders and resonates on a global scale. 
    Reach out to book a collaboration that promises to be nothing short of extraordinary!
  `;
  return (
    <Page description={descriptionText}>
      <ImageCarousel images={modelingPhotos} />
    </Page>
  );
};

export default ModelingPage;
