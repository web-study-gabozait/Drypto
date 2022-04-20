import {
  CoinDetail as CoinDetailType,
  CoinHistorical as CoinHistoricalType,
  CoinTicker as CoinTickerType,
} from "../../types/common/common.type";
import CoinDetailChart from "./CoinDetailChart";
import {
  CoinDetailHLine,
  CoinDetailTopBox,
  CoinDetailTopWrap,
  CoinDetailTopName,
  CoinDetailTopTitle,
  CoinDetailTopValue,
  CoinDetailTopValueDate,
  CoinDetailTopValueWrap,
  CoinDetailTopInfoWrap,
  CoinDetailTopInfoItem,
  CoinDetailVLine,
} from "./style";

type Props = {
  coinDetailData: CoinDetailType | null;
  coinTickerData: CoinTickerType | null;
  coinHistoricalData: CoinHistoricalType[] | null;
};

const CoinDetail = ({
  coinDetailData,
  coinTickerData,
  coinHistoricalData,
}: Props) => {
  console.log(coinDetailData, coinTickerData, coinHistoricalData);

  return (
    <>
      <CoinDetailTopBox>
        {coinDetailData && coinTickerData && coinHistoricalData && (
          <>
            <CoinDetailTopTitle>
              Drypto &gt; {coinDetailData?.name}
            </CoinDetailTopTitle>
            <CoinDetailTopName>{coinDetailData?.name}</CoinDetailTopName>
            <CoinDetailTopValueWrap>
              <CoinDetailTopValue>
                {(coinTickerData?.quotes.USD.price * 1000).toLocaleString(
                  "ko-KR"
                )}
                원
              </CoinDetailTopValue>
              <CoinDetailTopValueDate>
                {coinTickerData.last_updated}
              </CoinDetailTopValueDate>
            </CoinDetailTopValueWrap>
            <CoinDetailHLine width={"100%"} />
            <CoinDetailTopWrap>
              <CoinDetailTopInfoWrap>
                <CoinDetailTopTitle>코인 정보</CoinDetailTopTitle>
                <CoinDetailTopInfoItem>
                  <h1>발행한도</h1>
                  <span>{coinTickerData.max_supply}</span>
                </CoinDetailTopInfoItem>
                <CoinDetailTopInfoItem>
                  <h1>현재 거래량</h1>
                  <span>{coinTickerData.circulating_supply}</span>
                </CoinDetailTopInfoItem>
                <CoinDetailTopInfoItem>
                  <h1>총 거래량</h1>
                  <span>{coinTickerData.total_supply}</span>
                </CoinDetailTopInfoItem>
              </CoinDetailTopInfoWrap>
              <CoinDetailVLine height="100%" />
              <CoinDetailChart coinHistoricalData={coinHistoricalData} />
              <CoinDetailVLine height="100%" />
            </CoinDetailTopWrap>
          </>
        )}
      </CoinDetailTopBox>
    </>
  );
};

export default CoinDetail;
