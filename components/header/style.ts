import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 74px;
  box-sizing: border-box;
  border-bottom: 1px solid #00000012;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const HeaderWrap = styled.div`
  width: 1130px;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0px auto;
`;
