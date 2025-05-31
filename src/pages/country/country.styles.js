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
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;
export const StyledBackButton = styled(Link)`
  background-color: ${COLORS.white};
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: ${COLORS.black};
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

export const StyledArrowIcon = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 10px;
  transform: rotate(90deg);
`;

export const StyledCountryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  gap: 20px;
`;
export const StyledFlagImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const StyledCountryInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 30px;
  margin-bottom: 20px;
`;

export const StyledCountryName = styled.span`
  font-size: 24px;
  font-weight: 700;
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

export const StyledBorderContriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const StyledBorderCountriesTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${COLORS.black};
  margin-right: 20px;
`;
