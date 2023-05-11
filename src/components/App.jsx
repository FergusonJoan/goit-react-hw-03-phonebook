import { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const initState = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? initState
  );
  const [filter, setFilter] = useState('');

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts) ?? initState);
  }, [isFirstRender, contacts]);

  const formSubmit = contact => {
    const isExist = contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isExist) {
      toast.error(`${contact.name} is already in contacts.`, {
        position: 'top-left',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }
    contacts(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), ...contact }],
    }));
    toast.success('Контакт успешно добавлен!', {
      position: 'top-left',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };
  const clearContact = idContact => {
    setContacts(contacts.filter(contact => contact.id !== idContact));
  };
  const onChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };
  const filteredContacts = () => {
    const normalisedValue = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalisedValue)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmit} />
      <h2>Contacts</h2>
      {!!contacts.length ? (
        <div>
          <Filter value={filter} onChange={onChangeFilter} />
          <ContactList
            contacts={filteredContacts()}
            onDeleteContact={clearContact}
          />
        </div>
      ) : (
        <p>There is no contacts here</p>
      )}
      <ToastContainer />
    </div>
  );
};
