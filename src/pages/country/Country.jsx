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
  StyledInfo
} from './country.styles';
const Country = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <StyledGeneralContainer>
      <StyledButtonContainer>
        <StyledBackButton to='/'>Back</StyledBackButton>
      </StyledButtonContainer>
      <StyledCountryContainer>
        <StyledFlagImage src={state.flags.svg} />
        <StyledCountryInfo>
          <StyledCountryName>{state.name.common}</StyledCountryName>
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
        </StyledCountryInfo>
      </StyledCountryContainer>
      {/* <span>{state.name.common}</span> */}
    </StyledGeneralContainer>
  );
};
export default Country;
