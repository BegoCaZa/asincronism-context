import { StyledFilterOption, StyledDropdownMenu } from './filter.styles';

const Filter = ({ filter, setFilter }) => {
  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  //   const clearFilter = () => {
  //     setFilter('');
  //     setIsOpen(false);
  //   };

  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  return (
    <StyledDropdownMenu value={filter} onChange={handleFilterChange}>
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
