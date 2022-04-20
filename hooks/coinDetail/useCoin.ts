import { useEffect, useState } from "react";
import toast from "../../lib/toast";
import coinDetailRepository from "../../repository/coinDetail/coinDetail.repository";
import {
  CoinDetail,
  CoinHistorical,
  CoinTicker,
} from "../../types/common/common.type";

type Props = {
  coinid: string;
  isClient: boolean;
};

const useCoin = ({ coinid, isClient }: Props) => {
  const [coinDetailData, setCoinDetailData] = useState<CoinDetail | null>(null);
  const [coinTickerData, setCoinTickerData] = useState<CoinTicker | null>(null);
  const [coinHistoricalData, setCoinHistoricalData] = useState<
    CoinHistorical[] | null
  >(null);

  const getCoinInfo = async (coinid: string) => {
    try {
      const coinDetaildata = await coinDetailRepository.getCoin({ coinid });
      setCoinDetailData(coinDetaildata!);

      const coinTickerData = await coinDetailRepository.getCoinTickers({
        coinid,
      });
      setCoinTickerData(coinTickerData);

      const endDate = Math.floor(Date.now() / 1000);
      const startDate = endDate - 60 * 60 * 24 * 7 * 2;

      const coinHistoricalData = await coinDetailRepository.getCoinHistorical({
        coinid,
        endDate: String(endDate),
        startDate: String(startDate),
      });
      setCoinHistoricalData(coinHistoricalData);
    } catch (error) {
      toast.error("코인 상세정보 불러오기 실패");
      setCoinDetailData(null);
      setCoinTickerData(null);
      setCoinHistoricalData(null);
    }
  };

  useEffect(() => {
    if (isClient) {
      getCoinInfo(coinid);
    }
  }, []);

  return {
    coinDetailData,
    coinTickerData,
    coinHistoricalData,
  };
};

export default useCoin;
