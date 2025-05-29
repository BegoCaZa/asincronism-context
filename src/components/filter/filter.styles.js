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
  background-color: ${COLORS.white};
  color: ${COLORS.grey950};
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  font-weight: 500;
`;

export const StyledFilterOption = styled.option`
  cursor: pointer;
  color: ${COLORS.grey950};
  font-size: 14px;
  font-weight: 200;
`;
