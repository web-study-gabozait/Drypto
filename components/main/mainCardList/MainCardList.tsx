import { Coin } from "../../../types/common/common.type";
import MainCard from "./mainCard/MainCard";
import { MainCardListContainer } from "./style";

type Props = {
  data: Coin[] | null;
};

const MainCardList = ({ data }: Props) => {
  return (
    <MainCardListContainer>
      {data?.map((coin) => (
        <MainCard data={coin} key={coin.market} />
      ))}
    </MainCardListContainer>
  );
};

export default MainCardList;
