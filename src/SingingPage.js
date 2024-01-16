// SingingPage.js
import React from 'react';
import Page from './Page';

const SingingPage = ({description}) => {
  const descriptionText = 
  <>
  <p style={{color:'#581de6', fontFamily: 'Verdana', fontSize: '18px'}}> I do stuff </p> 
  </>
;
  return (
    <Page imgSource="homeImage.jpg" altText="Home" description = {descriptionText}>
    </Page>
  );
};


export default SingingPage;