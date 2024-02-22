import { THEME_PALETTE, flex_template } from '../../theme';
import styled from '@emotion/styled';
import type {
  CommonProps,
  CursorVariants,
  SizeVariants,
  WeightVariants
} from './common/types';

const { colors: COLORS } = THEME_PALETTE;

type IColor = 'inherit' | 'normal' | 'deemed' | 'invert' | 'error';

interface Props extends CommonProps {
  no_white_space?: boolean;
  ellipsis?: boolean; // to create ellipsis, works hand in hand with no_white_space
  text_align?: 'center' | 'left' | 'right';
  color_type?: IColor,
  weight?: WeightVariants;
  size?: SizeVariants;
  cursor?: CursorVariants;
  media_color?: IColor; // for switching colors on media queries
  media_size?: SizeVariants; // for switching sizes on media queries;
}

const generateColor = (text: IColor) => {
  switch (text) {
    case 'deemed':
      return COLORS.text_deemed;
    case 'invert':
      return COLORS.text_invert;
    case 'error':
      return COLORS.error;
    case 'normal':
      return COLORS.text;
    default: // text inherit
      return 'inherit';
  }
};

const TextTag = styled.span<Props>`
  width: ${({ width = 'fit-content' }) => width};
  min-width: ${({ min_width = 'unset' }) => min_width};
  max-width: ${({ max_width = 'unset' }) => max_width};

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

  font-weight: ${({ weight = '400' }) => weight}; // 400 is defualt and normal font-weight, 700 is bold
  font-size: ${({ size = '18px' }) => size}; // 1rem is defualt text size and 2rem is for like h1s
  color: ${({ color_type = 'inherit' }) => generateColor(color_type)};
  white-space: ${({ no_white_space = false, ellipsis = false }) => (no_white_space || ellipsis) ? 'nowrap' : 'normal'};
  text-overflow: ${({ ellipsis = false }) => ellipsis ? 'ellipsis' : 'unset'};
  text-align: ${({ text_align = 'center' }) => text_align};

  ${flex_template}
  gap: ${({ gap = '3px' }) => gap};
  margin: ${({ margin = '0 2.5px' }) => margin};
  padding: ${({ padding = '0' }) => padding};
  border: ${({ border }) => border ? `1px solid ${COLORS.border}` : 'none'};
  border-radius: ${({ radius = '0' }) => radius};

  cursor: ${({ cursor = 'inherit' }) => cursor};

  ${({ sx }) => sx};

  @media only screen and (max-width: 900px) {
    color: ${({ media_color, color_type }) => generateColor(media_color ?? color_type ?? 'normal')};
    font-size: ${({ media_size, size }) => (media_size ?? size ?? '1rem')}; // 1rem is defualt text size and 2rem is for like h1s
  }
`;

export default TextTag;
