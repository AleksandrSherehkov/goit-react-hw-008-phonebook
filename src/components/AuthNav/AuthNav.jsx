import { NavLink } from 'react-router-dom';
import { Box } from 'services/styles/Box';

export const AuthNav = () => {
  return (
    <Box>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </Box>
  );
};
