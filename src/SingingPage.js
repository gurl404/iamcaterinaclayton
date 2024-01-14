// SingingPage.js
import React from 'react';
import Page from './Page';

const SingingPage = ({description}) => {
  const descriptionText = `
  I do stuff
`;
  return (
    <Page imgSource="homeImage.jpg" altText="Home" description = {descriptionText}>
      {/* Add any additional content for the home page */}
    </Page>
  );
};


export default SingingPage;