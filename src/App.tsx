import { Box, Container, IconButton, LinearProgress } from '@mui/material';
import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { content } from './assets/content';
import { RenderSlide } from './views';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const App = () => {
  const [currentContent, setCurrentContent] = useState(0);

  const handleNext = () => {
    if (currentContent === Object.keys(content).length - 1) {
      return;
    }

    setCurrentContent((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentContent === 0) {
      return;
    }

    setCurrentContent((prev) => prev - 1);
  };

  return (
    <Container
      sx={{
        height: '100vh',
        paddingLeft: '0 !important',
        paddingRight: '0 !important',
        padding: 0,
        margin: 0,
      }}
      maxWidth={false}
    >
      <Box>
        <Box sx={{ width: '100%' }}>
          <LinearProgress
            variant="determinate"
            value={((currentContent + 1) / Object.keys(content).length) * 100}
          />
        </Box>
        <Box>
          <IconButton onClick={handleBack}>
            <ArrowBack />
          </IconButton>

          <IconButton onClick={handleNext}>
            <ArrowForward />
          </IconButton>
        </Box>
      </Box>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ height: '85%' }}
        >
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            <RenderSlide slide={currentContent} />
          </Container>
        </motion.div>
      </AnimatePresence>
    </Container>
  );
};

export default App;
