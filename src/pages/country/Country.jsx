import { useLocation } from 'react-router-dom';
import {
  StyledGeneralContainer,
  StyledCountryName,
  StyledFlagImage,
  StyledBackButton,
  StyledButtonContainer,
  StyledCountryContainer,
  StyledCountryInfo,
  StyledCountryData,
  StyledDataItem,
  StyledInfoLabel,
  StyledInfo,
  StyledArrowIcon,
  StyledBorderContriesContainer,
  StyledBorderCountriesTitle,
  StyledButtonsGrid,
  StyledBorderCountryButton,
  StyledNameContainer,
  StyledGeneralInfoContainer
} from './country.styles';
import { useContext } from 'react';
import { DarkModeContext } from '../../lib/contexts/darkMode.context';
const Country = () => {
  const { state } = useLocation();
  const { country, countries } = state;
  //saco toda la info del pais y los paises

  const { darkMode } = useContext(DarkModeContext);

  const borderCountries = country.borders?.map(borderCode =>
    countries.find(c => c.cca3 === borderCode)
  );

  console.log(borderCountries);

  console.log(state);
  return (
    <StyledGeneralContainer $darkMode={darkMode}>
      <StyledButtonContainer>
        <StyledBackButton to='/' $darkMode={darkMode}>
          <StyledArrowIcon
            src={darkMode ? '/assets/arrow_light.svg' : '/assets/arrow.svg'}
          />
          Back
        </StyledBackButton>
      </StyledButtonContainer>
      <StyledCountryContainer>
        <StyledFlagImage src={country.flags.svg} />

        <StyledGeneralInfoContainer>
          <StyledNameContainer>
            <StyledCountryName>{country.name.common}</StyledCountryName>
          </StyledNameContainer>
          <StyledCountryInfo>
            <StyledCountryData>
              <StyledDataItem>
                <StyledInfoLabel>Native Name:</StyledInfoLabel>
                <StyledInfo>
                  {Object.values(country.name.nativeName)[0]?.common}
                </StyledInfo>
              </StyledDataItem>

              <StyledDataItem>
                <StyledInfoLabel>Population:</StyledInfoLabel>
                <StyledInfo>{country.population}</StyledInfo>
              </StyledDataItem>

              <StyledDataItem>
                <StyledInfoLabel>Region:</StyledInfoLabel>
                <StyledInfo>{Object.values(country.region)}</StyledInfo>
              </StyledDataItem>

              <StyledDataItem>
                <StyledInfoLabel>Sub Region:</StyledInfoLabel>
                <StyledInfo>{Object.values(country.subregion)}</StyledInfo>
              </StyledDataItem>

              <StyledDataItem>
                <StyledInfoLabel>Capital:</StyledInfoLabel>
                <StyledInfo>{Object.values(country.capital)}</StyledInfo>
              </StyledDataItem>
            </StyledCountryData>

            <StyledCountryData>
              <StyledDataItem>
                <StyledInfoLabel>Top Level Domain:</StyledInfoLabel>
                <StyledInfo>{country.tld}</StyledInfo>
              </StyledDataItem>

              <StyledDataItem>
                <StyledInfoLabel>Currencies:</StyledInfoLabel>
                <StyledInfo>
                  {Object.values(country.currencies)[0].name}
                </StyledInfo>
              </StyledDataItem>

              <StyledDataItem>
                <StyledInfoLabel>Languages:</StyledInfoLabel>
                <StyledInfo>{Object.values(country.languages)}</StyledInfo>
              </StyledDataItem>
            </StyledCountryData>
          </StyledCountryInfo>

          <StyledBorderContriesContainer>
            <StyledBorderCountriesTitle>
              Border Countries:
            </StyledBorderCountriesTitle>
            <StyledButtonsGrid>
              {borderCountries?.map(borderCountry => (
                <StyledBorderCountryButton
                  key={borderCountry.cca3}
                  to={`/country/${borderCountry.name.common.toLowerCase()}`}
                  $darkMode={darkMode}
                  state={{ country: borderCountry, countries }}
                >
                  {borderCountry.name.common}
                </StyledBorderCountryButton>
              ))}
            </StyledButtonsGrid>
          </StyledBorderContriesContainer>
        </StyledGeneralInfoContainer>
      </StyledCountryContainer>
    </StyledGeneralContainer>
  );
};
export default Country;
