import { Component } from 'react';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchLabel,
  SearchInput,
  SearchBtnText,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.searchQuery);
    this.reset();
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchBtnText>Search</SearchBtnText>
          </SearchFormButton>

          <SearchLabel htmlFor="searchInput"></SearchLabel>
          <SearchInput
            id="searchInput"
            name="searchQuery"
            value={this.state.searchQuery}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </SearchForm>
      </Header>
    );
  }
}

export default Searchbar;
