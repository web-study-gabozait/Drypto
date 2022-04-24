import { CoinTrade } from "../../../types/common/common.type";
import ValuePoint from "../../common/valuePoint/ValuePoint";
import {
  CoinDetailTradeInfoWrap,
  CoinDetailTradeItem,
  CoinDetailTradeTitle,
  CoinDetailTradeValueWrap,
  CoinDetailTradeWrap,
} from "./style";

type Props = {
  coinTradesData: CoinTrade[] | null;
};

const CoinDetailTrade = ({ coinTradesData }: Props) => {
  return (
    <CoinDetailTradeWrap>
      <CoinDetailTradeTitle>최근 체결 내역</CoinDetailTradeTitle>
      {coinTradesData?.map((trade) => (
        <CoinDetailTradeItem
          key={`${trade.trade_date_utc} ${trade.trade_time_utc} trade`}
        >
          <CoinDetailTradeInfoWrap>
            <h1>{trade.market}</h1>
            <span>
              {trade.trade_date_utc} {trade.trade_time_utc}
            </span>
          </CoinDetailTradeInfoWrap>
          <CoinDetailTradeValueWrap change={trade.change_price}>
            <p>{trade.trade_price}</p>
            <span>
              <ValuePoint change_price={trade.change_price} />
              {trade.change_price}
            </span>
          </CoinDetailTradeValueWrap>
        </CoinDetailTradeItem>
      ))}
    </CoinDetailTradeWrap>
  );
};

export default CoinDetailTrade;
