import { useState } from 'react';
import {
  StyledFilterContainer,
  StyledFilterButton,
  StyledFilterOption,
  StyledArrowIcon,
  StyledFilterDropdownMenu
} from './filter.styles';

const Filter = ({ filter, setFilter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterChange = region => {
    setFilter(region);
    setIsOpen(false);
  };

  const clearFilter = () => {
    setFilter('');
    setIsOpen(false);
  };

  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  return (
    <StyledFilterContainer>
      <StyledFilterButton onClick={() => setIsOpen(!isOpen)}>
        {filter ? filter : 'Filter by Region'}
        <StyledArrowIcon src='/assets/arrow.svg' $isOpen={isOpen} />
      </StyledFilterButton>

      {isOpen && (
        <StyledFilterDropdownMenu>
          <StyledFilterOption onClick={clearFilter}>
            All Regions
          </StyledFilterOption>
          {regions.map(region => (
            <StyledFilterOption
              key={region}
              onClick={() => handleFilterChange(region)}
            >
              {region}
            </StyledFilterOption>
          ))}
        </StyledFilterDropdownMenu>
      )}
    </StyledFilterContainer>
  );
};
export default Filter;
