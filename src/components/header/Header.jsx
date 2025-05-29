import {
  StyledHeaderContainer,
  StyledTitle,
  StyledDarkModeButton,
  StyledDarkModeText,
  StyledIcon
} from './header.styles';

const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledTitle>Where in the world?</StyledTitle>
      <StyledDarkModeButton>
        <StyledIcon src='public/assets/moon_icon.svg' />
        <StyledDarkModeText>Dark Mode</StyledDarkModeText>
      </StyledDarkModeButton>
    </StyledHeaderContainer>
  );
};

export default Header;
