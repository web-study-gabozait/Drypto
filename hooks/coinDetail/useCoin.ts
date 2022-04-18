import { useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";
import coinDetailRepository from "../../repository/coinDetail/coinDetail.repository";
import { CoinDetail } from "../../types/common/common.type";

// type Param = {
//   coinid: string;
// };

// export const useCoin = ({ coinid }: Param) =>
//   useQuery("coinDetail", () => coinDetailRepository.getCoin({ coinid }));

const useCoin = () => {
  const getCoinInfo = async (coinid: string) => {
    try {
      const data = await coinDetailRepository.getCoin({ coinid });
      return data;
    } catch (error) {
      return null;
    }
  };

  return {
    getCoinInfo,
  };
};

export default useCoin;
