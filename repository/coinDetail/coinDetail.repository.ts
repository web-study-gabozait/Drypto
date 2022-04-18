import customAxios from "../../lib/axios";
import { CoinResponse } from "../../types/coinDetail/coinDetail.type";
import { GetCoinParam } from "./coinDetail.param";

class CoinRepository {
  public async getCoin({ coinid }: GetCoinParam): Promise<CoinResponse | null> {
    try {
      const { data } = await customAxios.get<CoinResponse>(`/coins/${coinid}`);
      return data;
    } catch (error) {
      return null;
    }
  }
}

export default new CoinRepository();
