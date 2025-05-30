import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const StyledSearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const StyledSearchIcon = styled.img`
  position: absolute;
  left: 20px;
  z-index: 1;
  width: 20px;
  height: 20px;
`;

export const StyledSearchInput = styled.input`
  width: 100%;
  padding: 18px 20px 18px 50px;
  border: none;
  border-radius: 10px;
  background-color: ${COLORS.white};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  color: ${COLORS.grey950};
  font-weight: 600;

  &::placeholder {
    color: ${COLORS.grey400};
    opacity: 0.7;
    font-weight: 400;
  }
`;
