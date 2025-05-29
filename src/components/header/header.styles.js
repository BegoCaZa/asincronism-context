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
