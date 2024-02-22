import { THEME_PALETTE } from '../../../theme';
import styled from '@emotion/styled';
const {
  dimensions: DIMENSIONS,
} = THEME_PALETTE;

interface Props {
  //
}

const StyledFooterSection = styled.main<Props>`
  background-color: brown;
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
  max-width: ${DIMENSIONS.desktop_mx_w};

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default StyledFooterSection;
