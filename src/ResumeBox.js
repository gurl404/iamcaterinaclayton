import React from 'react';
import { Box, Typography } from '@mui/material';

const ResumeBox = ({
  filmExperience,
  theaterExperience,
  education,
  specialSkills,
  printPublishing,
}) => (
  <Box
    sx={{
      background: '#f0f0f0',
      padding: '15px', // Reduced padding
      borderRadius: '8px',
      color: '#333',
      overflowY: 'auto',
      maxHeight: '60vh', // Adjusted maxHeight
    }}
  >
    <Typography variant="h4" fontWeight="bold" mb={2}>
      Acting Experience
    </Typography>
    <Typography variant="h6" mb={1}>
      Film Experience:
    </Typography>
    <ul>
      {filmExperience.map((exp, index) => (
        <li key={index}>{exp}</li>
      ))}
    </ul>

    <Typography variant="h6" mt={2} mb={1}>
      Theater Experience:
    </Typography>
    <ul>
      {theaterExperience.map((exp, index) => (
        <li key={index}>{exp}</li>
      ))}
    </ul>

    <Typography variant="h4" fontWeight="bold" mt={3} mb={2}>
      Education
    </Typography>
    <ul>
      {education.map((edu, index) => (
        <li key={index}>{edu}</li>
      ))}
    </ul>

    <Typography variant="h4" fontWeight="bold" mt={3} mb={2}>
      Special Skills
    </Typography>
    <ul>
      {specialSkills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>

    <Typography variant="h4" fontWeight="bold" mt={3} mb={2}>
      Print/Publishing
    </Typography>
    <ul>
      {printPublishing.map((pub, index) => (
        <li key={index}>{pub}</li>
      ))}
    </ul>
  </Box>
);

export default ResumeBox;
