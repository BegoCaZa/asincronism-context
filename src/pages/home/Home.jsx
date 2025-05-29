import CountryCard from '../../components/countryCard/CountryCard';
import { StyledCardsContainer } from './home.styles';
import { useEffect, useState } from 'react';

const Home = () => {
  const [countries, setCountry] = useState([]);

  useEffect(() => {
    getCountry(setCountry);
  }, []);

  return (
    <StyledCardsContainer>
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
