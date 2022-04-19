import { useEffect, useState } from "react";
import toast from "../../lib/toast";
import mainRepository from "../../repository/main/main.repository";
import { Coin } from "../../types/common/common.type";

const useCoins = (isClient: boolean) => {
  const [data, setData] = useState<Coin[] | null>([]);

  const getCoinsInfo = async () => {
    try {
      const data = await mainRepository.getCoins();
      setData(data);
    } catch (error) {
      toast.error("코인정보 불러오기 실패");
      setData(null);
    }
  };

  useEffect(() => {
    if (isClient) {
      getCoinsInfo();
    }
  }, [isClient]);

  return {
    data,
  };
};

export default useCoins;
