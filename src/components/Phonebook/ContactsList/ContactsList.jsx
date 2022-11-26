import React from 'react';
import {
  StyledContactsList,
  StyledContactsListButton,
  StyledContactsLi,
} from './ContactsList.styled';
import { getContacts, getFilter } from 'components/redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'components/redux/operations';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const onFilter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const normalizedFilter = onFilter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <StyledContactsList>
      {contacts.length > 0 &&
        visibleContacts.map(({ id, name, number }) => (
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
