import { THEME_PALETTE, flex_template } from '../../../../ui/theme';
import styled from '@emotion/styled';

const {
  dimensions: DIMENSIONS,
} = THEME_PALETTE;

const StyledHomeBanner = styled.section`
  ${flex_template};
  width: 100%;
  gap: 1rem;
  margin: 0 auto;
  justify-content: space-between;
  min-height: 80vh;
  overflow: hidden;
  max-width: ${DIMENSIONS.desktop_mx_w};

  .top {
    min-width: 300px;
    max-width: ${DIMENSIONS.desktop_mx_w};
  }

  @media only screen and (max-width: 650px) {
    flex-direction: column-reverse;
    max-width: 100vw;

    padding: 0 0 8rem;
  }
`;

export {
  StyledHomeBanner,
};
