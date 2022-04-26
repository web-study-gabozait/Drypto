import styled from "styled-components";
import { palette } from "../../../styles/palette";

export const MainFavCardListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainFavCardListWrap = styled.div`
  width: 516px;
  height: 342px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  row-gap: 20px;
  background-color: ${({ theme }) => theme.coinCardBg};
  border: 1px solid rgba(0, 0, 0, 0.03);
  padding: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MainFavCardListHeader = styled.div`
  width: 100%;
  height: 84px;
  background-color: ${palette.main};

  border-radius: 4px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const MainFavCardLabel = styled.span`
  height: 100%;
  background-color: ${palette.gray[600]};
  border-radius: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  column-gap: 5px;
  padding: 10px 14px;
`;

export const MainFavCardLabelIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const MainFavCardDeleteIcon = styled.div`
  width: 44px;
  height: 100%;
  border: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  cursor: pointer;
  background-color: white;
  border-radius: 20px;
`;
