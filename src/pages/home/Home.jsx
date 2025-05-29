import CountryCard from '../../components/countryCard/CountryCard';
import Filter from '../../components/filter/Filter';
import { StyledCardsContainer } from './home.styles';
import { useEffect, useState } from 'react';

const Home = () => {
  const [countries, setCountry] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    getCountry(setCountry);
  }, []);

  const filteredCountries = getFilteredCountries({ filter, countries });

  return (
    <StyledCardsContainer>
      <Filter filter={filter} setFilter={setFilter} />
      {/* <StyledSearchBar /> */}
      {filteredCountries.map(country => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </StyledCardsContainer>
  );
};

const getFilteredCountries = ({ filter, countries }) => {
  if (!filter || filter === 'default') {
    return countries;
  }
  return countries.filter(country => country.region === filter);
};

const getCountry = async setCountry => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const countries = await response.json();
    setCountry(countries);
  } catch (error) {
    console.log(error);
  }
};

export default Home;
