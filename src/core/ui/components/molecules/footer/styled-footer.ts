import { THEME_PALETTE, flex_template } from '../../../theme';
import styled from '@emotion/styled';

const {
  colors: COLORS,
} = THEME_PALETTE;

interface Props {
  //
}

const FooterIcons = styled.main<Props>`
  ${flex_template};
  width: fit-content;
  gap: 1rem;

  img {
    transition: 300ms;
    border-radius: 4px;

    &:hover {
      background: ${COLORS.cyan};
    }
  }
`;

export {
  FooterIcons,
};
