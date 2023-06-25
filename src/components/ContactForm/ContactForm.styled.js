import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: ${({ theme }) => theme.space[4]}px;
`;

export const FieldStyled = styled(Field)`
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

export const ButtonStyled = styled.button`
  width: 140px;
  box-shadow: inset 0px 1px 0px 0px #54a3f7;
  background: linear-gradient(to bottom, #007dc1 5%, #0061a7 100%);
  background-color: ${({ theme }) => theme.colors.button};
  border-radius: 3px;
  border: 1px solid #124d77;
  display: flex;
  justify-content: space-around;
  align-items: center;

  color: #ffffff;
  font-family: Arial;
  font-size: 13px;
  padding: 6px 15px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #154682;

  cursor: pointer;
  transition: background-color var(--main-hover-animation);

  &:hover,
  &:focus {
    background: linear-gradient(to bottom, #0061a7 5%, #007dc1 100%);
    background-color: ${({ theme }) => theme.colors.buttonHover};
  }
`;
