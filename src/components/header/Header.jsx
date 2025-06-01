import {
  StyledHeaderContainer,
  StyledTitle,
  StyledDarkModeButton,
  StyledDarkModeText,
  StyledIcon
} from './header.styles';
import { useContext } from 'react';
import { DarkModeContext } from '../../lib/contexts/darkMode.context';

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <StyledHeaderContainer $darkMode={darkMode}>
      <StyledTitle>Where in the world?</StyledTitle>
      <StyledDarkModeButton onClick={toggleDarkMode}>
        <StyledIcon
          src={darkMode ? '/assets/sun.svg' : '/assets/moon_icon.svg'}
        />
        <StyledDarkModeText>Dark Mode</StyledDarkModeText>
      </StyledDarkModeButton>
    </StyledHeaderContainer>
  );
};

export default Header;
