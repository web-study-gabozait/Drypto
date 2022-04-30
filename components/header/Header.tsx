import useTheme from "../../hooks/theme/useTheme";
import HeaderItem from "./HeaderItem";
import {
  HeaderContainer,
  HeaderLogoWrap,
  HeaderUtilItemWrap,
  HeaderWrap,
} from "./style";
import Logo from "./Logo";
import { FiSun, FiUser } from "react-icons/fi";
import { HiOutlineMoon } from "react-icons/hi";

const Header = () => {
  const { theme, toggleChangeTheme } = useTheme();

  return (
    <HeaderContainer>
      <HeaderWrap>
        <HeaderLogoWrap>
          <Logo />
        </HeaderLogoWrap>
        <HeaderUtilItemWrap>
          <HeaderItem onClick={() => {}}>
            <FiUser />
          </HeaderItem>
          <HeaderItem onClick={toggleChangeTheme}>
            {theme === "LIGHT" ? <FiSun /> : <HiOutlineMoon />}
          </HeaderItem>
        </HeaderUtilItemWrap>
      </HeaderWrap>
    </HeaderContainer>
  );
};

export default Header;
