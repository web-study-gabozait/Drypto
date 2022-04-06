import styled from "styled-components";
import { palette } from "../../styles/palette";

const Logo = () => {
  return <LogoContainer />;
};

const LogoContainer = styled.div`
  width: 100px;
  height: 36px;
  border-radius: 20px;
  background-color: ${palette.main};
`;

export default Logo;
