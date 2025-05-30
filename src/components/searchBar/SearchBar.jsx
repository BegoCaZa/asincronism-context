import {
  StyledSearchContainer,
  StyledSearchIcon,
  StyledSearchInput
} from './searchBar.styles';

const SearchBar = ({ setSearch }) => {
  return (
    <StyledSearchContainer>
      <StyledSearchIcon src='/assets/search.svg' />
      <StyledSearchInput
        type='text'
        placeholder='Search for a country...'
        onChange={event => setSearch(event.target.value)}
      />
    </StyledSearchContainer>
  );
};
export default SearchBar;
