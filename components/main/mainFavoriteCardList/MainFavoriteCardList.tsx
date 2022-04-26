import { useMemo } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { mainFavoriteAtom } from "../../../store/main/main.store";
import { Coin } from "../../../types/common/common.type";
import MainFavoriteCard from "./mainFavoriteCard/MainFavoriteCard";
import {
  MainFavCardDeleteIcon,
  MainFavCardListContainer,
  MainFavCardListHeader,
  MainFavCardListWrap,
  MainFavCardLabel,
  MainFavCardLabelIcon,
} from "./style";
import { FaTrash } from "@react-icons/all-files/fa/faTrash";
import { FcViewDetails } from "@react-icons/all-files/fc/FcViewDetails";
import local from "../../../util/local";
import { LOCAL_FAVORITES_KEY } from "../../../constants/localStorage.contants";
import MainFavoriteVoid from "./mainFavoriteVoid/MainFavoriteVoid";

type Props = {
  data: Coin[] | null;
};

const MainFavoriteCardList = ({ data }: Props) => {
  const [favorites, setFavorite] = useRecoilState(mainFavoriteAtom);

  const favoriteData = useMemo(() => {
    return data?.filter((coin) => favorites.includes(coin.market));
  }, [favorites, data]);

  const removeAllFavorites = () => {
    setFavorite([]);
    local.set(LOCAL_FAVORITES_KEY, JSON.stringify([]));
  };

  return (
    <MainFavCardListContainer>
      <MainFavCardListHeader>
        <MainFavCardLabel>
          즐겨찾기 목록
          <MainFavCardLabelIcon>
            <FcViewDetails />
          </MainFavCardLabelIcon>
        </MainFavCardLabel>
        <MainFavCardDeleteIcon onClick={removeAllFavorites}>
          <div>
            <FaTrash />
          </div>
        </MainFavCardDeleteIcon>
      </MainFavCardListHeader>
      <MainFavCardListWrap>
        {favorites.length === 0 ? (
          <MainFavoriteVoid />
        ) : (
          <>
            {favoriteData?.map((coin) => (
              <MainFavoriteCard
                data={coin}
                key={`favorite coin ${coin.market}`}
              />
            ))}
          </>
        )}
      </MainFavCardListWrap>
    </MainFavCardListContainer>
  );
};

export default MainFavoriteCardList;
