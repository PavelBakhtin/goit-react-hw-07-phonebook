import { nanoid } from 'nanoid';
import {
  StyledForm,
  StyledFormButton,
  StyledInput,
  FormButtonDiv,
} from './ContactsForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'components/redux/contactsSlice';
export const ContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const newContact = {
      id: nanoid(),
      name: form.elements.name.value,
      number: form.elements.number.value,
    };
    dispatch(addContact(newContact));
    form.reset();
  };
  const nameInputId = nanoid();
  const numberInputId = nanoid();
  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}>Name </label>
      <StyledInput
        id={nameInputId}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        autoComplete="off"
      />
      <label htmlFor={numberInputId}>Number</label>
      <StyledInput
        id={numberInputId}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        autoComplete="off"
      />
      <FormButtonDiv>
        <StyledFormButton type="submit">Add contact</StyledFormButton>
      </FormButtonDiv>
    </StyledForm>
  );
};
