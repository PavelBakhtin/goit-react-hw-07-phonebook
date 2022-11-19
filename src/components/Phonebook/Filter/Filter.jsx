import { useDispatch } from 'react-redux';
import { setFilter } from 'components/redux/filterSlice';
import { StyledInput } from '../ContactForm/ContactsForm.styled';
import { flex, marginBottom } from 'styled-system';

export const Filter = () => {
  const dispatch = useDispatch();
  const onFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <>
      <label
        style={{ marginBottom: 10, display: 'inline-block' }}
        htmlFor="filter"
      >
        Find contacts by name
      </label>
      <StyledInput type="text" name="filter" onChange={onFilter} />
    </>
  );
};
