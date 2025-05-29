import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
export const StyledFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  border-radius: 10px;
  padding: 10px;
  background-color: ${COLORS.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const StyledFilterButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  color: ${COLORS.grey950};
  font-size: 16px;
  font-weight: 200;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StyledArrowIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: auto;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const StyledFilterDropdownMenu = styled.div`
  position: absolute;
  top: 70px;
  left: 0;
  width: 200px;
  padding: 20px 20px;
  background-color: ${COLORS.white};
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledFilterOption = styled.span`
  cursor: pointer;
  color: ${COLORS.grey950};
  font-size: 14px;
  font-weight: 200;
`;
