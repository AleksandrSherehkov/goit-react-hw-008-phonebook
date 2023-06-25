import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from 'utilities/styles/GlobalStyle';
import { Section } from 'components/Section/Section';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Message } from 'components/Message/Message';
import  contactsList  from 'data/contactsList.json'
import { save, load } from 'utilities/localStorage'

const KEY_LOCAL_STORAGE = 'Phonebook-contacs';


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const lsContacts = load(KEY_LOCAL_STORAGE)
    const saveContact = lsContacts.length ? lsContacts : contactsList;
        
    saveContact && this.setState({ contacts: saveContact });
    
  }

  componentDidUpdate(_, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      save(KEY_LOCAL_STORAGE, nextContacts);
    }
  
}



  createContact = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };
    this.checkForDuplicate(newContact);
  };

  checkForDuplicate = newContact => {
    const { contacts } = this.state;
    contacts.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())
      ? this.onReportWarning(newContact)
      : this.addContact(newContact);
  };

  addContact = newContact => {
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  onReportWarning = ({ name }) => {
    Report.warning(`${name}`, 'This user is already in the contact list.', 'OK');
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    const input = e.currentTarget;
    this.setState({ filter: input.value });
  };

  filtredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
  };

  render() {
    const { contacts, filter } = this.state;
    const { createContact, changeFilter, deleteContact, filtredContacts } = this;

    return (
      <>
        <Section title="Phonebook">
          <ContactForm createContact={createContact} />
        </Section>
        <Section title="Contacts">
          <Filter filter={filter} changeFilter={changeFilter} />
          {contacts.length > 0 ? (
            <ContactList contacts={filtredContacts()} deleteContact={deleteContact} />
          ) : (
            <Message text="Contact list is empty." />
          )}
        </Section>
        <GlobalStyle />
      </>
    );
  }
}
