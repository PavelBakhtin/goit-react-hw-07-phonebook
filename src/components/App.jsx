import { useEffect } from 'react';
import { Section } from './Phonebook/Section';
import { ContactForm } from './Phonebook/ContactForm/ContactForm';
import { ContactsList } from './Phonebook/ContactsList/ContactsList';
import { Filter } from './Phonebook/Filter/Filter';
import { StyledApp } from './Phonebook/App.Styled';
import { getIsLoading, getError } from 'components/redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/operations';
export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <StyledApp>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactsList />
      </Section>
    </StyledApp>
  );
};
