import { THEME_PALETTE } from '../../theme';
import styled from '@emotion/styled';
import { generateBg } from './common/functions';

import type {
  FLexAlignVariants,
  FlexJustifyVariants,
  FlexDirectionVariants,
  FlexWrapVariants,
  CommonProps,
  CursorVariants,
} from './common/types';
import { ComponentProps } from 'react';

const {
  colors: COLORS,
  dimensions: DIMENSIONS,
} = THEME_PALETTE;

interface Props extends CommonProps {
  animate_up_down?: boolean;
  use_desktop_mx_w?: boolean; // weather or not to use the desktop max width;
  cursor?: CursorVariants;
  align?: FLexAlignVariants;
  justify?: FlexJustifyVariants;
  align_self?: FLexAlignVariants;
  justify_self?: FlexJustifyVariants;
  flex_dir?: FlexDirectionVariants; media_flex_dir?: FlexDirectionVariants; // for media query
  flex_wrap?: FlexWrapVariants;
}

const DivCard = styled.div<Props>`
  display: flex;
  justify-content: ${({ justify = 'center' }) => justify};
  align-items: ${({ align = 'center' }) => align};
  align-self: ${({ align_self = 'unset' }) => align_self};
  justify-self: ${({ justify_self = 'unset' }) => justify_self};
  flex-wrap: ${({ flex_wrap = 'unset' }) => flex_wrap};

  gap: ${({ gap = 'unset' }) => gap};
  padding: ${({ padding = '0' }) => padding};
  margin: ${({ margin = '0' }) => margin};
  flex-direction: ${({ flex_dir = 'unset' }) => flex_dir};
  border: ${({ border }) => border ? `1px solid ${COLORS.border}` : 'none'};
  border-radius: ${({ radius = '0' }) => radius};

  // positioning
  position: ${({ position = 'unset' }) => position};
  top: ${({ top = 'unset' }) => top};
  right: ${({ right = 'unset' }) => right};
  bottom: ${({ bottom = 'unset' }) => bottom};
  left: ${({ left = 'unset' }) => left};
  transform: ${({ transform = 'unset' }) => transform};
  z-index: ${({ z_index = 'unset' }) => z_index};

  cursor: ${({ cursor = 'inherit' }) => cursor};

  outline: none;
  width: ${({ width = 'fit-content' }) => width};
  min-width: ${({ min_width = 'unset' }) => min_width};
  max-width: ${({ max_width = 'none', use_desktop_mx_w }) => use_desktop_mx_w ? DIMENSIONS.desktop_mx_w : max_width}; // if use_desktop_mx_w ? set max_with to desktop max width

  height: ${({ height = 'fit-content' }) => height};
  min-height: ${({ min_height = 'unset' }) => min_height};
  max-height: ${({ max_height = 'none' }) => max_height};

  ${({ bg = 'inherit' }) => generateBg(bg)}

  ${({ sx }) => sx};

  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 650px) {
    flex-direction: ${({ flex_dir, media_flex_dir }) => (media_flex_dir || flex_dir || 'unset')};
  }
`;

export default DivCard;
