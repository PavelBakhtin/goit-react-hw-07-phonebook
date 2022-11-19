import { useDispatch } from 'react-redux';
import { setFilter } from 'components/redux/filterSlice';
import { StyledInput } from '../ContactForm/ContactsForm.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const onFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <label>
      <StyledInput type="text" name="filter" onChange={onFilter} />
    </label>
  );
};
