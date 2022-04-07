import { useEffect } from "react";
import mainRepository from "../../repository/main/main.repository";
import { MainContainer } from "./style";

const Main = () => {
  useEffect(() => {
    mainRepository.getCoins();
  }, []);

  return <MainContainer></MainContainer>;
};

export default Main;
