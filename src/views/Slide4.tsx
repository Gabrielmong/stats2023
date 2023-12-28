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
    label: 'Gym',
    data: [
      {
        date: new Date('2023-01-01'),
        hours: 13,
      },
      {
        date: new Date('2023-02-01'),
        hours: 31,
      },
      {
        date: new Date('2023-03-01'),
        hours: 53,
      },
      {
        date: new Date('2023-04-01'),
        hours: 63,
      },
      {
        date: new Date('2023-05-01'),
        hours: 78,
      },
      {
        date: new Date('2023-06-01'),
        hours: 93,
      },
      {
        date: new Date('2023-07-01'),
        hours: 108,
      },
      {
        date: new Date('2023-08-01'),
        hours: 122,
      },
      {
        date: new Date('2023-09-01'),
        hours: 143,
      },
      {
        date: new Date('2023-10-01'),
        hours: 165,
      },
      {
        date: new Date('2023-11-01'),
        hours: 184,
      },
      {
        date: new Date('2023-12-01'),
        hours: 198,
      },
    ],
  },
];

const notAdditiveData: Series[] = [
  {
    label: 'Gym',
    data: [
      {
        date: new Date('2023-01-01'),
        hours: 13,
      },
      {
        date: new Date('2023-02-01'),
        hours: 31 - 13,
      },
      {
        date: new Date('2023-03-01'),
        hours: 53 - 31,
      },
      {
        date: new Date('2023-04-01'),
        hours: 63 - 53,
      },
      {
        date: new Date('2023-05-01'),
        hours: 78 - 63,
      },
      {
        date: new Date('2023-06-01'),
        hours: 93 - 78,
      },
      {
        date: new Date('2023-07-01'),
        hours: 108 - 93,
      },
      {
        date: new Date('2023-08-01'),
        hours: 122 - 108,
      },
      {
        date: new Date('2023-09-01'),
        hours: 143 - 122,
      },
      {
        date: new Date('2023-10-01'),
        hours: 165 - 143,
      },
      {
        date: new Date('2023-11-01'),
        hours: 184 - 165,
      },
      {
        date: new Date('2023-12-01'),
        hours: 198 - 184,
      },
    ],
  },
];

export const Slide4 = () => {
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
        min: 5,
      },
    ],
    [],
  );

  const handleAdditive = () => {
    setAdditive((prev) => !prev);
  };

  return (
    <>
      <Typography variant="h3">{content[3].title}</Typography>

      <Typography variant="body1">{content[3].description}</Typography>

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
