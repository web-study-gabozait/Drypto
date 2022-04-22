import { CoinTicker } from "../../../types/common/common.type";
import transformMoney from "../../../util/transformMoney";
import {
  CoinDetailQuoteTable,
  CoinDetailQuoteTd,
  CoinDetailQuoteTh,
} from "./style";

type Props = {
  coinTickersData: CoinTicker[] | null;
};

const CoinDetailQuote = ({ coinTickersData }: Props) => {
  console.log(coinTickersData);

  return (
    <CoinDetailQuoteTable>
      <thead>
        <tr>
          <CoinDetailQuoteTh style={{ textAlign: "left" }}>
            일자
          </CoinDetailQuoteTh>
          <CoinDetailQuoteTh>시가</CoinDetailQuoteTh>
          <CoinDetailQuoteTh>고가</CoinDetailQuoteTh>
          <CoinDetailQuoteTh>저가</CoinDetailQuoteTh>
          <CoinDetailQuoteTh>종가</CoinDetailQuoteTh>
        </tr>
      </thead>
      <tbody>
        {coinTickersData?.map((quote) => (
          <tr key={`${quote.market} quote ${quote.candle_date_time_utc}`}>
            <CoinDetailQuoteTd style={{ textAlign: "left" }}>
              {quote.candle_date_time_utc.slice(0, 10)}
            </CoinDetailQuoteTd>
            <CoinDetailQuoteTd>{quote.opening_price}</CoinDetailQuoteTd>
            <CoinDetailQuoteTd>{quote.high_price}</CoinDetailQuoteTd>
            <CoinDetailQuoteTd>{quote.low_price}</CoinDetailQuoteTd>
            <CoinDetailQuoteTd>{quote.prev_closing_price}</CoinDetailQuoteTd>
          </tr>
        ))}
      </tbody>
    </CoinDetailQuoteTable>
  );
};

export default CoinDetailQuote;
