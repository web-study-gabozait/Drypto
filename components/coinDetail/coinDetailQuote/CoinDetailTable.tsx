import { CoinHistorical } from "../../../types/common/common.type";
import transformMoney from "../../../util/transformMoney";
import {
  CoinDetailQuoteTable,
  CoinDetailQuoteTd,
  CoinDetailQuoteTh,
} from "./style";

type Props = {
  coinHistoricalData: CoinHistorical[] | null;
};

const CoinDetailQuote = ({ coinHistoricalData }: Props) => {
  console.log(coinHistoricalData);

  return (
    <CoinDetailQuoteTable>
      <thead>
        <tr>
          <CoinDetailQuoteTh style={{ textAlign: "left" }}>
            일자
          </CoinDetailQuoteTh>
          <CoinDetailQuoteTh>종가</CoinDetailQuoteTh>
          <CoinDetailQuoteTh>고가</CoinDetailQuoteTh>
          <CoinDetailQuoteTh>저가</CoinDetailQuoteTh>
          <CoinDetailQuoteTh>시가총액</CoinDetailQuoteTh>
        </tr>
      </thead>
      <tbody>
        {coinHistoricalData?.map((quote) => (
          <tr key={`quote ${quote.time_open}`}>
            <CoinDetailQuoteTd style={{ textAlign: "left" }}>
              {quote.time_open.slice(0, 10)}
            </CoinDetailQuoteTd>
            <CoinDetailQuoteTd>
              {transformMoney.korea(quote.close)}
            </CoinDetailQuoteTd>
            <CoinDetailQuoteTd>
              {transformMoney.korea(quote.high)}
            </CoinDetailQuoteTd>
            <CoinDetailQuoteTd>
              {transformMoney.korea(quote.low)}
            </CoinDetailQuoteTd>
            <CoinDetailQuoteTd>
              {(quote.market_cap * 1000).toLocaleString("ko-KR")}
            </CoinDetailQuoteTd>
          </tr>
        ))}
      </tbody>
    </CoinDetailQuoteTable>
  );
};

export default CoinDetailQuote;
