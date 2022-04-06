import useTheme from "../../hooks/theme/useTheme";
import HeaderItem from "./HeaderItem";
import {
  HeaderContainer,
  HeaderLogoWrap,
  HeaderUtilItemWrap,
  HeaderWrap,
} from "./style";
import { FiSun } from "@react-icons/all-files/fi/FiSun";
import { FiUser } from "@react-icons/all-files/fi/FiUser";
import { HiOutlineMoon } from "@react-icons/all-files/hi/HiOutlineMoon";
import Logo from "./Logo";

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
