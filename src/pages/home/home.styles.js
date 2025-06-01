import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS } from '../../styles/colors';

export const StyledLink = styled(Link)`
  display: block;
  width: 100%;
`;
export const StyledCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  gap: 40px;
  background-color: ${({ $darkMode }) =>
    $darkMode ? COLORS.darkModeBodyBackground : COLORS.grey50};
  color: ${({ $darkMode }) => ($darkMode ? COLORS.white : COLORS.grey950)};

  @media (min-width: 768px) {
    padding: 40px;
  }
`;

export const StyledFiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledCardsGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  gap: 20px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
`;
