import { Typography, Box } from '@mui/material';
import { content } from '../assets/content';
import gif from '/dancing-toothless.gif';

export const Slide11 = () => {
  return (
    <>
      <Typography variant="h3">{content[10].title}</Typography>

      <Typography variant="body1">{content[10].description}</Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '100%',
        }}
      >
        <img
          src={gif}
          alt="Dancing Toothless"
          style={{
            width: '100%',
            maxWidth: '300px',
            marginTop: '1rem',
            borderRadius: '1rem',
          }}
        />
      </Box>
    </>
  );
};
