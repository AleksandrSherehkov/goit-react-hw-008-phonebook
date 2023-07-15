import { useDispatch, useSelector } from 'react-redux';

import { Box } from 'service/styles/Box';
import { Text } from 'service/styles/Text';

import { InputStyled } from 'components/Filter/Filter.styled';

import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/contactsSlice';
import { Section } from 'components/Section/Section';
import { ContactList } from 'components/ContactList/ContactList';
import { Message } from 'components/Message/Message';

export const Filter = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFieldFilter = ({ currentTarget: { value } }) => dispatch(setFilter(value));

  return (
    <Section title="Contacts">
      <Box my={4} alignItems="flex-start" flexDirection="column" as="label">
        <Text fontSize="m" color="black">
          Find contacts by name
        </Text>
        <InputStyled
          type="text"
          value={filter}
          placeholder="Enter name"
          name="filter"
          onChange={changeFieldFilter}
        />
      </Box>
      {contacts.length > 0 ? <ContactList /> : <Message text="Contact list is empty." />}
    </Section>
  );
};
