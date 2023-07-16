import { useAuth } from 'hooks/useAuth';
import React from 'react';

import { CustomLink } from './Navigation.styled';
import { Box } from 'services/styles/Box';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box gridGap={4}>
      <CustomLink to="/">Home</CustomLink>
      {isLoggedIn && <CustomLink to="/contacts">Contacts</CustomLink>}
    </Box>
  );
};
