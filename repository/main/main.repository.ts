import customAxios from "../../lib/axios";
import toast from "../../lib/toast";
import { CoinsReponse } from "../../types/main/main.type";

class MainRepository {
  public async getCoins(): Promise<CoinsReponse | null> {
    try {
      const { data } = await customAxios.get<CoinsReponse>("/coins");
      // toast.success();
      return data.slice(0, 200);
    } catch (error) {
      return null;
    }
  }
}

export default new MainRepository();
