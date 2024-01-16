// ModelingPage.js
import React from 'react';
import Page from './Page';
import ImageCarousel from './ImageCarousel';

const ModelingPage = ({description}) => {
  const modelingPhotos = [
    {url: 'PortraitKM.jpg', credit: 'Photo by Kay Marie, Owner of Perfective Photography' },
    {url: 'BCLightSaber.jpg', credit: 'Photo by Brad Campbell Photography' },
    {url: 'Guitar.jpg', credit: 'Photo by Brad Prime with AlwaysLateTV' },
    {url: 'Vampire-RealityReimaginedDavidByrd.jpg', credit: 'Photo by David Byrd, Owner of Legend by David Byrd'},
    {url: 'AndraGrant.jpg', credit: 'Photo by Andra L. Grant'},
    {url: 'KimAckermanatVoguePortraitStudio.jpg', credit: 'Photo by Kim Ackerman at Vogue Portrait Studio'},
    {url: 'HalMasoverPhotography.jpg', credit: 'Photo by Hal Masover Photography'},
    {url: 'exclusivCover.jpg', credit: 'Photo by Hal Masover Photography'}
  ];

  const descriptionText =
  <><div>
  <p style={{color:'#581de6', fontFamily: 'Verdana', fontSize: '18px'}}>Welcome to my online space, where creativity knows no bounds! As a self-managed artist,
    I take pride in steering my own artistic journey, ensuring every project reflects my unique vision and passion.
    With international publications under my belt, I bring a versatile look and can transform based on need and vision.</p>

  <p  style={{color:'#581de6', fontFamily: 'Verdana', fontSize: '18px'}}>Open to collaboration, I am excited about the prospect of turning compelling creative concepts into reality.
    Whether you're offering Trade for Print (TFP) opportunities or seeking paid bookings, I'm ready to bring my skills to the table.
    Let's embark on a visual journey together! Reach out to book a collaboration that promises to be nothing short of extraordinary.</p>
</div>
</> 

  return (
    <Page > 
      description={descriptionText} 
      <ImageCarousel images={modelingPhotos} />
    </Page>
  );
};

export default ModelingPage;