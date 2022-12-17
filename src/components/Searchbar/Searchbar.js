import { useState } from 'react';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchLabel,
  SearchInput,
  SearchBtnText,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(searchQuery);
    reset();
  };

  const handleChange = event => {
    const { value } = event.currentTarget;
    setSearchQuery(value);
  };

  const reset = () => {
    setSearchQuery('');
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <SearchBtnText>Search</SearchBtnText>
        </SearchFormButton>

        <SearchLabel htmlFor="searchInput"></SearchLabel>
        <SearchInput
          id="searchInput"
          name="searchQuery"
          value={searchQuery}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </SearchForm>
    </Header>
  );
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
