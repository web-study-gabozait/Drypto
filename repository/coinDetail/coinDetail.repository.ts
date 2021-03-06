import customAxios from "../../lib/axios";
import {
  CoinResponse,
  CoinTickersResponse,
  CoinTradesResponse,
} from "../../types/coinDetail/coinDetail.type";
import { CoinDetail } from "../../types/common/common.type";
import {
  GetCoinParam,
  GetCoinTickersParam,
  GetCoinTradesParam,
} from "./coinDetail.param";

class CoinRepository {
  public async getCoin({ coinid }: GetCoinParam): Promise<CoinResponse | null> {
    try {
      const { data } = await customAxios.get<CoinDetail[]>(
        `/ticker?markets=${coinid}`
      );

      return data[0];
    } catch (error) {
      return null;
    }
  }

  public async getCoinTickers({
    coinid,
    startDate,
  }: GetCoinTickersParam): Promise<CoinTickersResponse | null> {
    try {
      const { data } = await customAxios.get<CoinTickersResponse>(
        `/candles/days?market=${coinid}&count=${startDate}`
      );

      return data;
    } catch (error) {
      return null;
    }
  }

  public async getCoinTrades({
    coinid,
    maxNum,
  }: GetCoinTradesParam): Promise<CoinTradesResponse | null> {
    try {
      const { data } = await customAxios.get<CoinTradesResponse>(
        `/trades/ticks?market=${coinid}&count=${maxNum}`
      );
      return data;
    } catch (error) {
      return null;
    }
  }
}

export default new CoinRepository();
