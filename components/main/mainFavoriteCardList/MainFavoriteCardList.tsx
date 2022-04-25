import { Coin } from "../../../types/common/common.type";
import { MainFavCardListContainer } from "./style";

type Props = {
  data: Coin[] | null;
};

const MainFavoriteCardList = () => {
  return <MainFavCardListContainer></MainFavCardListContainer>;
};

export default MainFavoriteCardList;
