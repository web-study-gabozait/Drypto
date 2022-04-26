import { Coin } from "../../types/common/common.type";
import MainCardList from "./mainCardList/MainCardList";
import MainFavoriteCardList from "./mainFavoriteCardList/MainFavoriteCardList";
import { MainContainer } from "./style";

type Props = {
  data: Coin[] | null;
};

const Main = ({ data }: Props) => {
  return (
    <MainContainer>
      <MainCardList data={data} />
      <MainFavoriteCardList data={data} />
    </MainContainer>
  );
};

export default Main;
