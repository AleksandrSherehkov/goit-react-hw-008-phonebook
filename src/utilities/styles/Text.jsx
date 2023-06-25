import styled from 'styled-components';
import { color, space, typography } from 'styled-system';

export const Text = styled('p')(color, typography, space);

Text.defaultProps = {
  display: 'block',
  fontFamily: 'title',
  fontSize: 'l',
  color: 'text',
};
