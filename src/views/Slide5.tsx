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
    label: 'caca',
    data: [
      {
        date: new Date('2023-01-01'),
        hours: 96,
      },
      {
        date: new Date('2023-02-01'),
        hours: 191,
      },
      {
        date: new Date('2023-03-01'),
        hours: 271,
      },
      {
        date: new Date('2023-04-01'),
        hours: 365,
      },
      {
        date: new Date('2023-05-01'),
        hours: 470,
      },
      {
        date: new Date('2023-06-01'),
        hours: 560,
      },
      {
        date: new Date('2023-07-01'),
        hours: 656,
      },
      {
        date: new Date('2023-08-01'),
        hours: 745,
      },
      {
        date: new Date('2023-09-01'),
        hours: 842,
      },
      {
        date: new Date('2023-10-01'),
        hours: 929,
      },
      {
        date: new Date('2023-11-01'),
        hours: 1025,
      },
      {
        date: new Date('2023-12-01'),
        hours: 1115,
      },
    ],
  },
];

const notAdditiveData: Series[] = [
  {
    label: 'caca',
    data: [
      {
        date: new Date('2023-01-01'),
        hours: 96,
      },
      {
        date: new Date('2023-02-01'),
        hours: 191 - 96,
      },
      {
        date: new Date('2023-03-01'),
        hours: 271 - 191,
      },
      {
        date: new Date('2023-04-01'),
        hours: 365 - 271,
      },
      {
        date: new Date('2023-05-01'),
        hours: 470 - 365,
      },
      {
        date: new Date('2023-06-01'),
        hours: 560 - 470,
      },
      {
        date: new Date('2023-07-01'),
        hours: 656 - 560,
      },
      {
        date: new Date('2023-08-01'),
        hours: 745 - 656,
      },
      {
        date: new Date('2023-09-01'),
        hours: 842 - 745,
      },
      {
        date: new Date('2023-10-01'),
        hours: 929 - 842,
      },
      {
        date: new Date('2023-11-01'),
        hours: 1025 - 929,
      },
      {
        date: new Date('2023-12-01'),
        hours: 1115 - 1025,
      },
    ],
  },
];

export const Slide5 = () => {
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
        min: 70,
      },
    ],
    [],
  );

  const handleAdditive = () => {
    setAdditive((prev) => !prev);
  };

  return (
    <>
      <Typography variant="h3">{content[4].title}</Typography>

      <Typography variant="body1">{content[4].description}</Typography>

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
