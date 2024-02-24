import { THEME_PALETTE } from '../../theme';
import styled from '@emotion/styled';

const {
  colors: COLORS,
} = THEME_PALETTE;

interface Props {
  error?: boolean;
}

const ShortenField = styled.input<Partial<Props>>`
  width: 100%;
  padding: 1rem;
  border-radius: 6px;
  border: ${({ error = false }) => error ? `2px solid ${COLORS.error}` : '2px solid transparent'};
`;

export default ShortenField;
