import { Box } from 'services/styles/Box';
import { CustomLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Box gridGap={4}>
      <CustomLink to="/register">Register</CustomLink>
      <CustomLink to="/login">Log In</CustomLink>
    </Box>
  );
};
