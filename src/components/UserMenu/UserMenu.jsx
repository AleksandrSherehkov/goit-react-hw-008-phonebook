import { useAuth } from 'hooks/useAuth';
import React from 'react';

export const UserMenu = () => {
  const { user } = useAuth();
  return (
    <div>
      <p>Welcome, {user.name}</p>
      {/* <button type="button" onClick={() => dispatch(logOut())}> */}
      <button type="button">Logout</button>
    </div>
  );
};
