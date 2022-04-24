import dayjs from "dayjs";
import { useState } from "react";
import { COIN_DETAIL_CATEGORY } from "../../constants/product.constants";
import {
  CoinDetail as CoinDetailType,
  CoinTicker as CoinTickerType,
  CoinTrade,
} from "../../types/common/common.type";
import transformMoney from "../../util/transformMoney";
import CoinDetailChart from "./CoinDetailChart";
import CoinDetailQuote from "./coinDetailQuote/CoinDetailTable";
import CoinDetailTrade from "./coinDetailTrade/CoinDetailTrade";

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
  CoinDetailMiddleWrap,
  CoinDetailMiddleCategoryWrap,
  CoinDetailMiddleCategoryItem,
  CoinDetailTopChangeWrap,
  CoinDetailTopChangePoint,
  CoinDetailTopChangeValue,
  CoinDetailMiddleLeftWrap,
  CoinDetailMiddleRightWrap,
} from "./style";

type Props = {
  coinDetailData: CoinDetailType | null;
  coinTickersData: CoinTickerType[] | null;
  coinTradesData: CoinTrade[] | null;
};

const CoinDetail = ({
  coinDetailData,
  coinTickersData,
  coinTradesData,
}: Props) => {
  console.log(coinDetailData, coinTickersData, coinTradesData);

  const [category, setCategory] = useState("일별시세");

  return (
    <>
      <CoinDetailTopBox>
        {coinDetailData && coinTickersData && (
          <>
            <CoinDetailTopTitle>
              Drypto &gt; {coinDetailData?.market}
            </CoinDetailTopTitle>
            <CoinDetailTopName>{coinDetailData?.market}</CoinDetailTopName>
            <CoinDetailTopValueWrap>
              <CoinDetailTopValue>
                {transformMoney.korea(coinDetailData?.prev_closing_price)}원
              </CoinDetailTopValue>
              <CoinDetailTopChangeWrap>
                <CoinDetailTopChangePoint change={coinDetailData.change} />
                <CoinDetailTopChangeValue>
                  {coinDetailData.signed_change_price}
                </CoinDetailTopChangeValue>
              </CoinDetailTopChangeWrap>
              <CoinDetailTopValueDate>
                {dayjs(coinDetailData.trade_date).format("YYYY.MM.DD")} 종가기준
              </CoinDetailTopValueDate>
            </CoinDetailTopValueWrap>
            <CoinDetailHLine width={"100%"} />
            <CoinDetailTopWrap>
              <CoinDetailTopInfoWrap>
                <CoinDetailTopTitle>코인 정보</CoinDetailTopTitle>
                <CoinDetailTopInfoItem>
                  <h1>발행한도</h1>
                  {/* <span>{coinTickerData.max_supply}</span> */}
                </CoinDetailTopInfoItem>
                <CoinDetailTopInfoItem>
                  <h1>현재 거래량</h1>
                  {/* <span>{coinTickerData.circulating_supply}</span> */}
                </CoinDetailTopInfoItem>
                <CoinDetailTopInfoItem>
                  <h1>총 거래량</h1>
                  {/* <span>{coinTickerData.total_supply}</span> */}
                </CoinDetailTopInfoItem>
              </CoinDetailTopInfoWrap>
              <CoinDetailVLine height="100%" />
              <CoinDetailChart coinTickersData={coinTickersData} />
              <CoinDetailVLine height="100%" />
            </CoinDetailTopWrap>
          </>
        )}
      </CoinDetailTopBox>
      <CoinDetailMiddleWrap>
        <CoinDetailMiddleLeftWrap>
          <CoinDetailMiddleCategoryWrap>
            {COIN_DETAIL_CATEGORY.map((item) => (
              <CoinDetailMiddleCategoryItem
                isSelect={category === item.title}
                key={`coinDetail_${item.title}`}
                onClick={() => setCategory(item.title)}
              >
                {item.title}
              </CoinDetailMiddleCategoryItem>
            ))}
          </CoinDetailMiddleCategoryWrap>
          {category === "일별시세" && (
            <CoinDetailQuote coinTickersData={coinTickersData} />
          )}
        </CoinDetailMiddleLeftWrap>
        <CoinDetailMiddleRightWrap>
          <CoinDetailTrade coinTradesData={coinTradesData} />
        </CoinDetailMiddleRightWrap>
      </CoinDetailMiddleWrap>
    </>
  );
};

export default CoinDetail;
