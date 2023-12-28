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
    label: 'Night time',
    data: [
      {
        date: new Date('2023-01-01'),
        hours: 4,
      },
      {
        date: new Date('2023-02-01'),
        hours: 8,
      },
      {
        date: new Date('2023-03-01'),
        hours: 19,
      },
      {
        date: new Date('2023-04-01'),
        hours: 28,
      },
      {
        date: new Date('2023-05-01'),
        hours: 34,
      },
      {
        date: new Date('2023-06-01'),
        hours: 39,
      },
      {
        date: new Date('2023-07-01'),
        hours: 45,
      },
      {
        date: new Date('2023-08-01'),
        hours: 45,
      },
      {
        date: new Date('2023-09-01'),
        hours: 50,
      },
      {
        date: new Date('2023-10-01'),
        hours: 61,
      },
      {
        date: new Date('2023-11-01'),
        hours: 66,
      },
      {
        date: new Date('2023-12-01'),
        hours: 69,
      },
    ],
  },
];

const notAdditiveData: Series[] = [
  {
    label: 'Night time',
    data: [
      {
        date: new Date('2023-01-01'),
        hours: 4,
      },
      {
        date: new Date('2023-02-01'),
        hours: 8 - 4,
      },
      {
        date: new Date('2023-03-01'),
        hours: 19 - 8,
      },
      {
        date: new Date('2023-04-01'),
        hours: 28 - 19,
      },
      {
        date: new Date('2023-05-01'),
        hours: 34 - 28,
      },
      {
        date: new Date('2023-06-01'),
        hours: 39 - 34,
      },
      {
        date: new Date('2023-07-01'),
        hours: 45 - 39,
      },
      {
        date: new Date('2023-08-01'),
        hours: 45 - 45,
      },
      {
        date: new Date('2023-09-01'),
        hours: 50 - 45,
      },
      {
        date: new Date('2023-10-01'),
        hours: 61 - 50,
      },
      {
        date: new Date('2023-11-01'),
        hours: 66 - 61,
      },
      {
        date: new Date('2023-12-01'),
        hours: 69 - 66,
      },
    ],
  },
];

export const Slide7 = () => {
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
      <Typography variant="h3">{content[6].title}</Typography>

      <Typography variant="body1">{content[6].description}</Typography>

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
