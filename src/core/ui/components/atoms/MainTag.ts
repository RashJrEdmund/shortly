import { THEME_PALETTE } from '../../theme';
import styled from '@emotion/styled';
import type {
  CommonProps,
  FLexAlignVariants,
  FlexDirectionVariants,
  FlexJustifyVariants
} from './common/types';

import { generateBg } from './common/functions';

const {
  colors: COLORS,
  dimensions: DIMENSIONS,
} = THEME_PALETTE;

interface Props extends CommonProps {
  use_desktop_mx_w?: boolean; // weather or not to use the desktop max width;
  align?: FLexAlignVariants;
  justify?: FlexJustifyVariants;
  flex_dir?: FlexDirectionVariants;
}

const MainTag = styled.main<Props>`
  display: flex;
  align-items: ${({ align = 'center' }) => align};
  justify-content: ${({ justify = 'start' }) => justify};
  flex-direction: ${({ flex_dir = 'column' }) => flex_dir};
  gap: ${({ gap = 'unset' }) => gap};

  width: ${({ width = '100%' }) => width};
  min-width: ${({ min_width = 'none' }) => min_width};
  max-width: ${({ max_width = 'none', use_desktop_mx_w }) => use_desktop_mx_w ? DIMENSIONS.desktop_mx_w : max_width}; // if use_desktop_mx_w ? set max_with to desktop max width

  height: ${({ height = 'fit-content' }) => height};
  min-height: ${({ min_height = DIMENSIONS.main_min_height }) => min_height};
  max-height: ${({ max_height = 'none' }) => max_height};

  // positioning
  position: ${({ position = 'unset' }) => position};
  top: ${({ top = 'unset' }) => top};
  right: ${({ right = 'unset' }) => right};
  bottom: ${({ bottom = 'unset' }) => bottom};
  left: ${({ left = 'unset' }) => left};
  transform: ${({ transform = 'unset' }) => transform};
  z-index: ${({ z_index = 'unset' }) => z_index};

  margin: ${({ margin = '0 auto' }) => margin};
  padding: ${({ padding = '2rem 0' }) => padding};
  border: ${({ border }) => border ? `1px solid ${COLORS.border}` : 'none'};
  border-radius: ${({ radius = '4px' }) => radius};

  ${({ bg = 'light' }) => generateBg(bg)}

  ${({ sx }) => sx};
`;

export default MainTag;
