import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const StyledGeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  gap: 40px;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;
export const StyledBackButton = styled.button`
  background-color: ${COLORS.white};
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: ${COLORS.black};
  padding: 10px 20px;

  &:hover {
    color: ${COLORS.grey250};
  }
`;

export const StyledCountryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;
`;
export const StyledFlagImage = styled.img`
  width: 100%;
  border-radius: 8px;
  height: auto;
`;

export const StyledCountryInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 20px;
`;

export const StyledCountryName = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: ${COLORS.black};
`;

export const StyledCountryData = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 10px;
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
  color: ${COLORS.black};
`;
export const StyledInfo = styled.span`
  font-size: 14px;
  font-weight: 200;
  color: ${COLORS.black};
`;
