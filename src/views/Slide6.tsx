import { Typography, Box, IconButton } from '@mui/material';
import { content } from '../assets/content';
import { useMemo, useState } from 'react';
import { AxisOptions, Chart } from 'react-charts';
import { Equalizer, SignalCellularAlt } from '@mui/icons-material';

type DataType = {
  date: Date;
  hours: number;
};

type Series = {
  label: string;
  data: DataType[];
};

const data: Series[] = [
  {
    label: 'Playtime',
    data: [
      {
        date: new Date('2023-01-01'),
        hours: 88,
      },
      {
        date: new Date('2023-02-01'),
        hours: 165,
      },
      {
        date: new Date('2023-03-01'),
        hours: 236,
      },
      {
        date: new Date('2023-04-01'),
        hours: 267,
      },
      {
        date: new Date('2023-05-01'),
        hours: 305,
      },
      {
        date: new Date('2023-06-01'),
        hours: 323,
      },
      {
        date: new Date('2023-07-01'),
        hours: 386,
      },
      {
        date: new Date('2023-08-01'),
        hours: 484,
      },
      {
        date: new Date('2023-09-01'),
        hours: 523,
      },
      {
        date: new Date('2023-10-01'),
        hours: 548,
      },
      {
        date: new Date('2023-11-01'),
        hours: 589,
      },
      {
        date: new Date('2023-12-01'),
        hours: 602,
      },
    ],
  },
];

const notAdditiveData: Series[] = [
  {
    label: 'Playtime',
    data: [
      {
        date: new Date('2023-01-01'),
        hours: 88,
      },
      {
        date: new Date('2023-02-01'),
        hours: 165 - 88,
      },
      {
        date: new Date('2023-03-01'),
        hours: 236 - 165,
      },
      {
        date: new Date('2023-04-01'),
        hours: 267 - 236,
      },
      {
        date: new Date('2023-05-01'),
        hours: 305 - 267,
      },
      {
        date: new Date('2023-06-01'),
        hours: 323 - 305,
      },
      {
        date: new Date('2023-07-01'),
        hours: 386 - 323,
      },
      {
        date: new Date('2023-08-01'),
        hours: 484 - 386,
      },
      {
        date: new Date('2023-09-01'),
        hours: 523 - 484,
      },
      {
        date: new Date('2023-10-01'),
        hours: 548 - 523,
      },
      {
        date: new Date('2023-11-01'),
        hours: 589 - 548,
      },
      {
        date: new Date('2023-12-01'),
        hours: 608 - 589,
      },
    ],
  },
];

export const Slide6 = () => {
  const [additive, setAdditive] = useState(true);

  const primaryAxis = useMemo(
    (): AxisOptions<DataType> => ({
      getValue: (datum) => datum.date,
    }),
    [],
  );

  const secondaryAxes = useMemo(
    (): AxisOptions<DataType>[] => [
      {
        getValue: (datum) => datum.hours,
        min: 15,
      },
    ],
    [],
  );

  const handleAdditive = () => {
    setAdditive((prev) => !prev);
  };

  return (
    <>
      <Typography variant="h3">{content[5].title}</Typography>

      <Typography variant="body1">{content[5].description}</Typography>

      <IconButton onClick={handleAdditive}>
        {additive ? <SignalCellularAlt /> : <Equalizer />}
      </IconButton>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '100%',
          height: '50%',
          paddingTop: '2rem',
        }}
      >
        <Chart
          options={{
            data: additive ? data : notAdditiveData,
            primaryAxis,
            secondaryAxes,
            dark: true,
          }}
        />
      </Box>
    </>
  );
};
