import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const StyledHeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 50px 20px;
  margin: 0;
  background-color: ${({ $darkMode }) =>
    $darkMode ? COLORS.darkModeHeaderBackground : COLORS.white};
  color: ${({ $darkMode }) => ($darkMode ? COLORS.white : COLORS.grey950)};

  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: auto;

  @media (min-width: 768px) {
    padding: 50px 90px;
  }
`;

export const StyledTitle = styled.span`
  font-size: 20px;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

export const StyledDarkModeButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 95px;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 130px;
  }
`;

export const StyledIcon = styled.img`
  width: 18px;
  height: 18px;

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const StyledDarkModeText = styled.span`
  font-size: 14px;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
