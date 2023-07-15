import { GlobalStyle } from 'service/styles/GlobalStyle';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';

import { LoginForm } from './LoginForm/LoginForm';
import { RegisterForm } from './RegisterForm/RegisterForm';

export const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchContactsThunk());
  // }, [dispatch]);

  return (
    <>
      <ContactForm />
      <Filter />
      <RegisterForm />
      <LoginForm />
      <GlobalStyle />

      {/* <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes> */}
    </>
  );
};
