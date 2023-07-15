import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { Box } from 'services/styles/Box';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box width="700px" justifyContent="space-around" as="nav">
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Box>
  );
};
