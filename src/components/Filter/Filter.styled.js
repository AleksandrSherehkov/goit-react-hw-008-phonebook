import styled from 'styled-components';

export const InputStyled = styled.input`
  background-color: #e9eaf7;
  width: 650px;
  height: 35px;
  padding: 0 10px 0 10px;

  border: 1px solid #a1abb6;
  outline: none;

  color: #181455;
  font-size: ${({ theme }) => theme.fontSizes.s};

  ::placeholder {
    font-size: 12px;
    color: #181455;
  }
`;
