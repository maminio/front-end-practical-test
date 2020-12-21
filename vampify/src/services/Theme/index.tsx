/** @jsx jsx */
import { FunctionComponent } from 'react';
import { jsx } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import styled, { CreateStyled } from '@emotion/styled';

/* colors */
import { grey, blue, red, orange, yellow } from '@ant-design/colors';

const theme = {
  colors: {
    white: '#fff',
    black: '#000',
    grey: {
      100: grey[0],
      200: grey[1],
      300: grey[2],
      400: grey[3],
      500: grey[4],
      600: grey[5],
      700: grey[6],
      800: grey[7],
      900: grey[8],
      1000: grey[9],
    },
    blue: {
      100: blue[0],
      200: blue[1],
      300: blue[2],
      400: blue[3],
      500: blue[4],
      600: blue[5],
      700: blue[6],
      800: blue[7],
      900: blue[8],
      1000: blue[9],
    },
    red: {
      100: red[0],
      200: red[1],
      300: red[2],
      400: red[3],
      500: red[4],
      600: red[5],
      700: red[6],
      800: red[7],
      900: red[8],
      1000: red[9],
    },
    orange: {
      100: orange[0],
      200: orange[1],
      300: orange[2],
      400: orange[3],
      500: orange[4],
      600: orange[5],
      700: orange[6],
      800: orange[7],
      900: orange[8],
      1000: orange[9],
    },
    yellow: {
      100: yellow[0],
      200: yellow[1],
      300: yellow[2],
      400: yellow[3],
      500: yellow[4],
      600: yellow[5],
      700: yellow[6],
      800: yellow[7],
      900: yellow[8],
      1000: yellow[9],
    },
  },
  backgrounds: {
    lightGray: '#f9f9f9',
    white: '#fff',
    yellow: '#fadb14',
    orange: '#ff9233',
    blue: '#002766',
  },
};

export const ThemeService: FunctionComponent = props => {
  const { children } = props;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export type Theme = typeof theme;

export default styled as CreateStyled<Theme>;
