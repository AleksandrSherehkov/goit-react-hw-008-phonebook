import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';

export const IconUser = styled(FaUser)`
  width: 18px;
  height: 18px;

  color: ${({ theme }) => theme.colors.button};
`;

export const ButtonTrash = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 30px;
  padding: 10px;

  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.button};

  cursor: pointer;
  transition: color var(--main-hover-animation);

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.buttonHoverTrash};
  }
`;
