import customAxios from "../../lib/axios";
import {
  CoinResponse,
  CoinTickersResponse,
} from "../../types/coinDetail/coinDetail.type";
import { GetCoinParam, GetCoinTickersParam } from "./coinDetail.param";

class CoinRepository {
  public async getCoin({ coinid }: GetCoinParam): Promise<CoinResponse | null> {
    try {
      const { data } = await customAxios.get<CoinResponse>(
        `/ticker?markets=${coinid}`
      );

      return data;
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
}

export default new CoinRepository();
