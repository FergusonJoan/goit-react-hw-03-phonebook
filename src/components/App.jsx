import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const initState = [];

export class App extends Component {
  state = {
    contacts: initState,
    filter: '',
  };

  formSubmit = contact => {
    const { contacts } = this.state;
    const isExist = contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isExist) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), ...contact }],
    }));
  };
  clearContact = idContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idContact),
    }));
  };
  onChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  filteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalisedValue = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalisedValue)
    );
  };
  componentDidMount() {
    console.log('App componentDidMount');

    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdste');

    if (this.state.contacts !== prevState.contacts) {
      console.log('Обновилось поле contacts');

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.filteredContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmit} />
        <h2>Contacts</h2>
        {!!contacts.length ? (
          <div>
            <Filter value={filter} onChange={this.onChangeFilter} />
            <ContactList
              contacts={filteredContacts}
              onDeleteContact={this.clearContact}
            />
          </div>
        ) : (
          <p>There is no contacts here</p>
        )}
      </div>
    );
  }
}
