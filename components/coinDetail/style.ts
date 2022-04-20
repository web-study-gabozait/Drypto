import styled from "styled-components";
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

export const CoinDetailTopValue = styled.div`
  font-size: 26px;
  font-weight: 700;
  color: white;
`;

export const CoinDetailTopValueDate = styled.div`
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
