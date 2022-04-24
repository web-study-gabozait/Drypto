import styled, { css } from "styled-components";
import { palette } from "../../../styles/palette";

export const CoinDetailTradeWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${palette.gray[200]};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.subBackgroundColor};
  padding-bottom: 14px;
`;

export const CoinDetailTradeTitle = styled.div`
  font-size: 13px;
  margin: 15px 13px;
  color: ${({ theme }) => theme.contrast};
  font-weight: bold;
`;

export const CoinDetailTradeItem = styled.div`
  padding: 4px 16px 5px;
  display: flex;
  justify-content: space-between;
`;

export const CoinDetailTradeInfoWrap = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 13px;
    color: ${({ theme }) => theme.contrast};
    line-height: 17px;
  }

  span {
    font-size: 12px;
    margin-top: 2px;
    color: ${({ theme }) => theme.subText};
    line-height: 16px;
  }
`;

export const CoinDetailTradeValueWrap = styled.div<{ change: number }>`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  text-align: end;

  ${({ change }) =>
    change! > 0 &&
    css`
      color: ${palette.red[500]};
    `};

  ${({ change }) =>
    change! < 0 &&
    css`
      color: ${palette.blue[700]};
    `}
  ${({ change }) =>
    change! === 0 &&
    css`
      color: ${({ theme }) => theme.contrast};
    `}

  p {
    line-height: 16px;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: end;
    margin-top: 1px;
    line-height: 16px;
  }
`;
