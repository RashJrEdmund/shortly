import { THEME_PALETTE } from '../../../theme';
import { css } from '@emotion/react';
import {
  BgVariants,
} from './types';

const {
  colors: COLORS,
} = THEME_PALETTE;

const generateBg = (bg: BgVariants) => {
  if (bg === 'dark') {
    return css`
      background-color: ${COLORS.dark};
      color: ${COLORS.text_deemed};
    `;
  } else if (bg === 'deep_dark') {
    return css`
      background-color: ${COLORS.deep_dark};
      color: ${COLORS.text_deemed};
    `;
  } else if (bg === 'cyan') {
    return css`
      background-color: ${COLORS.cyan};
      color: ${COLORS.text_invert};
    `;
  } else if (bg === 'deemed_cyan') {
    return css`
      background-color: ${COLORS.deemed_cyan};
      color: ${COLORS.text_invert};
    `;
  } else if (bg === 'light') {
    return css`
      background-color: ${COLORS.light};
      color: ${COLORS.text_deemed};
    `;
  } else if (bg === 'grayed') {
    return css`
      background-color: ${COLORS.grayed};
      color: ${COLORS.text};
    `;
  } else if (bg === 'error') {
    return css`
      border: 1px solid ${COLORS.error};
      background-color: inherit;
      color: inherit;
    `;
  } else if (bg === 'none') { // bg === 'none';
    return css`
      background: none;
      color: inherit;
    `;
  }  else { // else inherit
    return css`
      background-color: inherit;
      color: inherit;
    `;
  }
};

export {
  generateBg
};
