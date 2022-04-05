import useTheme from "../../hooks/theme/useTheme";
import HeaderItem from "./HeaderItem";
import { HeaderContainer, HeaderWrap } from "./style";

const Header = () => {
  const { theme, toggleChangeTheme } = useTheme();
  const currentTheme = theme.toString();

  return (
    <HeaderContainer>
      <HeaderWrap>
        <HeaderItem title={String(currentTheme)} onClick={toggleChangeTheme} />
      </HeaderWrap>
    </HeaderContainer>
  );
};

export default Header;
