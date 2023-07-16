import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Box } from 'services/styles/Box';
import { ButtonLogOutStyled, NameStyled, SpanStyled } from './UserMenu.styled';
import { FcButtingIn } from 'react-icons/fc';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box gridGap={4}>
      <Box flexDirection="column">
        <SpanStyled>Welcome,</SpanStyled> <NameStyled>{user?.name}</NameStyled>
      </Box>

      <ButtonLogOutStyled type="button" onClick={() => dispatch(logOut())}>
        <FcButtingIn size={18} />
        Logout
      </ButtonLogOutStyled>
    </Box>
  );
};
