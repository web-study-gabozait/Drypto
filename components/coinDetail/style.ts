import styled, { css } from "styled-components";
import { palette } from "../../styles/palette";

export const CoinDetailHLine = styled.hr<{ width: string }>`
  width: ${({ width }) => width};
  margin: 20px 0px;
  height: 1px;
  border: 0px;
  border-top: 1px solid ${palette.gray[500]};
`;

export const CoinDetailVLine = styled.div<{ height: string }>`
  width: 1px;
  margin: 0px 20px;
  height: ${({ height }) => height};
  border-left: 1px solid ${palette.gray[500]};
`;

export const CoinDetailTopTitle = styled.p`
  font-size: 12px;
  line-height: 15px;
  color: ${palette.gray[200]};
  margin-bottom: 7px;
`;

export const CoinDetailTopBox = styled.div`
  width: 100%;
  height: 433px;
  background-color: ${palette.gray[600]};
  padding: 27px 36px;
  padding-bottom: 31px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const CoinDetailTopName = styled.h1`
  font-size: 22px;
  color: white;
  font-weight: 700;
  margin-bottom: 7px;
`;

export const CoinDetailTopValueWrap = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const CoinDetailTopValue = styled.h1`
  font-size: 26px;
  font-weight: 700;
  color: white;
`;

export const CoinDetailTopChangeWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12px;
`;

export const CoinDetailTopChangePoint = styled.span<{
  change: string;
}>`
  border-style: solid;
  border-width: 7px 4.5px 0 4.5px;

  ${({ change }) =>
    change === "RISE" &&
    css`
      transform: rotate(-180deg);
      border-color: ${palette.red[300]} transparent transparent transparent;
    `};

  ${({ change }) =>
    change === "EVEN" &&
    css`
      border-color: ${palette.gray[200]} transparent transparent transparent;
    `};

  ${({ change }) =>
    change === "FALL" &&
    css`
      border-color: ${palette.blue[700]} transparent transparent transparent;
    `};
`;

export const CoinDetailTopChangeValue = styled.p`
  font-size: 14px;
  color: white;
`;

export const CoinDetailTopValueDate = styled.p`
  font-size: 12px;
  color: ${palette.gray[400]};
  margin-left: 10px;
`;

export const CoinDetailTopWrap = styled.div`
  display: flex;
  height: 100%;
`;

export const CoinDetailTopInfoWrap = styled.div`
  min-width: 144px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CoinDetailTopInfoItem = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  height: 24px;
  padding: 4px 0px;

  h1 {
    color: ${palette.gray[300]};
  }

  span {
    color: ${palette.gray[200]};
  }
`;

export const CoinDetailMiddleWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CoinDetailMiddleLeftWrap = styled.div`
  min-width: 770px;
  display: flex;
  flex-direction: column;
`;

export const CoinDetailMiddleCategoryWrap = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: start;
  column-gap: 20px;
  border-bottom: 1px solid ${palette.gray[200]};
`;

export const CoinDetailMiddleCategoryItem = styled.div<{ isSelect: boolean }>`
  height: 100%;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  box-sizing: content-box;
  letter-spacing: -0.8px;

  &hover {
    transition: 0.5s;
    color: ${({ theme }) => theme.contrast};
  }

  ${({ isSelect }) =>
    isSelect
      ? css`
          color: ${({ theme }) => theme.contrast};
          border-bottom: 3px solid ${({ theme }) => theme.contrast};
        `
      : css`
          color: ${palette.gray[200]};
        `}
`;

export const CoinDetailMiddleRightWrap = styled.div`
  margin-top: 31px;
  width: 318px;
  display: flex;
  flex-direction: column;
`;
