import styled from "styled-components";
import { palette } from "../../../styles/palette";

export const MainFavCardListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainFavCardListWrap = styled.div`
  width: 516px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const MainFavCardListHeader = styled.div`
  width: 100%;
  height: 84px;
  background-color: ${palette.blue[10]};
  border-radius: 4px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const MainFavCartLabel = styled.span`
  width: 150px;
  height: 100%;
  background-color: ${palette.main};
  border-radius: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
export const MainFavCardDeleteIcon = styled.div`
  width: 40px;
  height: 100%;
  background: none;
  border: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  cursor: pointer;
`;
