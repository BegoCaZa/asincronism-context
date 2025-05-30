import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
export const StyledFilterContainer = styled.div`
  width: 200px;
`;

// export const StyledGeneralFilterContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   justify-content: flex-start;
//   width: 100%;
// `;

export const StyledDropdownMenu = styled.select`
  border: none;
  padding: 10px;
  width: 200px;
  padding: 20px;
  padding-right: 40px;
  background-color: ${COLORS.white};
  color: ${COLORS.grey950};
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  font-size: 14px;
  font-weight: 500;
  appearance: none;
  color: ${COLORS.grey400};

  background-image: url('public/assets/arrow.svg');
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
