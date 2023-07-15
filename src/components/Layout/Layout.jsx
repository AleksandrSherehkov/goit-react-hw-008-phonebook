import { AppBar } from 'components/AppBar/AppBar';
import { Section } from 'components/Section/Section';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Section>
      <AppBar />

      <Outlet />
    </Section>
  );
};
