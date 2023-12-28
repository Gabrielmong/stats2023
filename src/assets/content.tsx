import {
  BedtimeOff,
  Code,
  Coffee,
  Computer,
  FitnessCenter,
  VideogameAsset,
  Wc,
} from '@mui/icons-material';

export const content: {
  [key: number]: {
    title: string;
    description?: string;
    bullets?: {
      title: string;
      icon?: React.ReactNode;
      counter?: number;
    }[];
  };
} = {
  0: {
    title: 'Estadísticas Completamente normales',
    description: 'Ing. Gabriel Monge',
  },
  1: {
    title: 'Estadísticas tomadas',
    description:
      'Esta práctica comenzó en 2019, con el enfoque principal de contar cuantas veces defeco en un año, otras estadísticas se agregaron',
    bullets: [
      {
        title: 'Horas en la computadora',
        icon: <Computer />,
      },
      {
        title: 'Veces asistidas al gimnasio',
        icon: <FitnessCenter />,
      },
      {
        title: 'Descomidas',
        icon: <Wc />,
      },
      {
        title: 'Horas jugando',
        icon: <VideogameAsset />,
      },
      {
        title: 'Ver el techo +2am',
        icon: <BedtimeOff />,
      },
      {
        title: 'Tazas de café',
        icon: <Coffee />,
      },
      {
        title: 'Lineas de código',
        icon: <Code />,
      },
    ],
  },
  2: {
    title: 'Horas en la computadora',
    description:
      'En la computadora trabajo, estudio, juego, me rasco las bolas mientras veo youtube y hablo estupideces en discord con mis compas',
  },
  3: {
    title: 'Veces asistidas al gimnasio',
    description: 'Mi razón principal de ir al gimnasio es ir a ver a Javier',
  },
  4: {
    title: 'Descomidas',
    description: 'Descomer, hacer campo, cuitear, "trabajar", cagar',
  },
  5: {
    title: 'Horas jugando',
    description: 'Repartido entre lol, Baldurs Gate 3, mw3 mas que todo',
  },
  6: {
    title: 'Ver el techo +2am',
    description: 'O hacía trabajos en la u o seguro no podía dormir y ya xdd',
  },
  7: {
    title: 'Tazas de café',
    description: 'Tengo un serio problema con la cafeína',
  },
  8: {
    title: 'Lineas de código',
    description: 'Con esto compro estupideces',
  },
  9: {
    title: 'En resumen',
    description: 'Cada contador quedó con los siguientes valores:',
    bullets: [
      {
        title: 'Horas en la computadora',
        icon: <Computer />,
        counter: 3254,
      },
      {
        title: 'Veces asistidas al gimnasio',
        icon: <FitnessCenter />,
        counter: 198,
      },
      {
        title: 'Descomidas',
        icon: <Wc />,
        counter: 1115,
      },
      {
        title: 'Horas jugando',
        icon: <VideogameAsset />,
        counter: 608,
      },
      {
        title: 'Ver el techo +2am',
        icon: <BedtimeOff />,
        counter: 69,
      },
      {
        title: 'Tazas de café',
        icon: <Coffee />,
        counter: 869,
      },
      {
        title: 'Lineas de código',
        icon: <Code />,
        counter: 23889,
      },
    ],
  },
  10: {
    title: 'grassy ass',
    description:
      'Prometo que el próximo año los valores van a ser aún mas altos',
  },
};
