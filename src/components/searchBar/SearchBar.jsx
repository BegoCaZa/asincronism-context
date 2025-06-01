import {
  StyledSearchContainer,
  StyledSearchIcon,
  StyledSearchInput
} from './searchBar.styles';
import { useContext } from 'react';
import { DarkModeContext } from '../../lib/contexts/darkMode.context';

const SearchBar = ({ setSearch }) => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <StyledSearchContainer>
      <StyledSearchIcon src='/assets/search.svg' />
      <StyledSearchInput
        type='text'
        placeholder='Search for a country...'
        $darkMode={darkMode}
        onChange={event => setSearch(event.target.value)}
      />
    </StyledSearchContainer>
  );
};
export default SearchBar;
