import styled from "styled-components";
import { palette } from "../../../styles/palette";

export const MainNewsListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MainNewsListHeader = styled.div`
  width: 100%;
  height: 84px;
  background-color: ${palette.main};
  border-radius: 4px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: flex-end;
`;

export const MainNewsListDate = styled.p`
  height: 100%;
  font-size: 12px;
  color: black;
  padding: 10px 14px;
  background-color: white;
  border-radius: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  font-size: 16px;
`;

export const MainNewsListLabel = styled.div`
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

export const MainNewsListLabelIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const MainNewsListWrap = styled.div`
  width: 100%;
  height: 342px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  background-color: ${({ theme }) => theme.coinCardBg};
  border: 1px solid rgba(0, 0, 0, 0.03);
  padding: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
