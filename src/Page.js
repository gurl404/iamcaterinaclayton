// Page.js
import React from 'react';
import { AppBar, Container, Grid, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBarLink = ({ to, text }) => (
  <Link to={to} style={{ margin: '0 10px', textDecoration: 'none', color: 'white' }}>
    {text}
  </Link>
);

const styles = `
  .description-link {
    color: #ade2e6; 
    text-decoration: none;
    transition: color 0.3s; /* Smooth color transition */
  }

  .description-link:hover {
    color: white; 
  }

  .description-link.clicked {
    color: #b555ee;
  }
`;

const Page = ({ description, children }) => {
  React.useEffect(() => {
    const handleLinkClick = (event) => {
      if (event.target.classList.contains('description-link')) {
        event.target.classList.add('clicked');
      }
    };

    document.addEventListener('click', handleLinkClick);

    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  // Apply styles dynamically to the document head
  React.useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = styles;
    document.head.appendChild(styleElement);

    // Clean up the styles on component unmount
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div
      style={{
        background: `linear-gradient(rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)), url('background1.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        color: '#ABB0B8',
      }}
    >
      <AppBar position="static" style={{ background: 'linear-gradient(to right, #8e2de2, #4a00e0)' }}>
        <Container>
          <Toolbar>
            <Typography
              variant="h5"
              style={{
                flexGrow: 1,
                fontWeight: 'bold',
                textAlign: 'left',
                color: 'white',
                marginLeft: '-300px',
                fontFamily: 'Lucida Handwriting',
              }}
            >
              I am Caterina Clayton
            </Typography>
            <NavBarLink to="/" text="Home" />
            <NavBarLink to="/modeling" text="Modeling" />
            {/* <NavBarLink to="/singing" text="Singing" /> */}
            <NavBarLink to="/acting" text="Acting" />
          </Toolbar>
        </Container>
      </AppBar>

      <div style={{ paddingTop: '20px' }}> 
        <Container
          style={{
            padding: '20px',
            background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography variant="body1" style={{ textAlign: 'center', color: '#fff' }}>
            {description}
          </Typography>
        </Container>
      </div>

      <Container style={{ padding: '20px' }}>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            {children} 
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Page;