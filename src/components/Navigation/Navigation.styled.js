import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const CustomLink = styled(NavLink)`
  font-size: 18px;
  font-weight: 700;

  transition: color 250ms linear;
  color: #007dc1;

  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1), 1px 1px 1px rgba(0, 0, 0, 0.5);

  :hover {
    color: #8690eb;
  }
`;
