import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const StyledHeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 20px;
  margin: 0;
  background-color: ${COLORS.white};
`;

export const StyledTitle = styled.span`
  font-size: 14px;
  font-weight: 700;
`;

export const StyledDarkModeButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 85px;
`;

export const StyledIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const StyledDarkModeText = styled.span`
  font-size: 12px;
  font-weight: 200;
`;
