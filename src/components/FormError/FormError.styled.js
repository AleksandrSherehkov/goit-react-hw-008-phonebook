import styled from 'styled-components';

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSizes.s};
`;
