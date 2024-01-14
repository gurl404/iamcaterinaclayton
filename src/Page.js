// Page.js
import React from 'react';
import { AppBar, Container, Grid, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBarLink = ({ to, text }) => (
  <Link to={to} style={{ margin: '0 10px', textDecoration: 'none', color: 'white' }}>
    {text}
  </Link>
);

const Page = ({description, children }) => {
  return (
    <div style={{ background: '#f5f5f5', minHeight: '100vh', color: '#ABB0B8' }}>
      <AppBar position="static" style={{ background: 'linear-gradient(to right, #8e2de2, #4a00e0)' }}>
        <Container>
          <Toolbar>
            <Typography variant="h5" style={{ flexGrow: 1, fontWeight: 'bold', textAlign: 'left', color: 'white' }}>
              I am Caterina Clayton
            </Typography>
            <NavBarLink to="/" text="Home" />
            <NavBarLink to="/modeling" text="Modeling" />
            {/* <NavBarLink to="/singing" text="Singing" /> */}
            <NavBarLink to="/acting" text="Acting" />
          </Toolbar>
        </Container>
      </AppBar>

      <Container style={{ padding: '20px' }}>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Container style={{ background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
              <Typography variant="body1" style={{ textAlign: 'center', color: '#555' }}>
                {description}
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={12}>
            {children} {/* Additional content for each page */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Page;
