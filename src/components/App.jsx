import { GlobalStyle } from 'service/styles/GlobalStyle';

import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage/HomePage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import { Layout } from './Layout/Layout';

export const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchContactsThunk());
  // }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
