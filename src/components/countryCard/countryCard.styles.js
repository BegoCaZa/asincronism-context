import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  border-radius: 10px;
  background-color: ${COLORS.white};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const StyledFlagImage = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 10px 10px 0 0;
  src: ${({ $src }) => `url(${$src})`};
  object-fit: cover;
  object-position: center;
`;
export const StyledCountryInfoContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  justify-content: flex-start;
`;

export const StyledCountryName = styled.span`
  font-size: 19px;
  font-weight: 700;
  color: ${COLORS.grey950};
`;

export const StyledLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  width: 100%;
`;

export const StyledLabelTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${COLORS.grey950};
`;
export const StyledData = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${COLORS.grey950};
`;
