import { StyledFilterOption, StyledDropdownMenu } from './filter.styles';
import { useContext } from 'react';
import { DarkModeContext } from '../../lib/contexts/darkMode.context';

const Filter = ({ filter, setFilter }) => {
  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const { darkMode } = useContext(DarkModeContext);

  return (
    <StyledDropdownMenu
      $darkMode={darkMode}
      value={filter}
      onChange={handleFilterChange}
    >
      <StyledFilterOption value='default'>Filter by Region</StyledFilterOption>
      {regions.map(region => (
        <StyledFilterOption key={region} value={region}>
          {region}
        </StyledFilterOption>
      ))}
    </StyledDropdownMenu>
  );
};
export default Filter;
