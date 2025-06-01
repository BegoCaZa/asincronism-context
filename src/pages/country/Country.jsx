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

  const { darkMode } = useContext(DarkModeContext);

  const borderCountries = state.borders;
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
        <StyledFlagImage src={state.flags.svg} />

        <StyledGeneralInfoContainer>
          <StyledNameContainer>
            <StyledCountryName>{state.name.common}</StyledCountryName>
          </StyledNameContainer>
          <StyledCountryInfo>
            <StyledCountryData>
              <StyledDataItem>
                <StyledInfoLabel>Native Name:</StyledInfoLabel>
                <StyledInfo>
                  {Object.values(state.name.nativeName)[0]?.common}
                </StyledInfo>
              </StyledDataItem>

              <StyledDataItem>
                <StyledInfoLabel>Population:</StyledInfoLabel>
                <StyledInfo>{state.population}</StyledInfo>
              </StyledDataItem>

              <StyledDataItem>
                <StyledInfoLabel>Region:</StyledInfoLabel>
                <StyledInfo>{Object.values(state.region)}</StyledInfo>
              </StyledDataItem>

              <StyledDataItem>
                <StyledInfoLabel>Sub Region:</StyledInfoLabel>
                <StyledInfo>{Object.values(state.subregion)}</StyledInfo>
              </StyledDataItem>

              <StyledDataItem>
                <StyledInfoLabel>Capital:</StyledInfoLabel>
                <StyledInfo>{Object.values(state.capital)}</StyledInfo>
              </StyledDataItem>
            </StyledCountryData>

            <StyledCountryData>
              <StyledDataItem>
                <StyledInfoLabel>Top Level Domain:</StyledInfoLabel>
                <StyledInfo>{state.tld}</StyledInfo>
              </StyledDataItem>

              <StyledDataItem>
                <StyledInfoLabel>Currencies:</StyledInfoLabel>
                <StyledInfo>
                  {Object.values(state.currencies)[0].name}
                </StyledInfo>
              </StyledDataItem>

              <StyledDataItem>
                <StyledInfoLabel>Languages:</StyledInfoLabel>
                <StyledInfo>{Object.values(state.languages)}</StyledInfo>
              </StyledDataItem>
            </StyledCountryData>
          </StyledCountryInfo>

          <StyledBorderContriesContainer>
            <StyledBorderCountriesTitle>
              Border Countries:
            </StyledBorderCountriesTitle>
            <StyledButtonsGrid>
              {borderCountries.map(country => (
                <StyledBorderCountryButton
                  key={country}
                  state={state}
                  $darkMode={darkMode}
                  to={`/country/${country}`}
                >
                  {country}
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
