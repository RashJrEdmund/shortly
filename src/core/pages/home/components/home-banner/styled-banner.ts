import { flex_template } from '../../../../ui/theme';
import styled from '@emotion/styled';

const StyledHomeBanner = styled.section`
  ${flex_template};
  width: 100%;
  gap: 1rem;
  margin: 0 auto;
  padding: 0 0 8rem;
  justify-content: space-between;
  min-height: 80vh;
  overflow: hidden;
  max-width: 1440px;

  .top {
    min-width: 500px;
  }

  @media only screen and (max-width: 1440px) {
    .top {
      padding: 0 0 0 1.5vw;
    }
  }

  @media only screen and (max-width: 650px) {
    flex-direction: column-reverse;
    width: 100%;
    overflow: hidden;
    max-width: 100vw;

    .top {
      min-width: 97vw;
      margin: 0 auto;
      padding: 0;
    }

    img {
      width: 100%;
      min-width: 600px;
      max-height: min(70vh, 400px);
    }
  }
`;

export {
  StyledHomeBanner,
};
