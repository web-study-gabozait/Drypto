import { useQuery } from "react-query";
import coinDetailRepository from "../../repository/coinDetail/coinDetail.repository";

type Param = {
  coinid: string;
};

export const useCoin = ({ coinid }: Param) =>
  useQuery("coinDetail", () => coinDetailRepository.getCoin({ coinid }));
