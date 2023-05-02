import React from 'react';

import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List, ListItem } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ContactListItem
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        </ListItem>
      ))}
    </List>
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
  onDeleteContact: PropTypes.func.isRequired,
};
