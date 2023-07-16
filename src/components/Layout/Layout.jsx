import { AppBar } from 'components/AppBar/AppBar';
import { Section } from 'components/Section/Section';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Section>
        <AppBar />
      </Section>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
