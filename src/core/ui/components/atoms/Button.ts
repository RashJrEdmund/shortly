import { THEME_PALETTE, flex_template } from '../../theme';
import styled from '@emotion/styled';
import { generateBg } from './common/functions';
import type { CommonProps, CursorVariants, SizeVariants, WeightVariants } from './common/types';

const {
  colors: COLORS,
} = THEME_PALETTE;

interface Props extends CommonProps {
  no_white_space?: boolean;
  cursor?: CursorVariants;
  weight?: WeightVariants;
  size?: SizeVariants;
  href?: string; // this has no use other than calming down the as 'a' attributes problem
  disabled?: boolean;
}

const Button = styled.button<Partial<Props>>`
  color: ${COLORS.text_invert};
  padding: ${({ padding = '4px 15px' }) => padding};
  margin: ${({ margin = '0' }) => margin};
  border-radius: ${({ radius = '4px' }) => radius};
  border: ${({ border }) => border ? `1px solid ${COLORS.border}` : 'none'};
  white-space: ${({ no_white_space = false }) => no_white_space ? 'nowrap' : 'normal'};
  font-weight: ${({ weight = '400' }) => weight}; // 400 is default and normal font-weight, 700 is bold
  font-size: ${({ size = '18px' }) => size}; // 400 is default and normal font-weight, 700 is bold

  width: ${({ width = 'fit-content' }) => width};
  min-width: ${({ min_width = 'unset' }) => min_width};
  max-width: ${({ max_width = 'none' }) => max_width};

  height: ${({ height = 'fit-content' }) => height};
  min-height: ${({ min_height = 'unset' }) => min_height};
  max-height: ${({ max_height = 'none' }) => max_height};

  // positioning
  position: ${({ position = 'unset' }) => position};
  top: ${({ top = 'unset' }) => top};
  right: ${({ right = 'unset' }) => right};
  bottom: ${({ bottom = 'unset' }) => bottom};
  left: ${({ left = 'unset' }) => left};
  transform: ${({ transform = 'unset' }) => transform};
  z-index: ${({ z_index = 'unset' }) => z_index};

  ${flex_template};
  gap: ${({ gap = '5px' }) => gap};

  cursor: ${({ cursor = 'pointer' }) => cursor};

  ${({ bg = 'cyan' }) => generateBg(bg)}

  ${({ sx = '' }) => sx};
`;

export default Button;
