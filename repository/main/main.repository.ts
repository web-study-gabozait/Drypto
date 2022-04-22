import { COINS_MAX_NUM } from "../../constants/product.constants";
import customAxios from "../../lib/axios";
import { CoinsResponse } from "../../types/main/main.type";

class MainRepository {
  public async getCoins(): Promise<CoinsResponse | null> {
    try {
      const { data } = await customAxios.get<CoinsResponse>("/market/all");

      return data.slice(0, COINS_MAX_NUM);
    } catch (error) {
      return null;
    }
  }
}

export default new MainRepository();
