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
  StyledNameContainer
} from './country.styles';
const Country = () => {
  const { state } = useLocation();

  const borderCountries = state.borders;
  console.log(borderCountries);

  console.log(state);
  return (
    <StyledGeneralContainer>
      <StyledButtonContainer>
        <StyledBackButton to='/'>
          <StyledArrowIcon src='/assets/arrow.svg' />
          Back
        </StyledBackButton>
      </StyledButtonContainer>
      <StyledCountryContainer>
        <StyledFlagImage src={state.flags.svg} />
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
              <StyledInfo>{Object.values(state.currencies)[0].name}</StyledInfo>
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
                to={`/country/${country}`}
              >
                {country}
              </StyledBorderCountryButton>
            ))}
          </StyledButtonsGrid>
        </StyledBorderContriesContainer>
      </StyledCountryContainer>
    </StyledGeneralContainer>
  );
};
export default Country;
