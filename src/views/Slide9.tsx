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
    label: 'Code',
    data: [
      {
        date: new Date('2023-01-01'),
        hours: 3507,
      },
      {
        date: new Date('2023-02-01'),
        hours: 5357,
      },
      {
        date: new Date('2023-03-01'),
        hours: 5869,
      },
      {
        date: new Date('2023-04-01'),
        hours: 6596,
      },
      {
        date: new Date('2023-05-01'),
        hours: 7823,
      },
      {
        date: new Date('2023-06-01'),
        hours: 8816,
      },
      {
        date: new Date('2023-07-01'),
        hours: 15028,
      },
      {
        date: new Date('2023-08-01'),
        hours: 17870,
      },
      {
        date: new Date('2023-09-01'),
        hours: 19513,
      },
      {
        date: new Date('2023-10-01'),
        hours: 20573,
      },
      {
        date: new Date('2023-11-01'),
        hours: 21474,
      },
      {
        date: new Date('2023-12-01'),
        hours: 23889,
      },
    ],
  },
];

const notAdditiveData: Series[] = [
  {
    label: 'Code',
    data: [
      {
        date: new Date('2023-01-01'),
        hours: 3507,
      },
      {
        date: new Date('2023-02-01'),
        hours: 5357 - 3507,
      },
      {
        date: new Date('2023-03-01'),
        hours: 5869 - 5357,
      },
      {
        date: new Date('2023-04-01'),
        hours: 6596 - 5869,
      },
      {
        date: new Date('2023-05-01'),
        hours: 7823 - 6596,
      },
      {
        date: new Date('2023-06-01'),
        hours: 8816 - 7823,
      },
      {
        date: new Date('2023-07-01'),
        hours: 15028 - 8816,
      },
      {
        date: new Date('2023-08-01'),
        hours: 17870 - 15028,
      },
      {
        date: new Date('2023-09-01'),
        hours: 19513 - 17870,
      },
      {
        date: new Date('2023-10-01'),
        hours: 20573 - 19513,
      },
      {
        date: new Date('2023-11-01'),
        hours: 21474 - 20573,
      },
      {
        date: new Date('2023-12-01'),
        hours: 23889 - 21474,
      },
    ],
  },
];

export const Slide9 = () => {
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
      <Typography variant="h3">{content[8].title}</Typography>

      <Typography variant="body1">{content[8].description}</Typography>

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
