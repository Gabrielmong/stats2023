import { Typography } from '@mui/material';
import { content } from '../assets/content';

export const Slide1 = () => {
  return (
    <>
      <Typography variant="h3">{content[0].title}</Typography>

      <Typography variant="h5">{content[0].description}</Typography>
    </>
  );
};
