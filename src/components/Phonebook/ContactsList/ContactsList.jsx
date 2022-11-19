import React from 'react';
import {
  StyledContactsList,
  StyledContactsListButton,
  StyledContactsLi,
} from './ContactsList.styled';
import { getContacts, getFilter } from 'components/redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'components/redux/contactsSlice';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const onFilter = useSelector(getFilter);

  const normalizedFilter = onFilter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <StyledContactsList>
      {visibleContacts.map(({ id, name, number }) => (
        <StyledContactsLi key={id}>
          <span>{name}: </span>
          <span>{number}</span>
          <StyledContactsListButton
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </StyledContactsListButton>
        </StyledContactsLi>
      ))}
    </StyledContactsList>
  );
};
