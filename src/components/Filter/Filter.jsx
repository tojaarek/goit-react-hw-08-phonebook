import { FormBox, Label, Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <FormBox>
      <form autoComplete="off">
        <Input
          id="searchInput"
          type="text"
          name="filter"
          onChange={handleChange}
          required
        />
        <Label htmlFor="searchInput">Search</Label>
      </form>
    </FormBox>
  );
};

export default Filter;
