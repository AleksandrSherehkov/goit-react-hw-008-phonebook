import { Formik } from 'formik';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { ButtonStyled, FieldStyled, FormStyled } from 'components/ContactForm/ContactForm.styled';
import { FormError } from 'components/FormError/FormError';
import { Box } from 'service/styles/Box';
import { Text } from 'service/styles/Text';
import { loginSchema } from 'service/validation/validationLoginSchema';
import { Section } from 'components/Section/Section';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const hendleSubmit = (value, { resetForm }) => {
    dispatch(logIn(value));
    resetForm();
  };
  return (
    <Section title="Login">
      <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={hendleSubmit}>
        <FormStyled autoComplete="off">
          <Box alignItems="flex-start" flexDirection="column" as="label">
            <Text fontSize="m" color="black" as="span">
              Email
            </Text>
            <FieldStyled
              type="text"
              name="email"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <FormError name="email" />
          </Box>
          <Box alignItems="flex-start" flexDirection="column" as="label">
            <Text fontSize="m" color="black" as="span">
              Password
            </Text>
            <FieldStyled
              type="tel"
              name="password"
              title="Phone number must be digits and can contain spaces, dashes"
              required
            />
            <FormError name="password" />
          </Box>
          <ButtonStyled type="submit">
            <BsFillPersonPlusFill size={20} />
            Login
          </ButtonStyled>
        </FormStyled>
      </Formik>
    </Section>
  );
};
