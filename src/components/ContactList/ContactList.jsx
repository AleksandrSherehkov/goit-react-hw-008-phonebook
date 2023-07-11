import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

import { Contact } from 'components/Contact/Contact';
import { Box } from 'utilities/styles/Box';
import { deleteContactThunk, fetchContactsThunk } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleRemoveContact = contactId => {
    dispatch(deleteContactThunk(contactId))
      .unwrap()
      .then(() => dispatch(fetchContactsThunk()));
  };

  return (
    <Box mt={4} flexDirection="column" gridGap={4} as="ul">
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} onRemoveContact={handleRemoveContact} />
      ))}
    </Box>
  );
};
