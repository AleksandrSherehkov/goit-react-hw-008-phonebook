import { ButtonStyled, FieldStyled, FormStyled } from 'components/ContactForm/ContactForm.styled';
import { FormError } from 'components/FormError/FormError';
import { Section } from 'components/Section/Section';
import { Formik } from 'formik';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Box } from 'service/styles/Box';
import { Text } from 'service/styles/Text';
import { registerSchema } from 'service/validation/validationRegisterSchema';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const hendleSubmit = (value, { resetForm }) => {
    dispatch(register(value));

    resetForm();
  };
  return (
    <Section title="Registration">
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={hendleSubmit}
      >
        <FormStyled autoComplete="off">
          <Box alignItems="flex-start" flexDirection="column" as="label">
            <Text fontSize="m" color="black" as="span">
              Name
            </Text>
            <FieldStyled
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <FormError name="name" />
          </Box>
          <Box alignItems="flex-start" flexDirection="column" as="label">
            <Text fontSize="m" color="black" as="span">
              Email
            </Text>
            <FieldStyled type="text" name="email" title="Valid mail" required />
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
            Registration
          </ButtonStyled>
        </FormStyled>
      </Formik>
    </Section>
  );
};
