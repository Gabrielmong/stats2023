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
    label: 'Cafe',
    data: [
      {
        date: new Date('2023-01-01'),
        hours: 65,
      },
      {
        date: new Date('2023-02-01'),
        hours: 122,
      },
      {
        date: new Date('2023-03-01'),
        hours: 191,
      },
      {
        date: new Date('2023-04-01'),
        hours: 270,
      },
      {
        date: new Date('2023-05-01'),
        hours: 335,
      },
      {
        date: new Date('2023-06-01'),
        hours: 416,
      },
      {
        date: new Date('2023-07-01'),
        hours: 503,
      },
      {
        date: new Date('2023-08-01'),
        hours: 566,
      },
      {
        date: new Date('2023-09-01'),
        hours: 650,
      },
      {
        date: new Date('2023-10-01'),
        hours: 707,
      },
      {
        date: new Date('2023-11-01'),
        hours: 782,
      },
      {
        date: new Date('2023-12-01'),
        hours: 869,
      },
    ],
  },
];

const notAdditiveData: Series[] = [
  {
    label: 'Cafe',
    data: [
      {
        date: new Date('2023-01-01'),
        hours: 65,
      },
      {
        date: new Date('2023-02-01'),
        hours: 122 - 65,
      },
      {
        date: new Date('2023-03-01'),
        hours: 191 - 122,
      },
      {
        date: new Date('2023-04-01'),
        hours: 270 - 191,
      },
      {
        date: new Date('2023-05-01'),
        hours: 335 - 270,
      },
      {
        date: new Date('2023-06-01'),
        hours: 416 - 335,
      },
      {
        date: new Date('2023-07-01'),
        hours: 503 - 416,
      },
      {
        date: new Date('2023-08-01'),
        hours: 566 - 503,
      },
      {
        date: new Date('2023-09-01'),
        hours: 650 - 566,
      },
      {
        date: new Date('2023-10-01'),
        hours: 707 - 650,
      },
      {
        date: new Date('2023-11-01'),
        hours: 782 - 707,
      },
      {
        date: new Date('2023-12-01'),
        hours: 869 - 782,
      },
    ],
  },
];

export const Slide8 = () => {
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
        min: 50,
      },
    ],
    [],
  );

  const handleAdditive = () => {
    setAdditive((prev) => !prev);
  };

  return (
    <>
      <Typography variant="h3">{content[7].title}</Typography>

      <Typography variant="body1">{content[7].description}</Typography>

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
