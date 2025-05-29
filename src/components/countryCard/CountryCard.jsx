import { useEffect, useState } from 'react';

const CountryCard = () => {
  const [countries, setCountry] = useState([]);
  console.log(countries);
  useEffect(() => {
    getCountry(setCountry);
  }, []);

  return (
    <>
      {countries.map(country => (
        <StyledCardContainer key={country.name.common}>
          <StyledFlagImage src={country?.flags?.svg} />
          <StyledCountryInfoContainer>
            <StyledCountryName>{country?.name?.common}</StyledCountryName>
            <StyledLabelContainer>
              <StyledLabelTitle>Population</StyledLabelTitle>
              <StyledData>{country?.population}</StyledData>
            </StyledLabelContainer>

            <StyledLabelContainer>
              <StyledLabelTitle>Region</StyledLabelTitle>
              <StyledData>{country?.population}</StyledData>
            </StyledLabelContainer>

            <StyledLabelContainer>
              <StyledLabelTitle>Capital</StyledLabelTitle>
              <StyledData>{country?.capital[0]}</StyledData>
            </StyledLabelContainer>
          </StyledCountryInfoContainer>
        </StyledCardContainer>
      ))}
    </>
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

export default CountryCard;
