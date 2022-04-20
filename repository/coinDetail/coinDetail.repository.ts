import customAxios from "../../lib/axios";
import {
  CoinHistoricalResponse,
  CoinResponse,
  CoinTickerResponse,
} from "../../types/coinDetail/coinDetail.type";
import {
  GetCoinHistoricalParam,
  GetCoinParam,
  GetCoinTickerParam,
} from "./coinDetail.param";

class CoinRepository {
  public async getCoin({ coinid }: GetCoinParam): Promise<CoinResponse | null> {
    try {
      const { data } = await customAxios.get<CoinResponse>(`/coins/${coinid}`);
      return data;
    } catch (error) {
      return null;
    }
  }

  public async getCoinTickers({
    coinid,
  }: GetCoinTickerParam): Promise<CoinTickerResponse | null> {
    try {
      const { data } = await customAxios.get<CoinTickerResponse>(
        `/tickers/${coinid}`
      );

      return data;
    } catch (error) {
      return null;
    }
  }

  public async getCoinHistorical({
    coinid,
    endDate,
    startDate,
  }: GetCoinHistoricalParam): Promise<CoinHistoricalResponse | null> {
    try {
      const { data } = await customAxios.get<CoinHistoricalResponse>(
        `/coins/${coinid}/ohlcv/historical?start=${startDate}&end=${endDate}`
      );

      return data;
    } catch (error) {
      return null;
    }
  }
}

export default new CoinRepository();
