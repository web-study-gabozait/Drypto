import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { LOCAL_FAVORITES_KEY } from "../../constants/localStorage.contants";
import { mainFavoriteAtom } from "../../store/main/main.store";
import local from "../../util/local";

type Props = {
  pick: boolean;
  setPick: Dispatch<SetStateAction<boolean>>;
};

const useFavorites = ({ pick, setPick }: Props) => {
  const [favorites, setFavorites] = useRecoilState(mainFavoriteAtom);

  const resetFavorites = useResetRecoilState(mainFavoriteAtom);

  const handlePick = (coinid: string) => {
    handleFavorites(coinid, pick);
    setPick((prev) => !prev);
  };

  const handleFavorites = (coinid: string, pick: boolean) => {
    const copyFav = favorites;

    if (!pick) {
      const isOverlap = favorites.find((prev) => prev === coinid);

      if (isOverlap !== undefined) {
        return;
      }

      const addFav = copyFav.concat(coinid);

      setFavorites(addFav);
      local.set(LOCAL_FAVORITES_KEY, JSON.stringify(addFav));
    } else {
      const removeFav = copyFav.filter((prev) => prev !== coinid);
      setFavorites(removeFav);
      local.set(LOCAL_FAVORITES_KEY, JSON.stringify(removeFav));
    }
  };

  const removeAllFavoritesv = () => {
    resetFavorites();
    local.set(LOCAL_FAVORITES_KEY, JSON.stringify([]));
  };

  return {
    pick,
    handlePick,
    removeAllFavoritesv,
  };
};

export default useFavorites;
