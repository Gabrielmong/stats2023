import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { content } from '../assets/content';
import { motion } from 'framer-motion';

export const Slide10 = () => {
  const staggerDelay = 0.2;
  return (
    <>
      <Typography variant="h3">{content[9].title}</Typography>

      <Typography variant="body1">{content[9].description}</Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '100%',
        }}
      >
        <List>
          {content[9].bullets?.map((bullet, index) => (
            <motion.div
              key={bullet.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * staggerDelay }}
            >
              <ListItem key={bullet.title}>
                <ListItemIcon>{bullet.icon ? bullet.icon : <></>}</ListItemIcon>

                <ListItemText
                  primary={bullet.title}
                  secondary={bullet.counter}
                />
              </ListItem>
            </motion.div>
          ))}
        </List>
      </Box>
    </>
  );
};
