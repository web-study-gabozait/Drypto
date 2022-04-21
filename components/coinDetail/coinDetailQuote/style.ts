import styled from "styled-components";

export const CoinDetailQuoteTable = styled.table`
  width: 100%;
  font-size: 13px;
  letter-spacing: -0.4px;
  margin-top: 6px;

  background-color: ${({ theme }) => theme.coinCardBg};
`;

export const CoinDetailQuoteTh = styled.th`
  color: ${({ theme }) => theme.contrast};
  font-weight: 400;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #eee;
  line-height: 20px;
  padding: 3px 20px;
  text-align: right;
`;

export const CoinDetailQuoteTd = styled.td`
  padding: 9px 20px 12px;
  text-align: right;
  color: ${({ theme }) => theme.contrast};
`;
