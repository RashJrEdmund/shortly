import styled from '@emotion/styled';
import { THEME_PALETTE } from '../../../../ui/theme';

const {
  colors: COLORS,
} = THEME_PALETTE;

interface Props {
  //
}

const ServiceCardWrapper = styled.section<Props>`
  width: fit-content;
  margin: 0 0 5rem;
  align-items: center;
  justify-content: center;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1rem;

  .card {
    width: min(97vw, 300px, 100%);
    min-height: 200px;
    flex-direction: column;
    margin: 0 auto;
    border-radius: 3px;
  }


  @media only screen and (max-width: 650px) {
    grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  }
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
