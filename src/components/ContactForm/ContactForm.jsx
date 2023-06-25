import PropTypes from 'prop-types';

import { Formik } from 'formik';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { Box } from 'utilities/styles/Box';
import { Text } from 'utilities/styles/Text';
import { ButtonStyled, FieldStyled, FormStyled } from 'components/ContactForm/ContactForm.styled';
import { FormError } from 'components/FormError/FormError';
import { contactSchema } from 'utilities/validationSchema';

export const ContactForm = ({ createContact }) => {
  const hendleSubmit = (values, { resetForm }) => {
    createContact(values);
    resetForm();
  };

  const initialValues = {
    name: '',
    number: '',
  };

  return (
    <Formik initialValues={initialValues} validationSchema={contactSchema} onSubmit={hendleSubmit}>
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
            Number
          </Text>
          <FieldStyled
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <FormError name="number" />
        </Box>
        <ButtonStyled type="submit">
          <BsFillPersonPlusFill size={20} />
          Add contact
        </ButtonStyled>
      </FormStyled>
    </Formik>
  );
};

ContactForm.propTypes = {
  createContact: PropTypes.func.isRequired,
};
