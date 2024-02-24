import { THEME_PALETTE, flex_template } from '../../../theme';
import styled from '@emotion/styled';

const {
  colors: COLORS,
  dimensions: DIMENSIONS,
} = THEME_PALETTE;

interface Props {
  isOpen: boolean;
}

const StyledNavBar = styled.nav<Props>`
  ${flex_template};
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  padding: 1.3rem 0 10px;
  max-width: ${DIMENSIONS.desktop_mx_w};

  #menu-icon {
    display: none;
  }

  @media only screen and (max-width: 650px) {
    flex-direction: column;
    position: relative;

    .top {
      justify-content: space-between;
      width: 100%;

      #menu-icon {
        display: unset;
      }
    }

    .bottom {
      outline: none;
      flex-direction: column;
      background-color: ${COLORS.dark};
      border-radius: 10px;
      position: absolute;
      top: 100%;
      padding: 2rem 10px;
      transition: 300ms;
      z-index: 6;
      transform: translateY(${({ isOpen }) => isOpen ? '0' : 'calc(-100% - 150px)'});

      & > div {
        flex-direction: column;
        /* background-color: gold; */
        width: 100%;
      }
    }
  }
`;

export {
  StyledNavBar,
};
