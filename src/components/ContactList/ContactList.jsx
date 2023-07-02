import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';
import { Box } from 'utilities/styles/Box';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <Box mt={4} flexDirection="column" gridGap={4} as="ul">
      {contacts.map(({ id, ...contact }) => {
        return <Contact key={id} {...contact} deleteContact={deleteContact} contactId={id} />;
      })}
    </Box>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
