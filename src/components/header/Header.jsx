import { StyledHeaderContainer } from './header.styles';

const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledTitle>Where in the world?</StyledTitle>
      <StyledDarkModeButton>
        <StyledIcon />
        <StyledDarkModeText>Dark Mode</StyledDarkModeText>
      </StyledDarkModeButton>
    </StyledHeaderContainer>
  );
};

export default Header;
