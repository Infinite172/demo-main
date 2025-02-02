'use client';

import { Button, Card, createTheme, Input, rem } from '@mantine/core';

import btnClasses from '../modules/Button.module.css';
import cardClasses from '../modules/Card.module.css';
import inputClasses from '../modules/Input.module.css';
import inputWrapperClasses from '../modules/InputWrapper.module.css';

export const theme = createTheme({
  colors: {
    brand: [
      '#e7fef1',
      '#d4f8e4',
      '#abefc9',
      '#7fe6ac',
      '#5adf92',
      '#43da82',
      '#34d87a',
      '#24bf67',
      '#17a95b',
      '#00934b',
    ],
  },

  primaryColor: 'brand',
  fontSizes: {
    dlg: rem(96),
    dmd: rem(52),
    dsm: rem(44),
    dxsm: rem(36),
    lg: rem(20),
    md: rem(18),
    sm: rem(16),
    xs: rem(14),
  },
  lineHeights: {
    dlg: rem(112),
    dmd: rem(64),
    dsm: rem(52),
    dxsm: rem(44),
    lg: rem(24),
    md: rem(24),
    sm: rem(20),
    xl: rem(20),
  },
  fontFamily: '"Figtree", sans-serif',

  defaultRadius: 'sm',
  headings: {
    fontWeight: '700',
    sizes: {
      h1: {
        fontSize: rem(40),
      },
      h2: {
        fontSize: rem(36),
      },
      h3: {
        fontSize: rem(32),
      },
      h4: {
        fontSize: rem(28),
      },
      h5: {
        fontSize: rem(24),
      },
      h6: {
        fontSize: rem(20),
      },
    },
  },

  components: {
    Button: Button.extend({
      classNames: btnClasses,
    }),

    Input: Input.extend({
      classNames: inputClasses,
    }),

    InputWrapper: Input.extend({
      classNames: inputWrapperClasses,
    }),

    Card: Card.extend({
      classNames: cardClasses,
    }),
  },
});
