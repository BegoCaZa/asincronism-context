import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
export const StyledFilterContainer = styled.div`
  width: 200px;
`;

export const StyledDropdownMenu = styled.select`
  border: none;
  padding: 10px;
  width: 200px;
  padding: 20px;
  padding-right: 40px;
  background-color: ${({ $darkMode }) =>
    $darkMode ? COLORS.darkModeBodyBackground : COLORS.white};
  color: ${({ $darkMode }) => ($darkMode ? COLORS.white : COLORS.grey950)};

  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  font-size: 14px;
  font-weight: 500;
  appearance: none;

  background-image: ${({ $darkMode }) =>
    $darkMode
      ? `url('/assets/dropdownArrowDarkMode.svg')`
      : `url('/assets/dropdownArrowLightMode.svg')`};
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-size: 10px;
`;

export const StyledFilterOption = styled.option`
  cursor: pointer;
  color: ${COLORS.grey300};
  font-size: 14px;
  font-weight: 200;
`;
