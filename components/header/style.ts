import styled from "styled-components";
import { palette } from "../../styles/palette";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 74px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const HeaderWrap = styled.div`
  width: 1052px;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0px auto;
  justify-content: space-around;
`;

export const HeaderLogoWrap = styled.div``;

export const HeaderUtilItemWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  column-gap: 20px;
`;
