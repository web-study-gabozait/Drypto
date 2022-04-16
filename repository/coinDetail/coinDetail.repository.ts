import customAxios from "../../lib/axios";
import { CoinReponse } from "../../types/coinDetail/coinDetail.type";
import { GetCoinParam } from "./coinDetail.param";

class CoinRepository {
  public async getCoin({ coinid }: GetCoinParam): Promise<CoinReponse | null> {
    try {
      const { data } = await customAxios.get<CoinReponse>(`/coins/${coinid}`);
      return data;
    } catch (error) {
      return null;
    }
  }
}

export default new CoinRepository();
