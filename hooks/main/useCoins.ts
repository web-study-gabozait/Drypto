import { useQuery } from "react-query";
import mainRepository from "../../repository/main/main.repository";

export const useCoins = () =>
  useQuery("coinsList", () => mainRepository.getCoins());
