import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { Link } from 'react-router-dom';

export const StyledGeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  gap: 40px;
  background-color: ${({ $darkMode }) =>
    $darkMode ? COLORS.darkModeBodyBackground : COLORS.white};
  color: ${({ $darkMode }) => ($darkMode ? COLORS.white : COLORS.grey950)};

  @media (min-width: 768px) {
    padding: 20px 80px;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  @media (min-width: 768px) {
    padding: 20px 20px;
  }
`;
export const StyledBackButton = styled(Link)`
  background-color: ${({ $darkMode }) =>
    $darkMode ? COLORS.darkModeHeaderBackground : COLORS.white};
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: ${({ $darkMode }) => ($darkMode ? COLORS.white : COLORS.grey950)};
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  &:hover {
    color: ${COLORS.grey250};
  }

  @media (min-width: 768px) {
    padding: 20px 40px;
    font-size: 22px;
  }
`;

export const StyledArrowIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 10px;
`;

export const StyledCountryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  gap: 20px;

  @media (min-width: 1400px) {
    flex-direction: row;
    gap: 50px;
  }
`;
export const StyledFlagImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    border-radius: 18px;
  }

  @media (min-width: 1400px) {
    width: 560px;
  }
`;

export const StyledCountryInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 30px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

export const StyledCountryName = styled.span`
  font-size: 24px;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const StyledCountryData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 10px;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const StyledDataItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
`;

export const StyledInfoLabel = styled.span`
  font-size: 14px;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
export const StyledInfo = styled.span`
  font-size: 14px;
  font-weight: 200;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const StyledBorderContriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0px;
  }
`;

export const StyledBorderCountriesTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin-right: 20px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const StyledButtonsGrid = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const StyledBorderCountryButton = styled(Link)`
  background-color: ${({ $darkMode }) =>
    $darkMode ? COLORS.darkModeHeaderBackground : COLORS.white};
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: ${({ $darkMode }) => ($darkMode ? COLORS.white : COLORS.grey950)};
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  &:hover {
    color: ${COLORS.grey250};
  }
`;

export const StyledGeneralInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;
