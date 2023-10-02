import React from 'react';

import { ContactListItemBtn } from './ContactList.styled';

import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/selectors';
import { removeContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(removeContact());
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            // Кнопка удаления контакта
            <ContactListItemBtn type="button" name="delete" onClick={handleDelete}>
              delete
            </ContactListItemBtn>
          }
        </li>
      ))}
    </ul>
  );
  
};

