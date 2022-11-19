import React from 'react';
import { Section } from './Phonebook/Section';
import { ContactForm } from './Phonebook/ContactForm/ContactForm';
import { ContactsList } from './Phonebook/ContactsList/ContactsList';
import { Filter } from './Phonebook/Filter/Filter';
import { StyledApp } from './Phonebook/App.Styled';

export const App = () => {
  return (
    <StyledApp>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        <ContactsList />
      </Section>
    </StyledApp>
  );
};
