import { Slide1 } from './Slide1';
import { Slide2 } from './Slide2';
import { Slide3 } from './Slide3';
import { Slide4 } from './Slide4';
import { Slide5 } from './Slide5';
import { Slide6 } from './Slide6';
import { Slide7 } from './Slide7';
import { Slide8 } from './Slide8';
import { Slide9 } from './Slide9';
import { Slide10 } from './Slide10';
import { Slide11 } from './Slide11';

const slides = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  Slide11,
];

export const RenderSlide = ({ slide }: { slide: number }) => {
  const Slide = slides[slide];

  if (!Slide) {
    return <></>;
  }
  return <Slide />;
};
