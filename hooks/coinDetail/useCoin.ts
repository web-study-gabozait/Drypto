import { useEffect, useState } from "react";
import {
  COIN_TICKERS_START_DATE,
  COIN_TRADES_MAX_NUM,
} from "../../constants/product.constants";
import toast from "../../lib/toast";
import coinDetailRepository from "../../repository/coinDetail/coinDetail.repository";
import {
  CoinDetail,
  CoinTicker,
  CoinTrade,
} from "../../types/common/common.type";

type Props = {
  coinid: string;
  isClient: boolean;
};

const useCoin = ({ coinid, isClient }: Props) => {
  const [coinDetailData, setCoinDetailData] = useState<CoinDetail | null>(null);
  const [coinTickersData, setCoinTickersData] = useState<CoinTicker[] | null>(
    null
  );
  const [coinTradesData, setCoinTradesData] = useState<CoinTrade[] | null>(
    null
  );

  const getCoinInfo = async (coinid: string) => {
    try {
      const coinDetaildata = await coinDetailRepository.getCoin({ coinid });
      setCoinDetailData(coinDetaildata!);

      const coinTickerData = await coinDetailRepository.getCoinTickers({
        coinid,
        startDate: COIN_TICKERS_START_DATE,
      });
      setCoinTickersData(coinTickerData);

      const coinTradesData = await coinDetailRepository.getCoinTrades({
        coinid,
        maxNum: COIN_TRADES_MAX_NUM,
      });
      setCoinTradesData(coinTradesData);
    } catch (error) {
      toast.error("코인 상세정보 불러오기 실패");
      setCoinDetailData(null);
      setCoinTickersData(null);
      setCoinTradesData(null);
    }
  };

  useEffect(() => {
    if (isClient) {
      getCoinInfo(coinid);
    }
  }, [isClient]);

  return {
    coinDetailData,
    coinTickersData,
    coinTradesData,
  };
};

export default useCoin;
