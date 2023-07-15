import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { BsFillPersonPlusFill } from 'react-icons/bs';

import { Report } from 'notiflix';

import { contactSchema } from 'service/validation/validationSchema';

import { Box } from 'service/styles/Box';
import { Text } from 'service/styles/Text';
import { ButtonStyled, FieldStyled, FormStyled } from 'components/ContactForm/ContactForm.styled';
import { FormError } from 'components/FormError/FormError';
import { addContactThunk, fetchContactsThunk } from 'redux/contacts/operations';
import { Section } from 'components/Section/Section';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const initialValues = {
    name: '',
    number: '',
  };

  const hendleSubmit = (value, { resetForm }) => {
    checkAndAddContact(value);
    console.log(value);
    resetForm();
  };

  const checkAndAddContact = value => {
    contacts.some(contact => contact.name.toLowerCase() === value.name.toLowerCase())
      ? Report.warning(`${value.name}`, 'This user is already in the contact list.', 'OK')
      : dispatch(addContactThunk(value))
          .unwrap()
          .then(() => dispatch(fetchContactsThunk()));
  };

  return (
    <Section title="Phonebook">
      <Formik
        initialValues={initialValues}
        validationSchema={contactSchema}
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
    </Section>
  );
};
