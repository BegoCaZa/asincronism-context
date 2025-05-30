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
  background-color: ${COLORS.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    padding: 50px 50px;
  }
`;

export const StyledTitle = styled.span`
  font-size: 20px;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const StyledDarkModeButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90px;
`;

export const StyledIcon = styled.img`
  width: 18px;
  height: 18px;
`;

export const StyledDarkModeText = styled.span`
  font-size: 14px;
  font-weight: 700;
`;
