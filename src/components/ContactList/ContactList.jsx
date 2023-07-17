import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';

import { Contact } from 'components/Contact/Contact';
import { Box } from 'services/styles/Box';
import { deleteContactThunk } from 'redux/contacts/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleRemoveContact = contactId => {
    dispatch(deleteContactThunk(contactId));
  };

  return (
    <Box mt={4} flexDirection="column" gridGap={4} as="ul">
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} onRemoveContact={handleRemoveContact} />
      ))}
    </Box>
  );
};
