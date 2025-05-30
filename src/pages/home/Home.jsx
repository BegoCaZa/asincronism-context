import CountryCard from '../../components/countryCard/CountryCard';
import Filter from '../../components/filter/Filter';
import StyledSearchBar from '../../components/searchBar/SearchBar';
import {
  StyledCardsContainer,
  StyledFiltersContainer,
  StyledCardsGrid,
  StyledLink
} from './home.styles';
import { useEffect, useState } from 'react';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    getCountry(setCountries);
  }, []);

  const filteredCountries = getFilteredCountries({ filter, countries, search });

  return (
    <StyledCardsContainer>
      <StyledFiltersContainer>
        <StyledSearchBar setSearch={setSearch} />
        <Filter filter={filter} setFilter={setFilter} />
      </StyledFiltersContainer>

      <StyledCardsGrid>
        {filteredCountries.map(country => (
          <StyledLink
            key={country.name.common}
            to={`/country/${country.name.common.toLowerCase()}`}
            state={country}
          >
            <CountryCard country={country} />
          </StyledLink>
        ))}
      </StyledCardsGrid>
    </StyledCardsContainer>
  );
};

const getFilteredCountries = ({ filter, countries, search }) => {
  //por busqueda
  if (search) {
    return countries.filter(country =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    );
  }

  //buscador select por region
  if (!filter || filter === 'default') {
    return countries;
  }
  return countries.filter(country => country.region === filter);
};

const getCountry = async setCountries => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const countries = await response.json();
    setCountries(countries);
  } catch (error) {
    console.log(error);
  }
};

export default Home;
