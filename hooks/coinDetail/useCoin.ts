import toast from "../../lib/toast";
import coinDetailRepository from "../../repository/coinDetail/coinDetail.repository";

const useCoin = () => {
  const getCoinInfo = async (coinid: string) => {
    try {
      const data = await coinDetailRepository.getCoin({ coinid });
      return data;
    } catch (error) {
      toast.error("코인 상세정보 불러오기 실패");

      return null;
    }
  };

  return {
    getCoinInfo,
  };
};

export default useCoin;
