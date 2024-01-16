import React from 'react';
import Page from './Page';
import ResumeBox from './ResumeBox';
import { Box, Tabs, Tab } from '@mui/material';

const ActingPage = ({ description }) => {
  const filmExperience = [
    "'Bonnie Conway, P.I.' (East Coast Movie Awards 2022 Best Supporting Actress): Played Vladka Nazarova and brought mischief and drama to this 80s-themed comedy",
    '"Local Ambition" - Seasons 8 and 9 (Winner of Season 8): Played "Cat" in this scripted reality show & modeling competition',
    '"Schmetterling": Embraced the role of Birdie, the misguided friend of Schmetterling',
  ];
  
  const theaterExperience = [
    'ComedySportz St. Louis (Since 2023): Bringing laughter and spontaneity to the stage with ComedySportz St. Louis',
    'Laffupalunga Comedians (Since 2023): Collaborating and performing with Laffupalunga Comedians in an abandoned mall',
    "'First World Santa' - Dangerous Theater Sanford: Embodied characters like Rudolph, Miley Lou, and Santa's Therapist in this edgy Christmas tale.",
    '"Titus Andronicus Holiday Special" - 2017 Orlando Fringe Festival: Took on the challenging role of Lavinia, contributing to the unique narrative of this puppet-foocused holiday special.',
    'Improv Workshop - Florida Collegiate Honors Council: Conducted team-building improv exercises, displaying leadership and fostering creativity.',
    'Jocular Jesters Improv Club - Seminole State College: Founded and led this club, taking on the role of President and creating a space for comedic exploration.',
    '"13 Objects" - New College of Florida: Rotated between the roles of Guard and Prisoner, contributing to the success of this intriguing production.',
    '"Vagina Monologues" - Mildred Sanier Pavilion: Portrayed characters in monologues like "My Short Skirt" and "The Woman Who Loved to Make Vaginas Happy"',
    'Student One Act Play: "Anechoic" - New College of Florida: Took on the role of Voice 1, adding depth to this student-directed play.',
    'Comedy Friends Improv Troupe - New College of Florida: Acted in various comedic sketches'
  ];
  
  const education = [
    'ComedySportz St. Louis - Improv Workshops Levels 1 and 2 (2023): Brushed up my improv skills',
    'Self-Taping Audition Workshop with Michael James Reed (2018): Sharpened my audition techniques under the guidance of a seasoned professional.',
    'New College of Florida - Sarasota, FL (2014-2015): Studied under Andrei Malaev-Babel, delving into Acting I and Acting II.'
  ];
  

  const specialSkills = [
    'Improvisational Theater (Dramatic and Comedic)',
    'Modeling',
    'Singing (Alto - Soprano)',
    'Pole Dancing (Intermediate)',
    'Kickboxing',
    'Public Speaking',
  ];

  const printPublishing = [
    'Listed as an Original Cast Member in "Machinations: A Play in One Act" by Reid Conrad (2012).',
  ];

  const descriptionText = (
    <>
    <p style ={{color:'#581de6', fontFamily: 'Verdana', fontSize: '18px'}}> I am currently booking in St. Louis, but I am willing to travel.
      I am COVID vaccinated, have a license, and an up-to-date passport.</p>

      <a className="description-link" href="https://www.imdb.com/name/nm10686309/" target="_blank" rel="noopener noreferrer">
        here
      </a>
      .
    </>
  );
  
  const actingReelVideoUrl = "https://player.vimeo.com/video/902664698?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
  const [currentTab, setCurrentTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Page description={descriptionText}>
      <Box sx={{ display: 'flex' }}>
        {/* Left Section (Tabs) */}
        <Box sx={{ width: '10%', paddingRight: '20px' }}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={currentTab}
            onChange={handleTabChange}
            textColor="#581de6"
            indicatorColor="#581de6"
            sx={{color:"#581de6",fontFamily:'Verdana'}} 
          >
            <Tab fontFamily='Verdana' label="Resume" />
            <Tab fontFamily='Verdana' label="Acting Reel" />
          </Tabs>
        </Box>

        {/* Left Section (Content) */}
        <Box sx={{ width: '70%' }}>  
          {/* Resume Section */}
          {currentTab === 0 && (
            <ResumeBox
              filmExperience={filmExperience}
              theaterExperience={theaterExperience}
              education={education}
              specialSkills={specialSkills}
              printPublishing={printPublishing}
            />
          )}
          {/* Acting Reel Section */}
          {currentTab === 1 && (
            <Box mt={3} textAlign="center">
              <Box maxWidth="800px" margin="auto">
                <iframe
                  title="Acting"
                  width="100%"
                  height="400"
                  src={actingReelVideoUrl}
                  allowFullScreen
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </Box>
            </Box>
          )}          
        </Box>

        {/* Image Section */}
        <Box sx={{ width: '20%', marginLeft: '20px', height: '600px' }}>
          <img
            src="AwardShowKG.jpg"
            alt="Girl in gown"
            style={{
              width: '180%',
              height: '100%',
              borderRadius: '12px',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            }}
          />
        </Box>
      </Box>
    </Page>
  );
};

export default ActingPage;