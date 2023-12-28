import { Typography, List, ListItem, ListItemIcon, Box } from '@mui/material';
import { content } from '../assets/content';
import { motion } from 'framer-motion';

export const Slide2 = () => {
  const staggerDelay = 0.2;
  return (
    <>
      <Typography variant="h3">{content[1].title}</Typography>

      <Typography variant="body1">{content[1].description}</Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '100%',
          paddingTop: '2rem',
        }}
      >
        <List>
          {content[1].bullets?.map((bullet, index) => (
            <motion.div
              key={bullet.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * staggerDelay }}
            >
              <ListItem key={bullet.title}>
                <ListItemIcon>{bullet.icon ? bullet.icon : <></>}</ListItemIcon>

                <Typography>{bullet.title}</Typography>
              </ListItem>
            </motion.div>
          ))}
        </List>
      </Box>
    </>
  );
};
