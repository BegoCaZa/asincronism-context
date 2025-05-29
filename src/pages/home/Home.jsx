import CountryCard from '../../components/countryCard/CountryCard';
import Filter from '../../components/filter/Filter';
import { StyledCardsContainer } from './home.styles';
import { useEffect, useState } from 'react';

const Home = () => {
  const [countries, setCountry] = useState([]);
  const [filter, setFilter] = useState('');

  let filteredCountries = [];

  useEffect(() => {
    getCountry(setCountry);
  }, []);

  if (filter) {
    filteredCountries = countries.filter(country => country.region === filter);

    return (
      <StyledCardsContainer>
        <Filter filter={filter} setFilter={setFilter} />
        {filteredCountries.map(country => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </StyledCardsContainer>
    );
  }

  return (
    <StyledCardsContainer>
      <Filter filter={filter} setFilter={setFilter} />
      {/* <StyledSearchBar /> */}
      {countries.map(country => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </StyledCardsContainer>
  );
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
