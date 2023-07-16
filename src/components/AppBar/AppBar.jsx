import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { Section } from 'components/Section/Section';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { Box } from 'services/styles/Box';
import { Text } from 'services/styles/Text';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Section>
      <Box px={5} width="700px" justifyContent="space-between" as="nav">
        <Navigation />
        <Text>PHONEBOOK</Text>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Box>
    </Section>
  );
};
