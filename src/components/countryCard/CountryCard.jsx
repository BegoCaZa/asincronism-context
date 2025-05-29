// import { useEffect, useState } from 'react';
import {
  StyledCardContainer,
  StyledFlagImage,
  StyledCountryInfoContainer,
  StyledCountryName,
  StyledLabelContainer,
  StyledLabelTitle,
  StyledData
} from './countryCard.styles';

const CountryCard = ({ country }) => {
  //este recibira el filtro de paises
  return (
    <>
      <StyledCardContainer>
        <StyledFlagImage src={country?.flags?.svg} />
        <StyledCountryInfoContainer>
          <StyledCountryName>{country?.name?.common}</StyledCountryName>
          <StyledLabelContainer>
            <StyledLabelTitle>Population</StyledLabelTitle>
            <StyledData>{country?.population}</StyledData>
          </StyledLabelContainer>

          <StyledLabelContainer>
            <StyledLabelTitle>Region</StyledLabelTitle>
            <StyledData>{country?.region}</StyledData>
          </StyledLabelContainer>

          <StyledLabelContainer>
            <StyledLabelTitle>Capital</StyledLabelTitle>
            <StyledData>{country?.capital}</StyledData>
          </StyledLabelContainer>
        </StyledCountryInfoContainer>
      </StyledCardContainer>
    </>
  );
};

export default CountryCard;
