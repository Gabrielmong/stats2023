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
    label: 'PC',
    data: [
      {
        date: new Date('2023-01-01'),
        hours: 253,
      },
      {
        date: new Date('2023-02-01'),
        hours: 503,
      },
      {
        date: new Date('2023-03-01'),
        hours: 809,
      },
      {
        date: new Date('2023-04-01'),
        hours: 1095,
      },
      {
        date: new Date('2023-05-01'),
        hours: 1351,
      },
      {
        date: new Date('2023-06-01'),
        hours: 1601,
      },
      {
        date: new Date('2023-07-01'),
        hours: 1871,
      },
      {
        date: new Date('2023-08-01'),
        hours: 2131,
      },
      {
        date: new Date('2023-09-01'),
        hours: 2435,
      },
      {
        date: new Date('2023-10-01'),
        hours: 2731,
      },
      {
        date: new Date('2023-11-01'),
        hours: 3015,
      },
      {
        date: new Date('2023-12-01'),
        hours: 3254,
      },
    ],
  },
];

const notAdditiveData: Series[] = [
  {
    label: 'PC',
    data: [
      {
        date: new Date('2023-01-01'),
        hours: 253,
      },
      {
        date: new Date('2023-02-01'),
        hours: 503 - 253,
      },
      {
        date: new Date('2023-03-01'),
        hours: 809 - 503,
      },
      {
        date: new Date('2023-04-01'),
        hours: 1095 - 809,
      },
      {
        date: new Date('2023-05-01'),
        hours: 1351 - 1095,
      },
      {
        date: new Date('2023-06-01'),
        hours: 1601 - 1351,
      },
      {
        date: new Date('2023-07-01'),
        hours: 1871 - 1601,
      },
      {
        date: new Date('2023-08-01'),
        hours: 2131 - 1871,
      },
      {
        date: new Date('2023-09-01'),
        hours: 2435 - 2131,
      },
      {
        date: new Date('2023-10-01'),
        hours: 2731 - 2435,
      },
      {
        date: new Date('2023-11-01'),
        hours: 3015 - 2731,
      },
      {
        date: new Date('2023-12-01'),
        hours: 3254 - 3015,
      },
    ],
  },
];

export const Slide3 = () => {
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
      },
    ],
    [],
  );

  const handleAdditive = () => {
    setAdditive((prev) => !prev);
  };

  return (
    <>
      <Typography variant="h3">{content[2].title}</Typography>

      <Typography variant="body1">{content[2].description}</Typography>

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
