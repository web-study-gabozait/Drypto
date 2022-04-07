import customAxios from "../../components/lib/axios";
import { CoinsReponse } from "../../types/main/main.type";

class MainRepository {
  public async getCoins(): Promise<CoinsReponse | null> {
    try {
      const { data } = await customAxios.get<CoinsReponse>("/coins");
      return data;
    } catch (error) {
      return null;
    }
  }
}

export default new MainRepository();
