import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import { selectContacts, selectFilter } from 'redux/selectors';

import { Contact } from 'components/Contact/Contact';
import { Box } from 'utilities/styles/Box';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().startsWith(filter.toLowerCase())
  );

  const handleRemoveContact = contactId => {
    dispatch(removeContact(contactId));
  };

  return (
    <Box mt={4} flexDirection="column" gridGap={4} as="ul">
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} onRemoveContact={handleRemoveContact} />
      ))}
    </Box>
  );
};
