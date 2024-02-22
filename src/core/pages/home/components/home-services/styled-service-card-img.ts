import styled from '@emotion/styled';
import { THEME_PALETTE } from '../../../../ui/theme';

const {
  colors: COLORS,
} = THEME_PALETTE;

interface Props {
  //
}

const ServiceCardWrapper = styled.section<Props>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StyledServiceCardImage = styled.img<Props>`
  background: ${COLORS.deep_dark};
  padding: 4px;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  object-fit: contain;

  transform: translateY(-50%);
`;

export {
  ServiceCardWrapper,
  StyledServiceCardImage,
};
