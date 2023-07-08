import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

import { GlobalStyle } from 'utilities/styles/GlobalStyle';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Message } from 'components/Message/Message';

export const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        {contacts.length > 0 ? <ContactList /> : <Message text="Contact list is empty." />}
      </Section>
      <GlobalStyle />
    </>
  );
};
