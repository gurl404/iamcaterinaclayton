import React from 'react';
import { AppBar, Container, Grid, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBarLink = ({ to, text, faviconUrl }) => (
  <Link to={to} className="description-link" style={{ margin: '0 15px', textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    {faviconUrl && <img src={faviconUrl} alt="Favicon" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />}
    <span>{text}</span>
  </Link>
);

const styles = `
  .description-link {
    color: #ade2e6;
    text-decoration: none;
    transition: color 0.3s; 
  }

  .description-link:hover {
    color: white;
  }

  .description-link.clicked {
    color: #b555ee;
  }

  .description-banner {
    padding: 20px;
    background: linear-gradient(to bottom, rgba(30, 30, 30, 0.5), rgba(230, 230, 230, 0.5)); 
    margin-top: -1px; /* Adjust this value as needed */
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

  React.useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = styles;
    document.head.appendChild(styleElement);

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
            <NavBarLink to="/acting" text="Acting" />
            <NavBarLink to="/singing" text="Singing" />

            {/* Add three additional links with favicons */}
            <NavBarLink to="https://www.imdb.com/name/nm10686309/" faviconUrl="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/171_Imdb_logo_logos-512.png"/>
            <NavBarLink to="https://boldjourney.com/news/meet-caterina-clayton/" faviconUrl="magazine-icon.png"/>
            <NavBarLink to="https://www.facebook.com/iamthecaterinaclayton" faviconUrl="fb-icon.png" />
          </Toolbar>
        </Container>
      </AppBar>

      <div className="description-banner">
        <Container>
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