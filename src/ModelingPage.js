// ModelingPage.js
import React from 'react';
import Page from './Page';
import ImageCarousel from './ImageCarousel';

const ModelingPage = ({description}) => {
  const modelingPhotos = [
    { url: 'PortraitKM.jpg', credit: 'Kay Marie at Perfective Photography' },
    { url: 'BCLightSaber.jpg', credit: 'Brad Campbell Photography' },
    { url: 'Guitar.jpg', credit: 'Brad Prime with AlwaysLateTV' },
    {url: 'Vampire-RealityReimaginedDavidByrd.jpg', credit: 'David Byrd at Reality Reimagined'},
    {url: 'AndraGrant.jpg', credit: 'Andra L. Grant'},
    {url: 'KimAckermanatVoguePortraitStudio.jpg', credit: 'Kim Ackerman at Vogue Portrait Studio'},
    {url: 'HalMasoverPhotography.jpg', credit: 'Hal Masover Photography.'},
    {url: 'exlusivCover.jpg', credit: 'Hal Masover Photography.'},



    // Add more photos with credits as needed
  ];

  const descriptionText =
  <><div>
  <p>Welcome to my online space, where creativity knows no bounds! As a self-managed artist,
    I take pride in steering my own artistic journey, ensuring every project reflects my unique vision and passion.
    With international publications under my belt, I bring a versatile look and can transform based on need and vision.</p>

  <p>Open to collaboration, I am excited about the prospect of turning compelling creative concepts into reality.
    Whether you're offering Trade for Print (TFP) opportunities or seeking paid bookings, I'm ready to bring my skills to the table.
    Let's embark on a visual journey together! Reach out to book a collaboration that promises to be nothing short of extraordinary.</p>
</div>
</> 

  return (
    <Page description={descriptionText}>
      <ImageCarousel images={modelingPhotos} />
    </Page>
  );
};

export default ModelingPage;
