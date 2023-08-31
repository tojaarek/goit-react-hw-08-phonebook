import { FormBox, Label, Input } from './Filter.styled';

const Filter = ({ filter, onFilterChange }) => {
  const handleChange = event => {
    onFilterChange(event.target.value);
  };

  return (
    <FormBox>
      <form autoComplete="off">
        <Input
          id="searchInput"
          type="text"
          value={filter}
          onChange={handleChange}
          required
        />
        <Label htmlFor="searchInput">Search</Label>
      </form>
    </FormBox>
  );
};

export default Filter;
