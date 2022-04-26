import { useMemo } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { mainFavoriteAtom } from "../../../store/main/main.store";
import { Coin } from "../../../types/common/common.type";
import MainFavoriteCard from "./mainFavoriteCard/MainFavoriteCard";
import {
  MainFavCardDeleteIcon,
  MainFavCardListContainer,
  MainFavCardListHeader,
  MainFavCardListWrap,
  MainFavCartLabel,
} from "./style";
import { FaTrash } from "@react-icons/all-files/fa/faTrash";
import local from "../../../util/local";
import { LOCAL_FAVORITES_KEY } from "../../../constants/localStorage.contants";

type Props = {
  data: Coin[] | null;
};

const MainFavoriteCardList = ({ data }: Props) => {
  const favorites = useRecoilValue(mainFavoriteAtom);

  const resetFavorites = useResetRecoilState(mainFavoriteAtom);

  const favoriteData = useMemo(() => {
    return data?.filter((coin) => favorites.includes(coin.market));
  }, [favorites, data]);

  const removeAllFavorites = () => {
    resetFavorites();
    local.set(LOCAL_FAVORITES_KEY, JSON.stringify([]));
  };

  return (
    <MainFavCardListContainer>
      <MainFavCardListHeader>
        <MainFavCartLabel>즐겨찾기 목록</MainFavCartLabel>
        <MainFavCardDeleteIcon onClick={removeAllFavorites}>
          <div>
            <FaTrash />
          </div>
        </MainFavCardDeleteIcon>
      </MainFavCardListHeader>
      <MainFavCardListWrap>
        {favoriteData?.map((coin) => (
          <MainFavoriteCard data={coin} key={`favorite coin ${coin.market}`} />
        ))}
      </MainFavCardListWrap>
    </MainFavCardListContainer>
  );
};

export default MainFavoriteCardList;
