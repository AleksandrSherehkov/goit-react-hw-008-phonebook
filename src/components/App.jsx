import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from 'utilities/styles/GlobalStyle';
import { Section } from 'components/Section/Section';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Message } from 'components/Message/Message';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

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
